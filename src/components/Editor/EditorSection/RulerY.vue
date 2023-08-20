<template>
  <div class="ruler-y">
    <div
      class="ruler-y-mark"
      :class="i % 10 == 0 ? 'big-y-mark' : ''"
      v-for="i in 500"
      :key="i"
      :style="{ top: `calc(${-150 + i}% + ${yStartPoint}px - 5px)` }"
    >
      <div class="ruler-y-text">
        <span class="pl-2" v-if="i % 10 == 0">{{
          Math.ceil(((i - 200) / 100) * componentHeight * 5)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    yStartPoint: {
      type: Number,
      default: 0,
    },
    componentHeight: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>

.ruler-y {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background-color: #121212;
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