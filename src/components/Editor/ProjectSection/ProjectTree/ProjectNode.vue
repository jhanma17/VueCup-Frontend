<template>
  <drag @dragstart="handleDragstart">
    <drop @drop="handleDrop">
      <v-col
        cols="12"
        class="py-1 pr-0 clickable"
        :class="isSelected ? 'selected-bg' : ''"
        @click="inspectComponent(component)"
      >
        <v-icon
          density="compact"
          @click.stop="toggleExpand()"
          v-if="component.children"
        >
          {{ expanded ? "mdi-chevron-down" : "mdi-chevron-right" }}
        </v-icon>
        <v-icon density="compact" v-else> </v-icon>
        <span>
          {{ component.type }}
        </span>
      </v-col>
      <v-col
        v-if="component.children && expanded"
        v-for="child in component.children"
        :key="child.id"
        cols="12"
        class="py-1 pr-0"
      >
        <ProjectNode :component="child" />
      </v-col>
    </drop>
  </drag>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  name: "ProjectNode",
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    isSelected() {
      return (
        this.inspectedComponent &&
        this.inspectedComponent.id == this.component.id
      );
    },
  },
  methods: {
    ...mapActions(componentsStore, [
      "inspectComponent",
      "startDraggingComponent",
      "dropComponent",
    ]),
    toggleExpand() {
      this.expanded = !this.expanded;
    },
    handleDragstart(transferData, nativeEvent) {
      nativeEvent.stopPropagation();
      this.startDraggingComponent(this.component.id);
    },
    handleDrop(transferData, nativeEvent) {
      nativeEvent.stopPropagation();
      this.dropComponent(this.component.id);
    },
  },
};
</script>

<style>
.selected-bg {
  background-color: rgba(245, 245, 245, 0.3);
}
.clickable {
  cursor: pointer;
}
</style>