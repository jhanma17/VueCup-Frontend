import { defineStore } from 'pinia'

export const componentsStore = defineStore('components', {
  state: () => ({
    placeComponent: true,
    componentToPlace: {
      id: 6,
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
        children: [2, 7],
      },
      {
        id: 2,
        type: "SpanTemplate",
        props: {
          text: "hola",
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
        id: 7,
        type: "BodyTemplate",
        props: {
          text: "body sentence"
        }
      }
    ],
    highlightedComponent: null,
    inspectedComponent: null,
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
      }

      const buildTree = (component) => {
        console.log(component);
        if (component.children) {
          component.children = JSON.parse(JSON.stringify(component.children.map((child) => search(child))));
          component.children.forEach((child) => buildTree(child));
        }
      }

      console.log(root);
      buildTree(root);

      return root.children;
    }
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
    },
    startPlacingComponent(component) {
      this.placeComponent = true;
      this.componentToPlace.type = component.type;
      this.componentToPlace.props = component.props;
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
      this.inspectedComponent = component;
    },
    updateInspectedComponent(component) {
      this.inspectedComponent = component;
    }
  },
})
