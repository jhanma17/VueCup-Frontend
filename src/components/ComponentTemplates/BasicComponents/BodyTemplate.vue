<template>
  <span class="no-selection">
    {{ props.text }}
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "BodyTemplate",
  props: {
    props: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style>
.no-selection {
  user-select: none;
}
</style>