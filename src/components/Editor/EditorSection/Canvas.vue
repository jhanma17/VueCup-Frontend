<template>
  <div
    class="canvas"
    :style="scalingContainerStyle"
    @mouseleave="resetHighlighting()"
  >
    <v-card
      id="card-test"
      color="red"
      :class="highlightedElement == 0 ? 'highlight' : ''"
      @mouseover.stop="highlightComponent(0)"
    >
      <span
        id="span-test"
        :class="highlightedElement == 1 ? 'highlight' : ''"
        @mouseover.stop="highlightComponent(1)"
      >
        hola
      </span>
    </v-card>

    <v-row
      id="row-test"
      :class="highlightedElement == 2 ? 'highlight' : ''"
      @mouseover.stop="highlightComponent(2)"
    >
      <v-col
        cols="4"
        id="col-test"
        :class="highlightedElement == 3 ? 'highlight' : ''"
        @mouseover.stop="highlightComponent(3)"
      >
        <v-btn
          block
          id="btn-test"
          :class="highlightedElement == 4 ? 'highlight' : ''"
          @mouseover.stop="highlightComponent(4)"
        >
          test
        </v-btn>
      </v-col>
    </v-row>

    <RenderComponent
      v-for="component in components"
      :key="component.id"
      :element="component"
    />
  </div>
</template>

<script>
import RenderComponent from "./RenderComponent.vue";

export default {
  data() {
    return {
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
    };
  },
  computed: {
    highlightedElement: {
      get() {
        return this.element;
      },
      set(value) {
        this.$emit("updateHighlightedElement", value);
      },
    },
  },
  methods: {
    resetHighlighting() {
      this.highlightedElement = null;
    },
    highlightComponent(id) {
      this.$emit("updateHighlightedElement", id);
    },
  },
  components: {
    RenderComponent,
  },
  props: {
    element: {
      type: Number,
      default: null,
    },
    scalingContainerStyle: {
      type: Object,
      default: null,
    },
    guessParent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.canvas {
  position: absolute;
  height: 216px;
  width: 384px;
  top: calc(50% - 108px);
  left: calc(50% - 192px);
  background-color: white;
}

.highlight {
  box-shadow: 0 0 0px 5px rgba(0, 98, 0);
}
</style>