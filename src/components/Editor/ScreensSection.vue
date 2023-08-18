<template>
  <main>
    <v-row class="ma-0 px-4 pt-2 title-row" align="center">
      <v-icon class="mr-1" size="14">mdi-monitor-screenshot</v-icon>
      <span class="title-tab">Screens</span>
    </v-row>

    <v-row class="mx-0" align="center">
      <!--Screen cards-->
      <v-col
        v-for="(screen, index) in screens"
        :key="index"
        cols="6"
        class="py-1"
      >
        <v-card color="#242424" dark outlined>
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
              <v-list-item @click="duplicateScreen(index)">
                <v-row class="screen-title ma-0" align="center">
                  <v-icon size="16">mdi-content-duplicate</v-icon>
                  Duplicate
                </v-row>
              </v-list-item>

              <v-list-item @click="deleteScreen(index)">
                <v-row class="screen-title ma-0" align="center">
                  <v-icon size="16">mdi-delete</v-icon>
                  Delete
                </v-row>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-card-img>
            <v-img
              :aspect-ratio="dimension.width / dimension.height"
              class="mx-6 my-2"
              :src="screen.image"
            ></v-img>
          </v-card-img>
          <v-card-title class="text-center py-0 px-1">
            <v-text-field
              v-model="screen.title"
              variant="plain"
              density="compact"
              hide-details="auto"
              class="screen-title font-weight-bold mb-2"
              :readonly="renameIndex != index"
              @dblclick.prevent="renameScreen(index, $event)"
              @blur="renameIndex = null"
              @keypress.enter="renameIndex = null"
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
export default {
  data() {
    return {
      screens: [
        {
          image: "https://mbluxury1.s3.amazonaws.com/2021/02/03212053/mayo.jpg",
          title: "Screen 1",
        },
        {
          image:
            "https://images.ctfassets.net/lh3zuq09vnm2/6v6hASKYhu8sohkJgIUIMW/bd0f0f28e9313f8945fd50474513c08a/03_Freshbooks.jpg",
          title: "Screen 2",
        },
      ],
      renameIndex: null,
      blankImage:
        "https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg",
      dimension: {
        width: 1920,
        height: 1080,
      },
    };
  },
  methods: {
    addScreen() {
      this.screens.push({
        image: this.blankImage,
        title: `Screen ${this.screens.length + 1}`,
      });
    },
    duplicateScreen(index) {
      this.screens.push({
        image: this.screens[index].image,
        title: `Screen ${this.screens.length + 1}`,
      });
    },
    deleteScreen(index) {
      this.screens.splice(index, 1);
    },
    renameScreen(index, event) {
      this.renameIndex = index;
      this.$nextTick(() => {
        event.target.select();
      });
    },
    disableTextSelection(event) {
      event.preventDefault();
    },
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
</style>