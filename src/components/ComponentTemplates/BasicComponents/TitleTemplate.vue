<template>
  <h1 class="no-selection" :style="style">
    {{ props.text }}
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "TitleTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          text: "Title",
          fontFamily: "Roboto",
          fontStyle: "Regular",
          size: 16,
          color: "#000000",
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