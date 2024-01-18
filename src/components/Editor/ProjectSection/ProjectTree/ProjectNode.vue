<template>
  <draggable
    class="project-node"
    :element="element"
    :options="{group:'project-tree'}"
    :move="move"
    @end="end"
  >
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: "ProjectNode",
  components: {
    draggable
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>

</style>