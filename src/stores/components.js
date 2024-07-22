import { defineStore } from "pinia";

import axios from "axios";

export const componentsStore = defineStore("components", {
  state: () => ({
    placeComponent: false,
    componentToPlace: {
      id: 2,
      type: "ButtonTemplate",
      name: "Button",
      props: {
        block: true,
        text: "test",
      },
    },
    components: [
      {
        id: 0,
        type: "Root",
        name: "Root",
      },
    ],
    highlightedComponent: null,
    inspectedComponent: null,
    toDragComponent: null,
  }),
  getters: {
    componentsTree() {
      const root = this.components.find(
        (component) => component.type === "Root"
      );

      //search for a component with the given id
      const search = (id) => {
        //returns an array of components wich father is the component with the given id
        return this.components.filter((component) => {
          if (component.father && component.father == id) {
            return component;
          }
        });
      };

      //build the tree recursively
      const buildTree = (component) => {
        const children = search(component.id);
        console.log(children);
        if (children.length > 0) {
          component.children = children;
          for (let child of component.children) {
            buildTree(child);
          }
        }
      };

      buildTree(root);

      return root.children;
    },
  },
  actions: {
    initializeComponents(components) {
      let componentsCopy = JSON.parse(JSON.stringify(components));

      //replace _id with id

      for (let component of componentsCopy) {
        component.id = component._id;
        delete component._id;
      }

      this.components = componentsCopy;
    },
    async placeSelectedComponent(screen) {
      if (!this.placeComponent) {
        return;
      }

      //deep copy the component to place
      const plainComponent = JSON.parse(JSON.stringify(this.componentToPlace));

      plainComponent.father = this.highlightedComponent;

      try {
        const response = await axios({
          method: "POST",
          url: "/components/create",
          data: plainComponent,
        });

        let componentToPush = JSON.parse(
          JSON.stringify(response.data.component)
        );

        componentToPush.id = componentToPush._id;
        delete componentToPush._id;

        this.components.push(componentToPush);
      } catch (error) {
        console.log(error);
      }

      //update the components tree
      this.componentsTree;
      this.stopPlacingComponent();
    },
    startPlacingComponent(component) {
      this.placeComponent = true;
      this.inspectedComponent = null;
      this.highlightedComponent = null;
      this.componentToPlace.name = JSON.parse(JSON.stringify(component.name));
      this.componentToPlace.type = JSON.parse(JSON.stringify(component.type));
      this.componentToPlace.props = JSON.parse(JSON.stringify(component.props));
    },
    stopPlacingComponent() {
      this.placeComponent = false;
    },
    resetHighlighting() {
      this.highlightedComponent = null;
    },
    highlightComponent(id) {
      if (this.placeComponent) {
        this.highlightedComponent = id;
      }
    },
    inspectComponent(component) {
      this.inspectedComponent = JSON.parse(JSON.stringify(component));
      this.highlightedComponent = component.id;
    },
    async updateInspectedComponent(component) {
      //update the component in the components array
      for (let i = 0; i < this.components.length; i++) {
        if (this.components[i].id == component.id) {
          this.components[i].props = JSON.parse(
            JSON.stringify(component.props)
          );
        }
      }
      //update the component in the inspectedComponent
      this.inspectedComponent.props = JSON.parse(
        JSON.stringify(component.props)
      );

      try {
        await axios({
          method: "PATCH",
          url: "/components/update",
          data: {
            component: component.id,
            props: component.props,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    stopInspectingComponent() {
      this.inspectedComponent = null;
      this.highlightedComponent = null;
    },
    startDraggingComponent(id) {
      this.toDragComponent = id;
    },
    stopDraggingComponent() {
      this.toDragComponent = null;
    },
    dropComponent(id) {
      //if the component is dropped on itself, do nothing
      if (this.toDragComponent === id) {
        return;
      }

      for (let component of this.components) {
        if (component.id === id) {
          component.father = id;
        }
      }
    },
    deleteComponent(id) {
      //delete the component from the children array of its parent
      for (let component of this.components) {
        if (
          component.children &&
          component.children.includes(id) &&
          component.id !== id
        ) {
          const index = component.children.indexOf(id);
          component.children.splice(index, 1);
        }
      }

      //recursively delete all children and the component itself
      const deleteComponent = (id) => {
        for (let i = 0; i < this.components.length; i++) {
          if (this.components[i].id === id) {
            if (this.components[i].children) {
              for (let child of this.components[i].children) {
                deleteComponent(child);
              }
            }
            this.components.splice(i, 1);
            break;
          }
        }
      };

      deleteComponent(id);
    },

    // move the position of a component in the children array of its parent
    moveComponentUp(id) {
      for (let component of this.components) {
        if (component.children && component.children.includes(id)) {
          const index = component.children.indexOf(id);
          if (index > 0) {
            const temp = component.children[index - 1];
            component.children[index - 1] = id;
            component.children[index] = temp;
          }
        }
      }
    },

    moveComponentDown(id) {
      for (let component of this.components) {
        if (component.children && component.children.includes(id)) {
          const index = component.children.indexOf(id);
          if (index < component.children.length - 1) {
            const temp = component.children[index + 1];
            component.children[index + 1] = id;
            component.children[index] = temp;
          }
        }
      }
    },

    // rename a component
    renameComponent(id, name) {
      for (let component of this.components) {
        if (component.id === id) {
          component.name = name;
        }
      }
    },

    async saveData() {
      const textToExport = JSON.stringify(this.components, null, 2);
      const file = new Blob([textToExport], { type: "text/plain" });

      const supportsFileSystemAccess =
        "showSaveFilePicker" in window &&
        (() => {
          try {
            return window.self === window.top;
          } catch {
            return false;
          }
        })();
      if (supportsFileSystemAccess) {
        try {
          const handle = await showSaveFilePicker({
            suggestedName: "savedDesign.vcp",
            types: [
              {
                accept: { "text/plain": [".vcp"] },
              },
            ],
          });

          const writable = await handle.createWritable();
          await writable.write(file);
          await writable.close();
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.name, err.message);
            return;
          }
        }
      } else {
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "savedDesign.vcp";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
    },

    importData(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        console.log(text);
        this.components = JSON.parse(text);
      };
      reader.readAsText(file);
    },
  },
});
