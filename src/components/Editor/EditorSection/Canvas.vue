<template>
  <div
    class="canvas"
    :style="scalingContainerStyle"
    @mouseleave="resetHighlighting()"
  >
    <RenderComponent
      v-for="component in componentsTree"
      :key="component.id"
      :element="component"
    />
  </div>
</template>

<script>
import RenderComponent from "./RenderComponent.vue";
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(componentsStore, ["highlightedComponent", "components", "componentsTree"]),
  },
  methods: {
    ...mapActions(componentsStore, ["resetHighlighting"]),
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