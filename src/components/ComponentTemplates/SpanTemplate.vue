<template>
  <span>
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
</style>