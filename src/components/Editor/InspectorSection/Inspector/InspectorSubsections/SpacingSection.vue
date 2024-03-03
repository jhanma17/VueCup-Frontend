<template>
  <v-divider class="mt-2"></v-divider>
  <v-row class="ma-2">
    <span class="text-title section-title">SPACING</span>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="12" class="py-2">
      <span class="text-caption">Margin</span>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Top</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="marginTop"
      ></v-text-field>
    </v-col>

    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Bottom</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="marginBottom"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Right</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="marginRight"
      ></v-text-field>
    </v-col>

    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Left</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="marginLeft"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="12" class="py-2">
      <span class="text-caption">Padding</span>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Top</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="paddingTop"
      ></v-text-field>
    </v-col>

    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Bottom</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="paddingBottom"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Right</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="paddingRight"
      ></v-text-field>
    </v-col>

    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="caption-small">Left</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="paddingLeft"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  name: "SizingSection",
  data() {
    return {
      spacingModeOptions: ["auto", "px", "%", "vw", "vh", "em", "rem"],
    };
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    marginTop: {
      get() {
        return this.inspectedComponent.props.marginTop * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.marginTop = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    marginBottom: {
      get() {
        return this.inspectedComponent.props.marginBottom * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.marginBottom = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    marginRight: {
      get() {
        return this.inspectedComponent.props.marginRight * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.marginRight = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    marginLeft: {
      get() {
        return this.inspectedComponent.props.marginLeft * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.marginLeft = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    paddingTop: {
      get() {
        return this.inspectedComponent.props.paddingTop * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.paddingTop = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    paddingBottom: {
      get() {
        return this.inspectedComponent.props.paddingBottom * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.paddingBottom = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    paddingRight: {
      get() {
        return this.inspectedComponent.props.paddingRight * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.paddingRight = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    paddingLeft: {
      get() {
        return this.inspectedComponent.props.paddingLeft * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.paddingLeft = value / 5;
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