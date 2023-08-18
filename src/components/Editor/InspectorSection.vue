<template>
  <main>
    <v-row class="mx-1 my-1" align="center">
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
          <v-icon class="mr-1" size="14">mdi-drawing</v-icon>
          <span class="title-tab">Inspector</span>
        </v-tab>
      </v-tabs>
    </v-row>

    <v-window v-model="tab">
      <v-window-item value="library">
        <v-row class="ma-0">
          <v-tabs
            v-model="libraryTab"
            grow
            bg-color="#242424"
            density="compact"
            height="32px"
            hide-slider
            selected-class="selected-library-tab"
          >
            <v-tab value="basic" class="library-left-tabs tabs">
              <v-icon class="mr-1" size="14">mdi-library</v-icon>
              <span class="title-tab">Basic</span>
            </v-tab>
            <v-tab value="components" class="library-center-tabs tabs">
              <v-icon class="mr-1" size="14">mdi-drawing</v-icon>
              <span class="title-tab">Components</span>
            </v-tab>
            <v-tab value="custom" class="library-right-tabs tabs">
              <v-icon class="mr-1" size="14">mdi-drawing</v-icon>
              <span class="title-tab">Custom</span>
            </v-tab>
          </v-tabs>
        </v-row>
      </v-window-item>

      <v-window-item value="inspector"> Two </v-window-item>
    </v-window>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tab: "library",
      libraryTab: "basic",
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

.library-center-tabs {
  box-sizing: border-box !important;
  border-bottom: 1px solid #323232 !important;
  border-left: 1px solid #323232 !important;
  border-right: 1px solid #323232 !important;
  border-radius: 0 !important;
}

.library-left-tabs {
  box-sizing: border-box !important;
  border-bottom: 1px solid #323232 !important;
  border-right: 1px solid #323232 !important;
  border-radius: 0 !important;
}

.library-right-tabs {
  box-sizing: border-box !important;
  border-bottom: 1px solid #323232 !important;
  border-left: 1px solid #323232 !important;
  border-radius: 0 !important;
}

.selected-library-tab {
  color: #c5c5c5 !important;
  border-bottom: 0 !important;
}
</style>