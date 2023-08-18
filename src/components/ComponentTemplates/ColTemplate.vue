<template>
  <v-col :cols="props.cols">
    <slot></slot>
  </v-col>
</template>

<script>
export default {
  name: "ColTemplate",
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