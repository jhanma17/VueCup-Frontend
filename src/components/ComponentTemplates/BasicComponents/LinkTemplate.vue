<template>
  <a class="no-selection">
    {{ props.text }}
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "LinkTemplate",
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