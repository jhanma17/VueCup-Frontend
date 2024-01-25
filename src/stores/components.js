import { defineStore } from "pinia";

export const componentsStore = defineStore("components", {
  state: () => ({
    placeComponent: false,
    componentToPlace: {
      id: 7,
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
        children: [1, 3],
      },
      {
        id: 1,
        type: "CardTemplate",
        props: {
          color: "red",
        },
        children: [2, 6],
      },
      {
        id: 2,
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
        id: 3,
        type: "RowTemplate",
        children: [4],
      },
      {
        id: 4,
        type: "ColTemplate",
        props: {
          cols: "4",
        },
        children: [5],
      },
      {
        id: 5,
        type: "ButtonTemplate",
        props: {
          block: true,
          text: "test",
        },
      },
      {
        id: 6,
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

      const search = (id) => {
        for (let component of this.components) {
          if (component.id === id) {
            return component;
          }
        }
      };

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

      const plainComponent = JSON.parse(JSON.stringify(this.componentToPlace));
      this.components.push(plainComponent);

      for (let component of this.components) {
        if (component.id === this.highlightedComponent) {
          if (!component.children) {
            component.children = [];
          }
          component.children.push(plainComponent.id);
        }
      }

      this.componentToPlace.id++;

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
      for (let i = 0; i < this.components.length; i++) {
        if (this.components[i].id == component.id) {
          this.components[i].props = JSON.parse(
            JSON.stringify(component.props)
          );
        }
      }
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
      console.log("dropComponent", id, this.toDragComponent);
      if (this.toDragComponent === id) {
        return;
      }

      for (let component of this.components) {
        if (
          component.children &&
          component.children.includes(this.toDragComponent)
        ) {
          const index = component.children.indexOf(this.toDragComponent);
          component.children.splice(index, 1);
        }

        if (component.id === id) {
          if (!component.children) {
            component.children = [];
          }
          component.children.push(this.toDragComponent);
        }
      }
    },
  },
});
