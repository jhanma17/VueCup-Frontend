<template>
  <SizingSection v-if="inspectedComponent && !isTextComponent" />
  <TextSection v-if="inspectedComponent && isTextComponent"/>
  <ImageSection v-if="inspectedComponent && isImageComponent"/>
  <SpacingSection v-if="inspectedComponent"/>
  <BackgroundSection v-if="inspectedComponent && isContainerComponent"/>
  <BorderSection v-if="inspectedComponent && isContainerComponent"/>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import TextSection from './InspectorSubsections/TextSection.vue';
import SizingSection from './InspectorSubsections/SizingSection.vue';
import ImageSection from './InspectorSubsections/ImageSection.vue';
import SpacingSection from './InspectorSubsections/SpacingSection.vue';
import BackgroundSection from "./InspectorSubsections/BackgroundSection.vue";
import BorderSection from "./InspectorSubsections/BorderSection.vue";

export default {
  name: "Inspector",
  components: {
    TextSection,
    SizingSection,
    ImageSection,
    SpacingSection,
    BackgroundSection,
    BorderSection,
  },
  data() {
    return {
      textTypes: ["BodyTemplate", "LinkTemplate", "ParagraphTemplate", "TitleTemplate"],
    }
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
    isTextComponent() {
      return this.textTypes.includes(this.inspectedComponent.type);
    },
    isImageComponent() {
      return this.inspectedComponent.type === "ImageTemplate";
    },
    isContainerComponent() {
      return this.inspectedComponent.type === "ContainerTemplate";
    },
  },
}
</script>

<style>

</style>