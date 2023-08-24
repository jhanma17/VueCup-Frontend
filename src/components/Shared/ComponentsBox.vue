<template>
  <div class="component-box" @dblclick="selectComponent()">
    <v-img
      :src="component.icon"
      aspect-ratio="1"
      width="50px"
      class="mx-auto white-img"
    >
    </v-img>

    <span class="text-caption mb-1">
      {{ component.name }}
    </span>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  props: {
    component: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions(componentsStore, ["startPlacingComponent"]),
    selectComponent() {
      console.log('selected');
      this.startPlacingComponent(this.component.associatedComponent);
    },
  },
};
</script>

<style scoped>
.component-box {
  display: flex;
  height: 100px;
  width: 100%;
  border: 1px solid #646464;
  flex-direction: column;
  justify-items: space-around;
  text-align: center;
}

.white-img {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%)
    hue-rotate(0deg); /* Turn the image to white */
}
</style>