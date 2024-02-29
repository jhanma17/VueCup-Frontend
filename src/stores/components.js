import { defineStore } from "pinia";

export const componentsStore = defineStore("components", {
  state: () => ({
    placeComponent: false,
    componentToPlace: {
      id: 8,
      type: "ButtonTemplate",
      props: {
        block: true,
        text: "test",
      },
    },
    components: [
      {
        id: 0,
        type: "Root",
        children: [1],
      },
      {
        id: 1,
        type: "RootTemplate",
        children: [2, 4],
      },
      {
        id: 2,
        type: "CardTemplate",
        props: {
          color: "red",
        },
        children: [3, 7],
      },
      {
        id: 3,
        type: "SpanTemplate",
        props: {
          text: "hola",
          fontFamily: "Roboto",
          fontStyle: "Regular",
          size: 12,
          color: "#ffffff",
        },
      },
      {
        id: 4,
        type: "RowTemplate",
        children: [5],
      },
      {
        id: 5,
        type: "ColTemplate",
        props: {
          cols: "4",
        },
        children: [6],
      },
      {
        id: 6,
        type: "ButtonTemplate",
        props: {
          block: true,
          text: "test",
        },
      },
      {
        id: 7,
        type: "BodyTemplate",
        props: {
          text: "body sentence",
          fontFamily: "Roboto",
          fontStyle: "Regular",
          size: 12,
          color: "#ffffff",
        },
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
  },
});
