<template>
  <v-divider class="mt-2"></v-divider>
  <v-row class="ma-2">
    <span class="text-title section-title">BACKGROUND</span>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="4" class="py-1">
      <span class="text-caption">Image URL</span>
    </v-col>
    <v-col cols="8" class="py-1">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        v-model="backgroundImage"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 mt-0 mb-2" align="center">
    <v-col cols="4" class="py-1">
      <span class="pb-1 text-caption">Color </span>
    </v-col>

    <!--color selector-->
    <v-col cols="4" class="py-1 text-center">
      <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="color-preview" :color="backgroundColor"> </v-btn>
        </template>
        <v-color-picker v-model="backgroundColor" mode="hexa" flat></v-color-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  name: "BackgroundSection",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    backgroundImage: {
      get() {
        return this.inspectedComponent.props.backgroundImage;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.backgroundImage = value;
        this.updateInspectedComponent(payload);
      },
    },
    backgroundColor: {
      get() {
        return this.inspectedComponent.props.backgroundColor;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.backgroundColor = value;
        this.updateInspectedComponent(payload);
      },
    },
  },
  methods: {
    ...mapActions(componentsStore, ["updateInspectedComponent"]),
  },
};
</script>

<style>
.section-title {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  color: #646464;
}

.color-preview {
  border: 3px solid #bcbcbc;
}
.color-text {
  font-size: 10px !important;
  line-height: 0.25rem !important;
}
</style>