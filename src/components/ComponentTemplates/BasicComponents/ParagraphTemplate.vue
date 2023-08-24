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
    },
  },
};
</script>

<style>
.no-selection {
  user-select: none;
}
</style>