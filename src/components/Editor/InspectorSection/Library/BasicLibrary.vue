<template>
  <v-row class="ma-1 my-0 pa-2">
    <CategorySelector
      :categories="categories"
      :selectedCategory="selectedCategory"
      @selectCategory="selectCategory"
    />
  </v-row>

  <v-row class="ma-0 pb-1 search-row">
    <div class="search-container">
      <v-icon class="ml-4" size="20" color="#c5c5c5"> mdi-magnify </v-icon>
      <input
        v-model="search"
        class="ml-2 text-caption search-input"
        placeholder="Search"
      />
    </div>
  </v-row>

  <v-row class="mx-4 my-2">
    <v-col
      v-for="(component, index) in filteredComponents"
      :key="index"
      cols="4"
      class="pa-0"
    >
      <div class="component-box">
        <v-img
          :src="component.icon"
          aspect-ratio="1"
          width="50px"
          class="mx-auto"
        >
        </v-img>

        <span class="text-caption mb-1">
          {{ component.name }}
        </span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CategorySelector from "@/components/Shared/CategorySelector.vue";
export default {
  data() {
    return {
      categories: ["Texts", "Images", "Containers", "Lists", "Embedded"],
      selectedCategory: "Texts",
      components: [
        {
          name: "Text",
          icon: "https://cdn-icons-png.flaticon.com/512/8623/8623647.png",
        },
      ],
      search: "",
    };
  },
  computed: {
    filteredComponents() {
      return this.components.filter((component) => {
        return component.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
  components: {
    CategorySelector,
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

.search-row {
  border-bottom: 1px solid #484848;
}

.search-container {
  width: 100%;
  height: 30px;
}

.search-input {
  background-color: transparent;
  border: none;
  outline: none;
  color: #c5c5c5;
}
</style>