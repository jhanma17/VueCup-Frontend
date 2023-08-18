<template>
  <div class="ruler-x">
    <div
      class="ruler-x-mark"
      :class="i % 10 == 0 ? 'big-x-mark' : ''"
      v-for="i in 500"
      :key="i"
      :style="{ left: `calc(${-150 + i}% + ${xStartPoint}px - 5px)` }"
    >
      <span class="pl-2" v-if="i % 10 == 0">{{
        Math.ceil(((i - 200) / 100) * componentWidth * 5)
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    xStartPoint: {
      type: Number,
      default: 0,
    },
    componentWidth: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>


.ruler-x {
  position: absolute;
  left: 0;
  top: 0;
  height: 20px;
  width: 100%;
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
</style>