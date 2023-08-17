<template>
  <v-row class="ma-1 my-0 pa-2">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          class="text-caption category-selector pa-1"
          append-icon="mdi-chevron-down"
          block
          variant="text"
          v-bind="props"
        >
          {{ selectedCategory }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          class="category-item"
          v-for="(category, index) in categories"
          :key="index"
          :value="index"
          @click="selectCategory(category)"
        >
          <v-list-item-title class="text-caption">{{
            category
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>

  <v-row class="mx-4 my-2">
    <v-col cols="4" class="pa-0">
      <div class="component-box">
        <v-img
          src="https://cdn-icons-png.flaticon.com/512/8623/8623647.png"
          aspect-ratio="1"
          width="50px"
          class="mx-auto"
        >
        </v-img>

        <span class="text-caption mb-1">Text</span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Texts", "Images", "Containers", "Lists", "Embedded"],
      selectedCategory: "Texts",
    };
  },
};
</script>

<style scoped>
.selected-library-tab {
  color: #e3e3e3 !important;
  border-bottom: 0 !important;
}

.category-selector {
  border-radius: 0 !important;
  border-bottom: 1px solid #323232 !important;
  color: #c5c5c5 !important;
  background-color: #242424 !important;
  justify-content: space-between !important;
}

.category-item {
  min-height: 32px !important;
}

.component-box {
  display: flex;
  height: 100px;
  width: 100px;
  border: 1px solid #646464;
  flex-direction: column;
  justify-items: space-around;
  text-align: center;
}
</style>