<template>
  <v-row class="mx-4 my-2" align="center">
    <v-icon class="mr-1" size="14">mdi-view-dashboard-edit</v-icon>
    <span class="title-tab">Editor</span>
  </v-row>

  <div class="editor-space" @wheel="handleMouseWheel" @keydown="handleKeyPress" @click="stopInspectingComponent">
    <Canvas
      :scalingContainerStyle="scalingContainerStyle"
      :guessParent="guessParent"
    />

    <RulerY :yStartPoint="yStartPoint" :componentHeight="componentHeight" />

    <RulerX :xStartPoint="xStartPoint" :componentWidth="componentWidth" />
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { scalingStore } from "@/stores/scaling";
import { componentsStore } from "@/stores/components";
import RulerY from "./RulerY.vue";
import RulerX from "./RulerX.vue";
import Canvas from "./Canvas.vue";

export default {
  data() {
    return {
      showGrid: true,
      yOffset: 0,
      xOffset: 0,
      windowSize: { width: window.innerWidth, height: window.innerHeight },
      guessParent: true,
    };
  },

  computed: {
    ...mapState(scalingStore, ["scale"]),
    componentWidth() {
      return (this.windowSize.width / 2 - 30) / this.scale;
    },
    componentHeight() {
      return (this.windowSize.height - 134) / this.scale;
    },
    scalingContainerStyle() {
      return {
        transform: `scale(${this.scale}) translate(${this.xOffset}px, ${this.yOffset}px)`,
      };
    },
    xStartPoint() {
      return (this.xOffset - 192) * this.scale;
    },
    yStartPoint() {
      return (this.yOffset - 108) * this.scale;
    },
  },

  methods: {
    ...mapActions(scalingStore, ["setScale"]),
    ...mapActions(componentsStore, ["stopInspectingComponent"]),
    handleMouseWheel(event) {
      if (event.ctrlKey) {
        event.preventDefault();

        if (event.deltaY < 0) {
          this.setScale(this.scale + 0.05);
        } else {
          this.setScale(this.scale - 0.05);
        }
      } else {
        if (event.shiftKey) {
          event.preventDefault();

          if (event.deltaY < 0) {
            this.yOffset -= 10 / this.scale;
          } else {
            this.yOffset += 10 / this.scale;
          }
        } else {
          if (event.altKey) {
            event.preventDefault();

            if (event.deltaY < 0) {
              this.xOffset -= 10 / this.scale;
            } else {
              this.xOffset += 10 / this.scale;
            }
          }
        }
      }
    },
  },

  components: {
    RulerY,
    RulerX,
    Canvas,
  },
};
</script>

<style scoped>
.title-tab {
  font-size: 14px !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}

.editor-space {
  position: absolute;
  height: calc(100% - 50px);
  width: calc(100% - 20px);
  top: 40px;
  left: 10px;
  background-color: #121212;
  border-radius: 5px;
  z-index: 0;
  overflow: hidden;
}
</style>