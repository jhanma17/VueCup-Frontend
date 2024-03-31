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
          v-if="hasChildren"
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
        @contextmenu.prevent.stop="handleClick1($event, child.id)"
      >
        <ProjectNode :component="child" />
      </v-col>
    </drop>
  </drag>
  <ContextMenu
    :elementId="`context-menu-${component.id}`"
    :options="options"
    ref="vueSimpleContextMenu1"
    @option-clicked="optionClicked1"
  />
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import ContextMenu from "./ContextMenu.vue";

export default {
  name: "ProjectNode",
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  components: {
    ContextMenu,
  },
  data() {
    return {
      expanded: false,
      options: [
        {
          name: "Duplicate",
          slug: "duplicate",
        },
        {
          type: "divider",
        },
        {
          name: "Edit",
          slug: "edit",
        },
        {
          name: "<em>Delete</em>",
          slug: "delete",
        },
      ],
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
    hasChildren() {
      return this.component.children && this.component.children.length > 0;
    },
  },
  methods: {
    ...mapActions(componentsStore, [
      "inspectComponent",
      "startDraggingComponent",
      "dropComponent",
      "deleteComponent",
    ]),
    handleClick1(event, item) {
      this.$refs.vueSimpleContextMenu1.showMenu(event, item);
    },
    optionClicked1(event) {
      window.alert(JSON.stringify(event));
    },
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
    handleDelete(event) {
      if (event.key === "Delete" && this.isSelected) {
        this.deleteComponent(this.component.id);
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.handleDelete);
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