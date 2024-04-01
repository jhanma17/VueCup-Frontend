import { defineStore } from "pinia";

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
        children: [1],
      },
      {
        id: 1,
        type: "RootTemplate",
        name: "Canvas",
        children: [],
      },
    ],
    highlightedComponent: null,
    inspectedComponent: null,
    toDragComponent: null,
  }),
  getters: {
    componentsTree() {
      const root = JSON.parse(JSON.stringify(this.components[0]));

      //search for a component with the given id
      const search = (id) => {
        for (let component of this.components) {
          if (component.id === id) {
            return component;
          }
        }
      };

      //build the tree recursively
      const buildTree = (component) => {
        if (component.children) {
          component.children = JSON.parse(
            JSON.stringify(component.children.map((child) => search(child)))
          );
          component.children.forEach((child) => buildTree(child));
        }
      };

      buildTree(root);

      return root.children;
    },
  },
  actions: {
    placeSelectedComponent() {
      if (!this.placeComponent) {
        return;
      }

      //deep copy the component to place
      const plainComponent = JSON.parse(JSON.stringify(this.componentToPlace));
      this.components.push(plainComponent);

      //add the component to the children array of the highlighted component
      for (let component of this.components) {
        if (component.id === this.highlightedComponent) {
          if (!component.children) {
            component.children = [];
          }
          component.children.push(plainComponent.id);
        }
      }

      this.componentToPlace.id++;

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
    updateInspectedComponent(component) {
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
        //delete the component from the children array of its parent
        if (
          component.children &&
          component.children.includes(this.toDragComponent)
        ) {
          const index = component.children.indexOf(this.toDragComponent);
          component.children.splice(index, 1);
        }

        //add the component to the children array of the new parent
        if (component.id === id) {
          if (!component.children) {
            component.children = [];
          }
          component.children.push(this.toDragComponent);
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
