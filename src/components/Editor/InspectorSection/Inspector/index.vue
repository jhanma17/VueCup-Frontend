<template>
  <SizingSection />
  <TextSection v-if="inspectedComponent && textTypes.includes(inspectedComponent.type)"/>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import TextSection from './InspectorSubsections/TextSection.vue';
import SizingSection from './InspectorSubsections/SizingSection.vue';

export default {
  name: "Inspector",
  components: {
    TextSection,
    SizingSection,
  },
  data() {
    return {
      textTypes: ["BodyTemplate", "LinkTemplate", "ParagraphTemplate", "TitleTemplate"],
    }
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
  },
}
</script>

<style>

</style>