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
    screen: null,
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

        if (children.length > 0) {
          component.children = JSON.parse(JSON.stringify(children));
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
    initializeComponents(components, screen) {
      let componentsCopy = JSON.parse(JSON.stringify(components));

      //replace _id with id

      for (let component of componentsCopy) {
        component.id = component._id;
        delete component._id;
      }

      this.components = componentsCopy;

      this.screen = screen;
    },

    async placeSelectedComponent() {
      if (!this.placeComponent) {
        return;
      }

      //deep copy the component to place
      const plainComponent = JSON.parse(JSON.stringify(this.componentToPlace));

      plainComponent.father = this.highlightedComponent;

      plainComponent.id = crypto.randomUUID();

      this.components.push(plainComponent);

      try {
        const response = await axios({
          method: "POST",
          url: "/components/create",
          data: {
            screen: this.screen,
            ...plainComponent,
          },
        });

        this.components[this.components.length - 1].id = response.data._id;
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
    async dropComponent(id) {
      //if the component is dropped on itself, do nothing
      if (this.toDragComponent === id) {
        return;
      }

      for (let component of this.components) {
        if (component.id === id) {
          component.father = id;
        }
      }

      try {
        await axios({
          method: "PATCH",
          url: "/components/reparent",
          data: {
            component: this.toDragComponent.id,
            father: id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteComponent(id) {
      //recursively delete all children and the component itself
      const deleteComponent = async (id) => {
        let indexToDelete = null;

        for (let i = 0; i < this.components.length; i++) {
          if (this.components[i].father === id) {
            deleteComponent(component.id);
          }

          if (this.components[i].id === id) {
            indexToDelete = i;
          }
        }

        this.components.splice(indexToDelete, 1);

        try {
          await axios({
            method: "DELETE",
            url: `/components/delete/${id}`,
          });
        } catch (error) {
          console.log(error);
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
    async renameComponent(id, name) {
      for (let component of this.components) {
        if (component.id === id) {
          component.name = name;

          try {
            await axios({
              method: "PATCH",
              url: "/components/rename",
              data: {
                component: id,
                name: name,
              },
            });
          } catch (error) {
            console.log(error);
          }
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
