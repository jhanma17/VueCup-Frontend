<template>
  <div class="mx-4 my-2">
    <div class="d-flex justify-space-between">
      <div>
        <v-icon class="mr-1" size="14">mdi-archive</v-icon>
        <span class="title-tab">Project</span>
      </div>
      <div>
        <v-btn icon flat size="x-small" :ripple="false" color="transparent">
          <v-icon color="white"> mdi-dots-vertical </v-icon>
        </v-btn>
        <v-btn icon flat size="x-small" :ripple="false" color="transparent">
          <v-icon color="white"> mdi-plus </v-icon>
        </v-btn>
      </div>
    </div>

    <div class="three">
      <ProjectTree/>
    </div>
  </div>
</template>

<script>
import ProjectTree from "./ProjectTree/index.vue";

export default {
  components: {
    ProjectTree,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.title-tab {
  font-size: 14px !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}
.three {
  font-family: "Roboto Mono", monospace;
  font-size: 11px;
}
</style>