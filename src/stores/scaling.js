import { defineStore } from "pinia";

export const scalingStore = defineStore("scaling", {
  state: () => ({
    scale: 1,
  }),
  getters: {},
  actions: {
    setScale(scale) {
      this.scale = scale;
    },
  },
});
