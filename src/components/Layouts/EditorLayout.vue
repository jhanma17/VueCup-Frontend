<template>
  <v-layout>
    <v-app-bar color="#242424">
      <template v-slot:prepend>
        <img src="@/assets/Images/VueCupLogo.png" alt="VueCup" height="50" />
      </template>

      <v-app-bar-title>VueCup</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="saveData()" :loading="isSaving">
        <v-icon>mdi-content-save-outline</v-icon>
      </v-btn>

      <div>
        <v-btn icon @click="openFileSelector()" :loading="isImporting">
          <v-icon>mdi-file-import-outline</v-icon>
        </v-btn>
        <input
          ref="fileInput"
          type="file"
          style="display: none"
          accept=".vcp"
          @change="prepareImportData($event)"
        />
      </div>

      <v-btn icon @click="exportData()" :loading="isExporting">
        <v-icon>mdi-file-export-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import ExportData from "@/export/index";

export default {
  name: "EditorLayout",
  data() {
    return {
      isSaving: false,
      isExporting: false,
      isImporting: false,
    };
  },
  computed: {
    ...mapState(componentsStore, ["componentsTree"]),
  },
  methods: {
    ...mapActions(componentsStore, ["saveData", "importData"]),
    exportData() {
      this.isExporting = true;

      ExportData(this.componentsTree);

      this.isExporting = false;
    },
    openFileSelector() {
      this.$refs.fileInput.click(); // Trigger click event on file input
    },
    prepareImportData(event) {
      this.importData(event.target.files[0]);
    },
  },
};
</script>

<style></style>