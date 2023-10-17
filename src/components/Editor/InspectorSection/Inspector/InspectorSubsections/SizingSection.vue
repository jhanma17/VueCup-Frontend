<template>
  <v-divider class="mt-2"></v-divider>
  <v-row class="ma-2">
    <span class="text-title section-title">TRANSFORM</span>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="6" class="py-1">
      <span class="text-caption">Display Mode</span>
    </v-col>

    <v-col cols="6" class="py-1 pl-0">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="DisplayOptions"
        v-model="display"
      ></v-select>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center">
    <v-col cols="6" class="py-1">
      <span class="text-caption">Position Mode</span>
    </v-col>

    <v-col cols="6" class="py-1 pl-0">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="positionOptions"
        v-model="position"
      ></v-select>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0 pr-3" align="center">
    <v-col cols="4" class="py-1">
      <span class="text-caption">Size</span>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0 pr-3" align="center" justify="center">
    <v-col cols="1" class="py-1 px-0 text-right">
      <span class="caption-small">X</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0" v-if="this.widthMode != 'auto'">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="width"
      ></v-text-field>
    </v-col>
    <v-col cols="5" class="py-1 px-2">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="sizeModeOptions"
        v-model="widthMode"
      ></v-select>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0 pr-3" align="center" justify="center">
    <v-col cols="1" class="py-1 px-0 text-right">
      <span class="caption-small">Y</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0" v-if="this.heightMode != 'auto'">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
        v-model="height"
      ></v-text-field>
    </v-col>
    <v-col cols="5" class="py-1 px-2">
      <v-select
        class="ml-2"
        density="compact"
        hide-details="auto"
        :items="sizeModeOptions"
        v-model="heightMode"
      ></v-select>
    </v-col>
  </v-row>

  <template v-if="showBorderSubsection">
    <v-row class="mx-1 my-0" align="center" justify="center">
      <v-col cols="12" class="py-2">
        <span class="text-caption">Border Distance</span>
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
          v-model="top"
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
          v-model="bottom"
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
          v-model="right"
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
          v-model="left"
        ></v-text-field>
      </v-col>
    </v-row>
  </template>

  <template v-if="this.display == 'flex'">
    <v-row class="mx-1 my-0" align="center">
      <v-col cols="6" class="py-1">
        <span class="text-caption">Flex Direction</span>
      </v-col>

      <v-col cols="6" class="py-1 pl-0">
        <v-select
          class="ml-2"
          density="compact"
          hide-details="auto"
          :items="flexDirectionsOptions"
          v-model="flexDirection"
        ></v-select>
      </v-col>
    </v-row>

    <v-row class="mx-1 my-0" align="center">
      <v-col cols="6" class="py-1">
        <span class="text-caption">Justify Content</span>
      </v-col>

      <v-col cols="6" class="py-1 pl-0">
        <v-select
          class="ml-2"
          density="compact"
          hide-details="auto"
          :items="justifyContentOptions"
          v-model="justifyContent"
        ></v-select>
      </v-col>
    </v-row>

    <v-row class="mx-1 my-0" align="center">
      <v-col cols="6" class="py-1">
        <span class="text-caption">Align Items</span>
      </v-col>

      <v-col cols="6" class="py-1 pl-0">
        <v-select
          class="ml-2"
          density="compact"
          hide-details="auto"
          :items="alignItemsOptions"
          v-model="alignItems"
        ></v-select>
      </v-col>
    </v-row>

    <v-row class="mx-1 my-0" align="center">
      <v-col cols="2" class="py-1">
        <span class="text-caption">Grow</span>
      </v-col>

      <v-col cols="4" class="py-1 pl-0">
        <v-text-field
          class="ml-2"
          density="compact"
          hide-details="auto"
          type="number"
          v-model="grow"
        ></v-text-field>
      </v-col>

      <v-col cols="2" class="py-1">
        <span class="text-caption">Shrink</span>
      </v-col>

      <v-col cols="4" class="py-1 pl-0">
        <v-text-field
          class="ml-2"
          density="compact"
          hide-details="auto"
          type="number"
          v-model="shrink"
        ></v-text-field>
      </v-col>
    </v-row>
  </template>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";

export default {
  name: "SizingSection",
  data() {
    return {
      positionOptions: ["relative", "absolute", "fixed", "static"],
      DisplayOptions: ["block", "inline-block", "inline", "flex", "none"],
      flexDirectionsOptions: ["row", "row-reverse", "column", "column-reverse"],
      justifyContentOptions: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      alignItemsOptions: [
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch",
      ],
      sizeModeOptions: ["auto", "px", "%", "vw", "vh", "em", "rem"],
    };
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    showBorderSubsection() {
      const positionList = ["relative", "absolute", "fixed"];
      return positionList.includes(this.position);
    },
    display: {
      get() {
        return this.inspectedComponent.props.display;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.display = value;
        this.updateInspectedComponent(payload);
      },
    },
    position: {
      get() {
        return this.inspectedComponent.props.position;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.position = value;
        this.updateInspectedComponent(payload);
      },
    },
    height: {
      get() {
        return this.inspectedComponent.props.height * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.height = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    heightMode: {
      get() {
        return this.inspectedComponent.props.heightMode;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.heightMode = value;
        this.updateInspectedComponent(payload);
      },
    },
    width: {
      get() {
        return this.inspectedComponent.props.width * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.width = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    widthMode: {
      get() {
        return this.inspectedComponent.props.widthMode;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.widthMode = value;
        this.updateInspectedComponent(payload);
      },
    },
    top: {
      get() {
        return this.inspectedComponent.props.top * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.top = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    bottom: {
      get() {
        return this.inspectedComponent.props.bottom * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.bottom = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    right: {
      get() {
        return this.inspectedComponent.props.right * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.right = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    left: {
      get() {
        return this.inspectedComponent.props.left * 5;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.left = value / 5;
        this.updateInspectedComponent(payload);
      },
    },
    flexDirection: {
      get() {
        return this.inspectedComponent.props.flexDirection;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.flexDirection = value;
        this.updateInspectedComponent(payload);
      },
    },
    justifyContent: {
      get() {
        return this.inspectedComponent.props.justifyContent;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.justifyContent = value;
        this.updateInspectedComponent(payload);
      },
    },
    alignItems: {
      get() {
        return this.inspectedComponent.props.alignItems;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.alignItems = value;
        this.updateInspectedComponent(payload);
      },
    },
    grow: {
      get() {
        return this.inspectedComponent.props.grow;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.grow = value;
        this.updateInspectedComponent(payload);
      },
    },
    shrink: {
      get() {
        return this.inspectedComponent.props.shrink;
      },
      set(value) {
        let payload = this.inspectedComponent;
        payload.props.shrink = value;
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