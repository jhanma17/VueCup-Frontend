<template>
  <div
    class="canvas"
    :style="scalingContainerStyle"
    @mouseleave="resetHighlighting()"
  >
    <RenderComponent
      v-for="component in components"
      :key="component.id"
      :element="component"
    />
  </div>
</template>

<script>
import RenderComponent from "./RenderComponent.vue";
import { mapState, mapActions } from "pinia";
import { highlightStore } from "@/stores/highlight";

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
    ...mapState(highlightStore, ["highlightedElement"]),
  },
  methods: {
    ...mapActions(highlightStore, ["resetHighlighting", "highlightElement"]),
  },
  components: {
    RenderComponent,
  },
  props: {
    scalingContainerStyle: {
      type: Object,
      default: null,
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