<template>
  <img :src="props.src" :style="style"/>
</template>

<script>
import ImageProps from "./ImageProps";
import ImageStyle from "./ImageStyle";

export default {
  name: "ImageTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          ...ImageProps,
        };
      },
    },
  },
  computed: {
    style() {
      return ImageStyle(this.props);
    },
  },
}
</script>

<style>

</style>