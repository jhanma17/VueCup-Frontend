<template>
  <ul class="no-selection" :style="style">
    <slot></slot>
  </ul>
</template>

<script>
import UnorderedListProps from "./UnorderedListProps";

export default {
  name: "UnorderedListTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          ...UnorderedListProps,
        };
      },
    },
  },
  computed: {
    style() {
      return {
      };
    },
  },
};
</script>

<style scoped>
.no-selection {
  user-select: none;
}
</style>