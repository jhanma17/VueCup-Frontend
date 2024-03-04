<template>
  <p class="no-selection" :style="style">
    {{ props.text }}
    <slot></slot>
  </p>
</template>

<script>
import TextProps from "./TextProps";

export default {
  name: "ParagraphTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          ...TextProps,
        };
      },
    },
  },
  computed: {
    style() {
      return {
        fontFamily: this.props.fontFamily,
        fontSize: this.props.size + "px",
        color: this.props.color,
        ...this.formattedFontStyle,
        marginTop: this.props.marginTop + "px",
        marginBottom: this.props.marginBottom + "px",
        marginRight: this.props.marginRight + "px",
        marginLeft: this.props.marginLeft + "px",
        paddingTop: this.props.paddingTop + "px",
        paddingBottom: this.props.paddingBottom + "px",
        paddingRight: this.props.paddingRight + "px",
        paddingLeft: this.props.paddingLeft + "px",
      };
    },
    formattedFontStyle() {
      //separate the font style into fontStyle and fontWeight
      let fontStyle = this.props.fontStyle || "normal";
      let fontWeight = "normal";
      if (fontStyle.includes("Bold")) {
        fontWeight = "bold";
      }
      if (fontStyle.includes("Italic")) {
        fontStyle = "italic";
      }
      return {
        fontStyle: fontStyle,
        fontWeight: fontWeight,
      };
    },
  },
};
</script>

<style>
.no-selection {
  user-select: none;
}
</style>