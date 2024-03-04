<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { scalingStore } from "@/stores/scaling";
import containerProps from "./ContainerProps";

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
    ...mapState(scalingStore, ["scale"]),
    style() {
      let width = this.props.width;
      let height = this.props.height;
      if (this.props.widthMode == "%") {
        width = width * 5;
      }
      if (this.props.heightMode == "%") {
        height = height * 5;
      }
      if (this.props.widthMode == "vw") {
        width = (384 * (width * 5 / 100));
      }
      if (this.props.heightMode == "vh") {
        height = (216 * (height * 5 / 100));
      }
      return {
        width: this.props.widthMode == 'auto'? 'auto': width + (this.props.widthMode === "vw" ? "px": this.props.widthMode),
        height: this.props.heightMode == 'auto'? 'auto': height + (this.props.heightMode === "vh" ? "px": this.props.heightMode),
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
        marginTop: this.props.marginTop + "px",
        marginBottom: this.props.marginBottom + "px",
        marginRight: this.props.marginRight + "px",
        marginLeft: this.props.marginLeft + "px",
        paddingTop: this.props.paddingTop + "px",
        paddingBottom: this.props.paddingBottom + "px",
        paddingRight: this.props.paddingRight + "px",
        paddingLeft: this.props.paddingLeft + "px",
        backgroundColor: this.props.backgroundColor,
        backgroundImage: `url(${this.props.backgroundImage})`,
      };
    },
  },
};
</script>

<style>
</style>