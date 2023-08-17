<template>
  <div
    class="canvas"
    :style="scalingContainerStyle"
    @mouseleave="resetHighlighting()"
  >
    <v-card
      id="card-test"
      color="red"
      :class="highlightedElement == 'card-test' ? 'highlight' : ''"
      @mouseover.stop="highlightComponent($event)"
    >
      <span
        id="span-test"
        :class="highlightedElement == 'span-test' ? 'highlight' : ''"
        @mouseover.stop="highlightComponent($event)"
      >
        hola
      </span>
    </v-card>

    <v-row
      id="row-test"
      :class="highlightedElement == 'row-test' ? 'highlight' : ''"
      @mouseover.stop="highlightComponent($event)"
      @mouseleave.stop="removeHighlight()"
    >
      <v-col
        cols="4"
        id="col-test"
        :class="highlightedElement == 'col-test' ? 'highlight' : ''"
        @mouseover.stop="highlightComponent($event)"
      >
        <v-btn
          block
          id="btn-test"
          :class="highlightedElement == 'btn-test' ? 'highlight' : ''"
          @mouseover.stop="highlightComponent($event)"
        >
          test
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    highlightedElement: {
      get() {
        return this.element;
      },
      set(value) {
        this.$emit('updateHighlightedElement', value);
      },
    },
  },
  methods: {
    resetHighlighting() {
      this.highlightedElement = null;
    },
    highlightComponent(event) {
      if (this.guessParent) {
        let element = event.target;

        //set highlighted element as the id of the element
        this.highlightedElement = element.id;
      }
    },
  },
  props: {
    element: {
      type: String,
      default: null,
    },
    scalingContainerStyle: {
      type: String,
      default: '',
    },
    guessParent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

.canvas {
  position: absolute;
  height: 216px;
  width: 384px;
  top: calc(50% - 108px);
  left: calc(50% - 192px);
  background-color: white;
}

.highlight {
  box-shadow: 0 0 0px 5px rgba(0, 98, 0);
}
</style>