<template>
  <main>
    <v-row class="mx-1 my-1 pb-1 sticky-top" align="center">
      <v-tabs
        v-model="tab"
        bg-color="#242424"
        density="compact"
        height="32px"
        hide-slider
        selected-class="selected-tab"
      >
        <v-tab value="library" class="tabs">
          <v-icon class="mr-1" size="14">mdi-library</v-icon>
          <span class="title-tab">Library</span>
        </v-tab>
        <v-tab value="inspector" class="tabs">
          <v-icon class="mr-1" size="14">mdi-palette-advanced</v-icon>
          <span class="title-tab">Inspector</span>
        </v-tab>
      </v-tabs>
    </v-row>

    <v-window v-model="tab">
      <v-window-item value="library">
        <Library />
      </v-window-item>

      <v-window-item value="inspector" class="overflow-auto">
        <Inspector />
      </v-window-item>
    </v-window>
  </main>
</template>

<script>
import Library from "./Library/index.vue";
import Inspector from "./Inspector/index.vue";
export default {
  components: {
    Library,
    Inspector,
  },
  data() {
    return {
      tab: "library",
    };
  },
};
</script>

<style scoped>
.title-tab {
  font-size: 14px !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}

.tabs {
  min-width: 75px !important;
  padding: 0 4px !important;
  color: #646464 !important;
}

.selected-tab {
  color: #fff !important;
  background-color: #323232 !important;
}

.overflow-auto {
  overflow: auto !important;
}

.sticky-top {
  position: sticky !important;
  top: 0 !important;
  z-index: 1 !important;
  background-color: #242424 !important;
}
</style>