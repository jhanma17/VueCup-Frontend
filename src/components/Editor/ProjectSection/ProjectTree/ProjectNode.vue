<template>
  <drag @dragstart="handleDragstart">
    <drop @drop="handleDrop">
      <v-col
        cols="12"
        class="py-1 pr-0 clickable"
        :class="isSelected ? 'selected-bg' : ''"
        @click="inspectComponent(component)"
        @contextmenu.prevent.stop="handleContextMenu($event, component.id)"
      >
        <v-icon
          density="compact"
          @click.stop="toggleExpand()"
          v-if="hasChildren"
        >
          {{ expanded ? "mdi-chevron-down" : "mdi-chevron-right" }}
        </v-icon>
        <v-icon density="compact" v-else> </v-icon>
        <input
          ref="nameInput"
          class="disabled-renaming"
          type="text"
          v-model="componentName"
          :readonly="!renaming"
          v-click-outside="stopRenaming"
        />
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

      <ContextMenu
        :elementId="`context-menu-${component.id}`"
        :options="options"
        ref="projectContextMenu"
        @option-clicked="menuOptionClicked"
      />
    </drop>
  </drag>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import ContextMenu from "./ContextMenu.vue";
import vClickOutside from "click-outside-vue3";

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
  directives: {
    "click-outside": vClickOutside.directive,
  },
  data() {
    return {
      expanded: false,
      renaming: false,
      options: [
        {
          name: "Rename",
          slug: "rename",
        },
        {
          type: "divider",
        },
        {
          name: "Move up",
          slug: "move-up",
        },
        {
          name: "Move down",
          slug: "move-down",
        },
      ],
    };
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    componentName: {
      get() {
        return this.component.name || "";
      },
      set(value) {
        this.renameComponent(this.component.id, value);
      },
    },
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
      "moveComponentUp",
      "moveComponentDown",
      "renameComponent"
    ]),
    stopRenaming() {
      this.renaming = false;
    },
    handleContextMenu(event, item) {
      this.$refs.projectContextMenu.showMenu(event, item);
    },
    menuOptionClicked(event) {
      switch (event.option.slug) {
        case "rename":
          this.renaming = true;
          this.$nextTick(() => {
            this.$refs.nameInput.focus();
          });
          break;
        case "move-up":
          this.moveComponentUp(this.component.id);
          break;
        case "move-down":
          this.moveComponentDown(this.component.id);
          break;
      }
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
.disabled-renaming {
  color: white !important;
  pointer-events: none;
  width: auto;
}
.selected-bg {
  background-color: rgba(245, 245, 245, 0.3);
}
.clickable {
  cursor: pointer;
}
</style>