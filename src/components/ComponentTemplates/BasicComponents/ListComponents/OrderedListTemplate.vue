<template>
  <ol class="no-selection" :style="style">
    <slot></slot>
  </ol>
</template>

<script>
import OrderedListProps from './OrderedListProps';

export default {
  name: "OrderedListTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          ...OrderedListProps,
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