<template>
  <v-divider></v-divider>
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
      ></v-select>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0 pr-3" align="center">
    <v-col cols="4" class="py-1">
      <span class="text-caption">Size</span>
    </v-col>

    <v-col cols="1" class="py-1 px-0 text-right">
      <span class="text-caption">X</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
      ></v-text-field>
    </v-col>

    <v-col cols="1" class="py-1 px-0 text-right">
      <span class="text-caption">Y</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="12" class="py-2">
      <span class="text-caption">Border Distance</span>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="text-caption">Top</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
      ></v-text-field>
    </v-col>

    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="text-caption">Bottom</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mx-1 my-0" align="center" justify="center">
    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="text-caption">Right</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
      ></v-text-field>
    </v-col>

    <v-col cols="2" class="py-1 px-0 text-right">
      <span class="text-caption">Left</span>
    </v-col>
    <v-col cols="3" class="py-1 px-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
      ></v-text-field>
    </v-col>
  </v-row>

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
      ></v-text-field>
    </v-col>

    <v-col cols="2" class="py-1">
      <span class="text-caption">Basis</span>
    </v-col>

    <v-col cols="4" class="py-1 pl-0">
      <v-text-field
        class="ml-2"
        density="compact"
        hide-details="auto"
        type="number"
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
    };
  },
};
</script>

<style>
</style>