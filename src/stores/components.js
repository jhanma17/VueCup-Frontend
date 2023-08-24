import { defineStore } from 'pinia'

export const componentsStore = defineStore('components', {
  state: () => ({
    placeComponent: true,
    componentToPlace: {
      id: 5,
      type: "ButtonTemplate",
      props: {
        block: true,
        text: "test",
      },
    },
    components: [
      {
        id: 0,
        type: "CardTemplate",
        props: {
          color: "red",
        },
        children: [
          {
            id: 1,
            type: "SpanTemplate",
            props: {
              text: "hola",
            },
          },
        ],
      },
      {
        id: 2,
        type: "RowTemplate",
        children: [
          {
            id: 3,
            type: "ColTemplate",
            props: {
              cols: "4",
            },
            children: [
              {
                id: 4,
                type: "ButtonTemplate",
                props: {
                  block: true,
                  text: "test",
                },
              },
            ],
          },
        ],
      },
    ],
    highlightedComponent: null,
  }),
  getters: {
  },
  actions: {
    placeSelectedComponent() {

      if (!this.placeComponent) {
        return;
      }

      // recursively search for the component with the id
      // and add the component to the children

      const search = (components, id) => {
        for (let component of components) {
          if (component.id === id) {
            const plainComponent = JSON.parse(JSON.stringify(this.componentToPlace));
            component.children.push(plainComponent);
            this.componentToPlace.id++;
            return;
          }
          if (component.children) {
            search(component.children, id);
          }
        }
      }

      search(this.components, this.highlightedComponent);
    },
    startPlacingComponent(component) {
      this.placeComponent = true;
      this.componentToPlace.type = component.type;
      this.componentToPlace.props = component.props;
    },
    stopPlacingComponent() {
      this.placeComponent = false;
      this.componentToPlace = null;
    },
    resetHighlighting() {
      this.highlightedComponent = null;
    },
    highlightComponent(id) {
      if (this.placeComponent) {
        this.highlightedComponent = id;
      }
    },
  },
})
