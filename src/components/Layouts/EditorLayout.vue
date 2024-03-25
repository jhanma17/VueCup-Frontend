<template>
  <v-layout>
    <v-app-bar color="#242424">
      <template v-slot:prepend>
        <img src="@/assets/Images/VueCupLogo.png" alt="VueCup" height="50" />
      </template>

      <v-app-bar-title>VueCup</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="exportData"
        :loading="isSaving"
      >
        <v-icon>mdi-file-export-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "EditorLayout",
  data() {
    return {
      isSaving: false,
    };
  },
  methods: {
    exportData() {
      
    },
  },
};  
</script>

<style></style>