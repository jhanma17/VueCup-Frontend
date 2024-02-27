<template>
  <v-col v-for="component in componentsTree" :key="component.id" cols="12" class="py-1 px-0">
    <ProjectNode :component="component" />
  </v-col>
</template>

<script>
import { mapState } from "pinia";
import { componentsStore } from "@/stores/components";
import ProjectNode from "./ProjectNode.vue";

export default {
  name: "ProjectTree",
  components: {
    ProjectNode,
  },
  computed: {
    ...mapState(componentsStore, ["componentsTree"]),
  },
};
</script>

<style>
</style>