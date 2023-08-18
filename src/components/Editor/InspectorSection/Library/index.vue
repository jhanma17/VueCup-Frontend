<template>
  <v-row class="ma-0 mt-1">
    <v-tabs
      v-model="libraryTab"
      grow
      bg-color="#242424"
      density="compact"
      height="32px"
      hide-slider
      selected-class="selected-library-tab"
    >
      <v-tab value="basic" class="library-left-tabs library-tabs tabs">
        <v-icon class="mr-1" size="14">mdi-drawing</v-icon>
        <span class="title-tab">Basic</span>
      </v-tab>
      <v-tab value="components" class="library-center-tabs library-tabs tabs">
        <v-icon class="mr-1" size="14">mdi-vuetify</v-icon>
        <span class="title-tab">Components</span>
      </v-tab>
      <v-tab value="custom" class="library-right-tabs library-tabs tabs">
        <v-icon class="mr-1" size="14">mdi-webpack</v-icon>
        <span class="title-tab">Custom</span>
      </v-tab>
    </v-tabs>
  </v-row>
  
  <v-window v-model="libraryTab">
    <v-window-item value="basic">
      <BasicLibrary />
    </v-window-item>

    <v-window-item value="components">
      <VuetifyLibrary />
    </v-window-item>

    <v-window-item value="custom">
      <CustomLibrary />
    </v-window-item>
  </v-window>
</template>

<script>
import BasicLibrary from "./BasicLibrary.vue";
import VuetifyLibrary from "./VuetifyLibrary.vue";
import CustomLibrary from "./CustomLibrary.vue";

export default {
  data() {
    return {
      libraryTab: "basic",
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
  components: {
    BasicLibrary,
    VuetifyLibrary,
    CustomLibrary,
  },
};
</script>

<style>
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

.library-tabs {
  box-sizing: border-box !important;
  border-bottom: 1px solid #323232 !important;
  border-top: 1px solid #323232 !important;
  border-radius: 0 !important;
}

.library-center-tabs {
  border-left: 1px solid #323232 !important;
  border-right: 1px solid #323232 !important;
}

.library-left-tabs {
  border-right: 1px solid #323232 !important;
}

.library-right-tabs {
  border-left: 1px solid #323232 !important;
}

.selected-library-tab {
  color: #e3e3e3 !important;
  border-bottom: 0 !important;
}

.category-selector {
  border-radius: 0 !important;
  border-bottom: 1px solid #323232 !important;
  color: #c5c5c5 !important;
  background-color: #242424 !important;
  justify-content: space-between !important;
}

.category-item {
  min-height: 32px !important;
}
</style>