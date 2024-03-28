<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script>
import containerProps from "./ContainerProps";
import containerStyle from "./ContainerStyle";

export default {
  name: "ImageTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          ...containerProps,
        };
      },
    },
  },
  computed: {
    style() {
      return containerStyle(this.props);
    },
  },
};
</script>

<style>
</style>