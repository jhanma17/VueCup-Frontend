<template>
  <SizingSection v-if="inspectedComponent && !isTextComponent" />
  <TextSection v-if="inspectedComponent && isTextComponent"/>
  <ImageSection v-if="inspectedComponent && isImageComponent"/>
  <SpacingSection v-if="inspectedComponent"/>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import TextSection from './InspectorSubsections/TextSection.vue';
import SizingSection from './InspectorSubsections/SizingSection.vue';
import ImageSection from './InspectorSubsections/ImageSection.vue';
import SpacingSection from './InspectorSubsections/SpacingSection.vue';

export default {
  name: "Inspector",
  components: {
    TextSection,
    SizingSection,
    ImageSection,
    SpacingSection,
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
  },
}
</script>

<style>

</style>