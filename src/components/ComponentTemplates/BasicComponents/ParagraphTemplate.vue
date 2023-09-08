<template>
  <p class="no-selection">
    {{ props.text }}
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "ParagraphTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          text: "Paragraph",
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