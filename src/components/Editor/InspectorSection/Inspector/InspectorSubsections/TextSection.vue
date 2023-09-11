<template>
  <v-divider></v-divider>
  <v-row class="ma-2">
    <span class="text-title section-title">TEXT</span>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="4" class="py-1">
      <span class="text-caption">Text </span>
    </v-col>
    <v-col cols="8" class="py-1">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        v-model="text"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="4" class="py-1">
      <span class="pb-1 text-caption">Font Family </span>
    </v-col>
    <v-col cols="8" class="py-1">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="fontFamilies"
        v-model="fontFamily"
      >
      </v-select>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="4" class="py-1">
      <span class="pb-1 text-caption">Font Style </span>
    </v-col>
    <v-col cols="8" class="py-1">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="fontStyles"
        v-model="fontStyle"
      >
      </v-select>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="4" class="py-1">
      <span class="pb-1 text-caption">Font Size </span>
    </v-col>
    <v-col cols="4" class="py-1">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="size"
      ></v-text-field>
    </v-col>

    <!--color selector-->
    <v-col cols="4" class="py-1 text-center">
      <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="color-preview" :color="color">
        </v-btn>
        <span class="text-caption color-text mx-auto">Color</span>
        </template>
        <v-color-picker v-model="color" flat></v-color-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  name: "TextSection",
  data() {
    return {
      fontFamilies: [
        "Arial",
        "Helvetica",
        "Times New Roman",
        "Verdana",
        "Georgia",
        "Roboto",
        "Open Sans",
        "Lato",
        "Montserrat",
        "Raleway",
      ],
      fontStyles: ["Regular", "Bold", "Italic", "Bold Italic"],
    };
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    text: {
      get() {
        return this.inspectedComponent.props.text;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.text = value;
        this.updateInspectedComponent(payload);
      },
    },
    fontFamily: {
      get() {
        return this.inspectedComponent.props.fontFamily;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.fontFamily = value;
        this.updateInspectedComponent(payload);
      },
    },
    fontStyle: {
      get() {
        return this.inspectedComponent.props.fontStyle;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.fontStyle = value;
        this.updateInspectedComponent(payload);
      },
    },
    size: {
      get() {
        return this.inspectedComponent.props.size;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.size = value;
        this.updateInspectedComponent(payload);
      },
    },
    color: {
      get() {
        return this.inspectedComponent.props.color;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.color = value;
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
  height: 20px !important;
  border: 3px solid #bcbcbc;
  margin-bottom: -8px !important;

}
.color-text {
  font-size: 10px !important;
}
</style>