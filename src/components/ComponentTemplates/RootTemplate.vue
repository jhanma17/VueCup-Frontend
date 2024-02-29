<template>
  <div class="root-element" :style="rootStyle">
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { scalingStore } from "@/stores/scaling";
export default {
  name: "RootTemplate",
  props: {
    props: {
      type: Object,
      required: false,
    },
  },
  computed: {
    ...mapState(scalingStore, ["scale"]),
    rootStyle() {
      return {
        transform: `scale(${this.scale})`,
      };
    },
  },
};
</script>

<style scoped>
.root-element {
  height: 216px;
  width: 384px;
  position: relative;
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