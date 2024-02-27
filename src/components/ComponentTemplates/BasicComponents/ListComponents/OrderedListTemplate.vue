<template>
  <ol class="no-selection" :style="style">
    <slot></slot>
  </ol>
</template>

<script>
export default {
  name: "OrderedListTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
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