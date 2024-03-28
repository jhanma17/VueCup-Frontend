<template>
  <p class="no-selection" :style="style">
    {{ props.text }}
    <slot></slot>
  </p>
</template>

<script>
import TextProps from "./TextProps";
import TextStyle from "./TextStyle";

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
      return TextStyle(this.props);
    },
  },
};
</script>

<style>
.no-selection {
  user-select: none;
}
</style>