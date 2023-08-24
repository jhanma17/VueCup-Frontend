<template>
  <h1 class="no-selection">
    {{ props.text }}
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "TitleTemplate",
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