<template>
  <v-row class="ma-1 my-0 pa-2">
    <CategorySelector
      :categories="categories"
      :selectedCategory="selectedCategory"
      @selectCategory="selectCategory"
    />
  </v-row>

  <v-row class="ma-0 pb-1 search-row">
    <ComponentsSearch :search="search" @updateSearch="updateSearch" />
  </v-row>

  <v-row class="mx-4 my-2">
    <v-col
      v-for="(component, index) in filteredComponents"
      :key="index"
      cols="4"
      class="pa-0"
    >
      <ComponentsBox :component="component" />
    </v-col>
  </v-row>
</template>

<script>
import CategorySelector from "@/components/Shared/CategorySelector.vue";
import ComponentsSearch from "@/components/Shared/ComponentsSearch.vue";
import ComponentsBox from "@/components/Shared/ComponentsBox.vue";

export default {
  data() {
    return {
      categories: ["Texts", "Images", "Containers", "Lists", "Embedded"],
      selectedCategory: "Texts",
      textComponents: [
        {
          name: "Title",
          icon: "https://cdn-icons-png.flaticon.com/512/8623/8623647.png",
          associatedComponent: {
            type: "TitleTemplate",
            props: {
              text: "title",
              fontFamily: "Roboto",
              fontStyle: "Regular",
              size: 12,
              color: "#ffffff",
            },
          },
        },
        {
          name: "Body",
          icon: "https://static.thenounproject.com/png/66759-200.png",
          associatedComponent: {
            type: "BodyTemplate",
            props: {
              text: "body sentence",
              fontFamily: "Roboto",
              fontStyle: "Regular",
              size: 12,
              color: "#ffffff",
            },
          },
        },
        {
          name: "Paragraph",
          icon: "https://cdn.icon-icons.com/icons2/2446/PNG/512/paragraph_capital_text_icon_148706.png",
          associatedComponent: {
            type: "ParagraphTemplate",
            props: {
              text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              fontFamily: "Roboto",
              fontStyle: "Regular",
              size: 12,
              color: "#ffffff",
            },
          },
        },
        {
          name: "Link",
          icon: "https://cdn.icon-icons.com/icons2/2348/PNG/512/link_icon_142996.png",
          associatedComponent: {
            type: "LinkTemplate",
            props: {
              text: "https://www.google.com",
              fontFamily: "Roboto",
              fontStyle: "Regular",
              size: 12,
              color: "#ffffff",
            },
          },
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
    components() {
      switch (this.selectedCategory) {
        case "Texts":
          return this.textComponents;
        default:
          return [];
      }
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