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
          widthMode: "px",
          height: 100,
          heightMode: "px",
          display: "block",
          position: "static",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          grow: 0,
          shrink: 0,
          fitMode: "Fill",
          repeatMode: "Repeat",
        };
      },
    },
  },
  computed: {
    style() {
      return {
        width: this.props.widthMode == 'auto'? 'auto': this.props.width + this.props.widthMode,
        height: this.props.heightMode == 'auto'? 'auto': this.props.height + this.props.heightMode,
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
        objectFit: this.props.fitMode.toLowerCase(),
        objectRepeat: this.props.repeatMode.toLowerCase(),
      };
    },
  },
}
</script>

<style>

</style>