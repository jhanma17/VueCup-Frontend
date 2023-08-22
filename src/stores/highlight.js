import { defineStore } from 'pinia'

export const highlightStore = defineStore('highlight', {
  state: () => ({
    guessParent: true,
    highlightedElement: null,
  }),
  getters: {
  },
  actions: {
    resetHighlighting() {
      this.highlightedElement = null;
    },

    highlightElement(value) {
      if (this.guessParent) {
        this.highlightedElement = value;
      }
    },
  },
})
