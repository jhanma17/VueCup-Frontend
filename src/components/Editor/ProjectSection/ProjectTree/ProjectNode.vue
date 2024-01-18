<template>
  <v-col cols="12" class="py-1 pr-0" :class="isSelected ? 'selected-bg' : ''">
    <v-icon density="compact" @click="toggleExpand()" v-if="component.children">
      {{ expanded ? "mdi-chevron-down" : "mdi-chevron-right" }}
    </v-icon>
    <v-icon density="compact" v-else> </v-icon>
    {{ component.type }}
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
</template>

<script>
import { mapState } from "pinia";
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
    toggleExpand() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style>
.selected-bg {
  background-color: rgba(245, 245, 245, .3);
}
</style>