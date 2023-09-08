<template>
  <TextSection/>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import TextSection from './InspectorSubsections/TextSection.vue';
export default {
  name: "Inspector",
  components: {
    TextSection
  },
  computed: {
    ...mapState(componentsStore, ["inspectedComponent"]),
  },
}
</script>

<style>

</style>