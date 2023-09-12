<template>
  <SizingSection v-if="inspectedComponent && !isTextComponent" />
  <TextSection v-if="inspectedComponent && isTextComponent"/>
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
    isTextComponent() {
      return this.textTypes.includes(this.inspectedComponent.type);
    },
  },
}
</script>

<style>

</style>