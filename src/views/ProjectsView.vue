<template>
  <div class="projects-view">
    <v-row class="mt-4 px-6 pb-3" justify="space-between" align="center">
      <v-col cols="auto">
        <h1 class="text-white text-h5">Projects</h1>
      </v-col>

      <v-col cols="auto">
        <v-btn @click="handleNewProject()" color="grey--darken-3" dark> + New Project </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="mt-5 mx-5">
      <v-col cols="3">
        <v-img
          class="mx-auto rounded-lg"
          cover
          width="auto"
          :aspect-ratio="16 / 9"
          src="https://www.publicdomainpictures.net/pictures/40000/nahled/gray-background-1361959709geQ.jpg"
        >
        </v-img>
        <v-text-field
          ref="new-project-input"
          variant="outlined"
          density="compact"
          rounded="lg"
          class="mt-1"
          hide-details="auto"
          v-model="newProjectName"
          @keyup.enter="createProject()"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      projects: [],
      newProjectName: "New Project",
      showNewProject: false,
    };
  },
  methods: {
    handleNewProject() {
      this.showNewProject = !this.showNewProject;

      this.$nextTick(() => {
        this.$refs["new-project-input"].focus();
        this.$refs["new-project-input"].select();
      });
    },
    async createProject() {
      const response = await this.axios({
        method: "POST",
        url: "/project/create",
        data: {
          name: this.newProjectName,
        },
      })

      console.log(response.data);
    },
  },
};
</script>

<style>
</style>