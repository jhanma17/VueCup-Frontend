<template>
  <v-row class="ma-1 my-0 pa-2">
    <CategorySelector
      :categories="categories"
      :selectedCategory="selectedCategory"
      @selectCategory="selectCategory"
    />
  </v-row>

  <v-row class="ma-0 pb-1 search-row">
    <ComponentsSearch
      :search="search"
      @updateSearch="updateSearch"
    />
  </v-row>

  <v-row class="mx-4 my-2">
    <v-col
      v-for="(component, index) in filteredComponents"
      :key="index"
      cols="4"
      class="pa-0"
    >
      <ComponentsBox
        :component="component"
      />
    </v-col>
  </v-row>
</template>

<script>
import CategorySelector from "@/components/Shared/CategorySelector.vue";
import ComponentsSearch from '@/components/Shared/ComponentsSearch.vue';
import ComponentsBox from '@/components/Shared/ComponentsBox.vue';

export default {
  data() {
    return {
      categories: [
        "Containers",
        "Navigation",
        "Inputs",
        "Layouts",
        "Data Displayers",
        "Feedbacks",
        "Images & Icons",
      ],
      selectedCategory: "Containers",
      components: [
        {
          name: "Text",
          icon: "https://cdn-icons-png.flaticon.com/512/8623/8623647.png",
        },
      ],
      search: "",
    }
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
    updateSearch(search) {
      this.search = search;
    },
  },

  components: {
    CategorySelector,
    ComponentsSearch,
    ComponentsBox,
  },
};
</script>

<style scoped>

.selected-library-tab {
  color: #e3e3e3 !important;
  border-bottom: 0 !important;
}

.search-row {
  border-bottom: 1px solid #484848;
}
</style>