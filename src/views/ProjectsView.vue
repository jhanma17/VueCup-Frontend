<template>
  <div class="projects-view">
    <v-row class="mt-4 px-6 pb-3" justify="space-between" align="center">
      <v-col cols="auto">
        <h1 class="text-white text-h5">Projects</h1>
      </v-col>

      <v-col cols="auto">
        <v-btn @click="handleNewProject()" color="grey--darken-3" dark>
          + New Project
        </v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="mt-5 mx-5">
      <v-col cols="3" v-if="showNewProject">
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

      <v-col cols="3" v-for="project in projects" :key="project._id">
        <v-img
          class="mx-auto rounded-lg mb-3"
          cover
          width="auto"
          :aspect-ratio="16 / 9"
          :src="
            project.preview && project.preview !== ''
              ? project.preview
              : 'https://www.publicdomainpictures.net/pictures/40000/nahled/gray-background-1361959709geQ.jpg'
          "
        >
        </v-img>
        <span class="text-white ml-1 text-subtitle-1">
          {{ project.name }}
        </span>
        <br />
        <span class="ml-1 text-subtitle-2">
          {{ timeDifference(project.updatedAt) }}
        </span>
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
      this.showNewProject = true;

      this.$nextTick(() => {
        this.$refs["new-project-input"].focus();
        this.$refs["new-project-input"].select();
      });
    },
    async createProject() {
      try {
        const response = await this.axios({
          method: "POST",
          url: "/projects/create",
          data: {
            name: this.newProjectName,
          },
        });

        this.projects.push(response.data.project);
      } catch (error) {
        console.error(error);
      } finally {
        this.showNewProject = false;
        this.newProjectName = "New Project";
      }
    },
    async fetchProjects() {
      try {
        const response = await this.axios({
          method: "GET",
          url: "/projects",
        });

        this.projects = response.data.projects;
      } catch (error) {
        console.error(error);
      }
    },
    timeDifference(updatedAt) {
      const date = new Date(updatedAt);
      const now = new Date();
      const diff = now - date;
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);
      if (years > 0) {
        return years + " years ago";
      } else if (months > 0) {
        return months + " months ago";
      } else if (days > 0) {
        return days + " days ago";
      } else if (hours > 0) {
        return hours + " hours ago";
      } else if (minutes > 0) {
        return minutes + " minutes ago";
      } else if (seconds > 0) {
        return seconds + " seconds ago";
      } else {
        return "Just now";
      }
    },
  },
  async created() {
    await this.fetchProjects();
  },
};
</script>

<style>
</style>