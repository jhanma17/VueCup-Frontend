<template>
  <v-btn :block="props.block">
    {{ props.text }}
  </v-btn>
</template>

<script>
export default {
  name: "ButtonTemplate",
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