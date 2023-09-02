<template>
  <span class="no-selection">
    {{ props.text }}
  </span>
</template>

<script>
export default {
  name: "SpanTemplate",
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