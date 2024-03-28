<template>
  <ol class="no-selection" :style="style">
    <slot></slot>
  </ol>
</template>

<script>
import OrderedListProps from './OrderedListProps';
import OrderedListStyle from './OrderedListStyle';

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
      return OrderedListStyle(this.props);
    },
  },
};
</script>

<style scoped>
.no-selection {
  user-select: none;
}
</style>