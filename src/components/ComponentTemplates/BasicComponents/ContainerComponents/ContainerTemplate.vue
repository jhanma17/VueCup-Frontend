<template>
  <div :style="style">
    <slot></slot>
  </div>
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
          width: "auto",
          height: "auto",
          display: "block",
          position: "static",
          top: "auto",
          left: "auto",
          right: "auto",
          bottom: "auto",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexGrow: 0,
          flexShrink: 1,
        };
      },
    },
  },
  computed: {
    style() {
      return {
        width: this.props.width + "px",
        height: this.props.height + "px",
        display: this.props.display,
        position: this.props.position,
        top: this.props.top + "px",
        left: this.props.left + "px",
        right: this.props.right + "px",
        bottom: this.props.bottom + "px",
        flexDirection: this.props.flexDirection,
        justifyContent: this.props.justifyContent,
        alignItems: this.props.alignItems,
        flexGrow: this.props.grow,
        flexShrink: this.props.shrink,
      };
    },
  },
};
</script>

<style>
</style>