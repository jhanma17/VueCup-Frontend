<template>
  <v-divider class="mt-2"></v-divider>
  <v-row class="ma-2">
    <span class="text-title section-title">IMAGE PROPERTIES</span>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="6" class="py-1">
      <span class="text-caption">Image URL</span>
    </v-col>

    <v-col cols="6" class="py-1 pl-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        v-model="src"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="6" class="py-1">
      <span class="text-caption">Fit Mode</span>
    </v-col>

    <v-col cols="6" class="py-1 pl-0">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="fitModes"
        v-model="fitMode"
      ></v-select>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="6" class="py-1">
      <span class="text-caption">Repeat Mode</span>
    </v-col>

    <v-col cols="6" class="py-1 pl-0">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="repeatModes"
        v-model="repeatMode"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  name: "ImageSection",
  data() {
    return {
      fitModes: ["Fill", "Contain", "Cover", "None"],
      repeatModes: ["Repeat", "Repeat Horizontally", "Repeat Vertically", "No Repeat"],
    }
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    src: {
      get() {
        return this.inspectedComponent.props.src;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.src = value;
        this.updateInspectedComponent(payload);
      },
    },
    fitMode: {
      get() {
        return this.inspectedComponent.props.fitMode;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.fitMode = value;
        this.updateInspectedComponent(payload);
      },
    },
    repeatMode: {
      get() {
        return this.inspectedComponent.props.repeatMode;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.repeatMode = value;
        this.updateInspectedComponent(payload);
      },
    },
  },
  methods: {
    ...mapActions(componentsStore, ["updateInspectedComponent"]),
  },
}
</script>

<style>

</style>