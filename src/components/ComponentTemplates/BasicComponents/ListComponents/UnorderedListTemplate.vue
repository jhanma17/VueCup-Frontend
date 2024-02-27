<template>
  <ul class="no-selection" :style="style">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "UnorderedListTemplate",
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