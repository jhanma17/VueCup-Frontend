<template>
  <img :src="props.src" :style="style"/>
</template>

<script>
export default {
  name: "ImageTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          src: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
          width: 100,
          height: 100,
        };
      },
    },
  },
  computed: {
    style() {
      return {
        width: this.props.width + "px",
        height: this.props.height + "px",
      };
    },
  },
}
</script>

<style>

</style>