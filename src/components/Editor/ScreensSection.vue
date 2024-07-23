<template>
  <main>
    <v-row class="ma-0 px-4 pt-2 title-row" align="center">
      <v-icon class="mr-1" size="14">mdi-monitor-screenshot</v-icon>
      <span class="title-tab">Screens</span>
    </v-row>

    <v-row class="mx-0" align="center">
      <!--Screen cards-->
      <v-col v-for="screen in screens" :key="screen._id" cols="6" class="py-1">
        <v-card
          color="#242424"
          dark
          outlined
          :class="screen._id == selectedScreen ? 'green-border' : ''"
          @dblclick.prevent="handleSelectScreen(screen._id)"
        >
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                class="screen-options"
                density="compact"
                icon="mdi-dots-vertical"
                elevation="0"
                size="24"
                v-bind="props"
              >
              </v-btn>
            </template>
            <v-list density="compact">
              <v-list-item @click="duplicateScreen(screen._id)" disabled>
                <v-row class="screen-title ma-0" align="center">
                  <v-icon size="16">mdi-content-duplicate</v-icon>
                  Duplicate
                </v-row>
              </v-list-item>

              <v-list-item @click="deleteScreen(screen._id)">
                <v-row class="screen-title ma-0" align="center">
                  <v-icon size="16">mdi-delete</v-icon>
                  Delete
                </v-row>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-img
            :aspect-ratio="dimension.width / dimension.height"
            cover
            class="mx-6 my-2"
            :src="
              screen.preview && screen.preview !== ''
                ? screen.preview
                : 'https://www.publicdomainpictures.net/pictures/40000/nahled/gray-background-1361959709geQ.jpg'
            "
          ></v-img>
          <v-card-title class="text-center py-0 px-1">
            <v-text-field
              v-model="screen.name"
              :variant="renameId != screen._id ? 'plain' : 'outlined'"
              density="compact"
              hide-details="auto"
              class="screen-title font-weight-bold mb-2"
              :readonly="renameId != screen._id"
              @dblclick.prevent="renameScreen(screen._id, $event)"
              @blur="handleRenameScreen(screen._id, screen.name)"
              @keypress.enter="handleRenameScreen(screen._id, screen.name)"
              @mousedown="disableTextSelection"
              @selectstart="disableTextSelection"
            >
            </v-text-field>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="6" class="py-1">
        <v-card
          color="#242424"
          dark
          outlined
          class="add-screen text-center"
          @click="addScreen()"
        >
          <v-icon class="mx-auto" size="32"> mdi-plus </v-icon>
          <v-card-title class="text-center py-0 px-1">
            <span class="screen-title font-weight-bold"> Add Screen </span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>

<script>
import { mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
export default {
  data() {
    return {
      screens: [],
      renameId: null,
      selectedScreen: null,
      dimension: {
        width: 1920,
        height: 1080,
      },
    };
  },
  methods: {
    ...mapActions(componentsStore, ["initializeComponents"]),
    async addScreen() {
      try {
        const response = await this.axios({
          method: "POST",
          url: `/screens/create`,
          data: {
            project: this.$route.params.projectId,
            name: `Screen ${this.screens.length + 1}`,
          },
        });

        this.screens.push(response.data.screen);
      } catch (error) {
        console.error(error);
      }
    },

    duplicateScreen(index) {
      this.screens.push({
        image: this.screens[index].image,
        title: `Screen ${this.screens.length + 1}`,
      });
    },

    async deleteScreen(id) {
      try {
        this.screens = this.screens.filter((screen) => screen._id !== id);

        await this.axios({
          method: "DELETE",
          url: `/screens/delete/${id}`,
        });
      } catch (error) {
        console.error(error);
      }
    },

    renameScreen(id, event) {
      this.renameId = id;
      this.$nextTick(() => {
        event.target.select();
      });
    },

    disableTextSelection(event) {
      event.preventDefault();
    },

    async fetchScreens() {
      try {
        const response = await this.axios({
          method: "GET",
          url: `/screens/${this.$route.params.projectId}`,
        });

        this.screens = response.data.screens;

        if (this.screens.length > 0) {
          this.selectedScreen = this.screens[0]._id;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async handleRenameScreen(id, name) {
      try {
        this.renameId = null;

        await this.axios({
          method: "PUT",
          url: `/screens/rename`,
          data: {
            screen: id,
            name,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },

    handleSelectScreen(id) {
      this.selectedScreen = id;

      this.fetchComponents();
    },

    async fetchComponents() {
      try {
        const response = await this.axios({
          method: "GET",
          url: `/components/${this.selectedScreen}`,
        });

        this.initializeComponents(response.data.components, this.selectedScreen);
      } catch (error) {
        console.error(error);
      }
    },
  },
  async created() {
    await this.fetchScreens();

    if (this.screens.length > 0 && this.selectedScreen) {
      await this.fetchComponents();
    }
  },
};
</script>

<style scoped>
.title-tab {
  font-size: 14px !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}

.title-row {
  position: sticky !important;
  top: 0 !important;
  z-index: 1 !important;
  background-color: #242424 !important;
}

.screen-title {
  font-size: 14px !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  text-align: center !important;
}

.screen-title input {
  text-align: center !important;
}

.screen-options {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: transparent !important;
}

.add-screen {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  height: 120px !important;
  border: 1px dashed #646464 !important;
  border-radius: 5px !important;
  color: #646464 !important;
}

.green-border {
  border: 1px solid #7efff5 !important;
}
</style>