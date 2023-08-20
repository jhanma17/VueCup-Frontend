<template>
  <v-row>
    <slot></slot>
  </v-row>
</template>

<script>
export default {
  name: "RowTemplate",
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