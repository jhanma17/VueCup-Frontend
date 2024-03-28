<template>
  <span class="no-selection" :style="style">
    {{ props.text }}
    <slot></slot>
  </span>
</template>

<script>
import TextProps from './TextProps';
import TextStyle from './TextStyle';

export default {
  name: "BodyTemplate",
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

<style scoped>
.no-selection {
  user-select: none;
}
</style>