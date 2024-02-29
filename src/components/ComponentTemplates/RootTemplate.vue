<template>
  <div class="root-element" :style="rootStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RootTemplate",
  props: {
    props: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.root-element {
  height: 216px;
  width: 384px;
  background-color: white;
  overflow-y: auto; /* Permitir desplazamiento vertical */
  overflow-x: hidden; /* Ocultar desplazamiento horizontal */
  -ms-overflow-style: none; /* IE y Edge */
  scrollbar-width: none; /* Firefox */
}

.root-element::-webkit-scrollbar {
  display: none; /* Ocultar scroll */
}
</style>