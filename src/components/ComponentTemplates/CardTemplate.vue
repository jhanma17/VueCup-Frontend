<template>
  <v-card :color="props.color">
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "CardTemplate",
  props: {
    props: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style>

</style>