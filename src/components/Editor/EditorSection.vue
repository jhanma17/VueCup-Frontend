<template>
  <v-row class="mx-4 my-2" align="center">
    <v-icon class="mr-1" size="14">mdi-view-dashboard-edit</v-icon>
    <span class="title-tab">Editor</span>
  </v-row>

  <div class="editor-space" @wheel="handleMouseWheel" @keydown="handleKeyPress">
    <div class="canvas" :style="scalingContainerStyle"></div>

    <div class="ruler-y">
      <div
        class="ruler-y-mark"
        :class="i % 10 == 0 ? 'big-y-mark' : ''"
        v-for="i in 200"
        :key="i"
        :style="{ top: `calc(${-50 + i}% + ${yStartPoint}px - 5px)` }"
      >
        <div class="ruler-y-text">
          <span class="pl-2" v-if="i % 10 == 0">{{
            Math.ceil(((i - 100) / 100) * (windowSize.height / scale) * 3)
          }}</span>
        </div>
      </div>
    </div>
    <div class="ruler-x">
      <div
        class="ruler-x-mark"
        :class="i % 10 == 0 ? 'big-x-mark' : ''"
        v-for="i in 300"
        :key="i"
        :style="{ left: `calc(${-50 + i}% + ${xStartPoint}px - 5px)` }"
      >
        <span class="pl-2" v-if="i % 10 == 0">{{
          Math.ceil(((i - 100) / 100) * (windowSize.width / scale) * 3)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGrid: true,
      scale: 1,
      yOffset: 0,
      xOffset: 0,
      windowSize: { width: window.innerWidth, height: window.innerHeight },
    };
  },

  computed: {
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
    handleMouseWheel(event) {
      if (event.ctrlKey) {
        event.preventDefault();

        if (event.deltaY < 0) {
          this.scale += 0.05;
        } else {
          this.scale -= 0.05;
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

.canvas {
  position: absolute;
  height: 216px;
  width: 384px;
  top: calc(50% - 108px);
  left: calc(50% - 192px);
  background-color: white;
}

.ruler-x {
  position: absolute;
  left: 0;
  top: 0;
  height: 20px;
  width: 100%;
  background-color: #121212;
}

.ruler-y {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background-color: #121212;
}

.ruler-x-mark {
  position: absolute;
  height: 30%;
  width: 1%;
  border-right: 1px solid #363636;
  color: #363636;
  font-size: 10px;
  font-weight: bold;
  line-height: 20px;
}

.big-x-mark {
  height: 100%;
  border-right: 2px solid #363636;
}

.ruler-y-mark {
  position: absolute;
  height: 1%;
  width: 30%;
  border-bottom: 1px solid #363636;
  color: #363636;
  font-size: 10px;
  font-weight: bold;
  line-height: 20px;
}

.big-y-mark {
  width: 100%;
  border-bottom: 2px solid #363636;
}

.ruler-y-text {
  transform: rotate(-90deg);
  text-align: end;
  padding-left: 10px;
}
</style>