<template>
  <v-divider class="mt-2"></v-divider>
  <v-row class="ma-2">
    <span class="text-title section-title">BORDER</span>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="start">
    <v-col cols="2" class="py-1">
      <span class="pb-1 text-caption">Width</span>
    </v-col>
    <v-col cols="6" class="py-1">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="borderWidth"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="start">
    <v-col cols="2" class="py-1">
      <span class="pb-1 text-caption">Color</span>
    </v-col>
    <v-col cols="6" class="py-1 ml-2 mb-2">
      <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="color-preview" :color="borderColor">
          </v-btn>
        </template>
        <v-color-picker v-model="borderColor" flat></v-color-picker>
      </v-menu>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="start">
    <v-col cols="2" class="py-1">
      <span class="pb-1 text-caption">Style</span>
    </v-col>
    <v-col cols="6" class="py-1">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="borderStyles"
        v-model="borderStyle"
      >
      </v-select>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0 mb-2" align="center" justify="start">
    <v-col cols="2" class="py-1">
      <span class="pb-1 text-caption">Radius</span>
    </v-col>
    <v-col cols="6" class="py-1">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="borderRadius"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0 mb-2" align="center" justify="start">
    <v-col cols="4" class="py-1">
      <span class="pb-1 text-caption">Apply On:</span>
    </v-col>
  </v-row>
  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Top</span>
    </v-col>
    <v-col cols="2" class="py-1 px-0">
      <v-checkbox
        class="ml-2"
        density="compact"
        hide-details="auto"
        v-model="borderTop"
      >
      </v-checkbox>
    </v-col>

    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Bottom</span>
    </v-col>
    <v-col cols="2" class="py-1 px-0">
      <v-checkbox
        class="ml-2"
        density="compact"
        hide-details="auto"
        v-model="borderBottom"
      >
      </v-checkbox>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Right</span>
    </v-col>
    <v-col cols="2" class="py-1 px-0">
      <v-checkbox
        class="ml-2"
        density="compact"
        hide-details="auto"
        v-model="borderRight"
      >
      </v-checkbox>
    </v-col>

    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Left</span>
    </v-col>
    <v-col cols="2" class="py-1 px-0">
      <v-checkbox
        class="ml-2"
        density="compact"
        hide-details="auto"
        v-model="borderLeft"
      >
      </v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  name: "BorderSection",
  data() {
    return {
      borderStyles: [
        "solid",
        "dotted",
        "dashed",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset",
        "none",
        "hidden",
      ],
    };
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    borderWidth: {
      get() {
        return this.inspectedComponent.props.borderWidth * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.borderWidth = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    borderColor: {
      get() {
        return this.inspectedComponent.props.borderColor;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.borderColor = value;
        this.updateInspectedComponent(payload);
      },
    },
    borderStyle: {
      get() {
        return this.inspectedComponent.props.borderStyle;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.borderStyle = value;
        this.updateInspectedComponent(payload);
      },
    },
    borderRadius: {
      get() {
        return this.inspectedComponent.props.borderRadius * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.borderRadius = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    borderTop: {
      get() {
        return this.inspectedComponent.props.borderTop;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.borderTop = value;
        this.updateInspectedComponent(payload);
      },
    },
    borderBottom: {
      get() {
        return this.inspectedComponent.props.borderBottom;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.borderBottom = value;
        this.updateInspectedComponent(payload);
      },
    },
    borderRight: {
      get() {
        return this.inspectedComponent.props.borderRight;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.borderRight = value;
        this.updateInspectedComponent(payload);
      },
    },
    borderLeft: {
      get() {
        return this.inspectedComponent.props.borderLeft;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.borderLeft = value;
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
.caption-small {
  font-size: 10px !important;
}
</style>