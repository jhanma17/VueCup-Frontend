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
import ContainerProps from "@/components/ComponentTemplates/BasicComponents/ContainerComponents/ContainerProps";
import ImageProps from "@/components/ComponentTemplates/BasicComponents/ImageComponents/ImageProps";
import OrderedListProps from "@/components/ComponentTemplates/BasicComponents/ListComponents/OrderedListProps";
import UnorderedListProps from "@/components/ComponentTemplates/BasicComponents/ListComponents/UnorderedListProps";
import TextProps from "@/components/ComponentTemplates/BasicComponents/TextComponents/TextProps";

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
            name: "Title",
            props: {
              ...TextProps,
            },
          },
        },
        {
          name: "Body",
          icon: "https://static.thenounproject.com/png/66759-200.png",
          associatedComponent: {
            type: "BodyTemplate",
            name: "Body",
            props: {
              ...TextProps,
            },
          },
        },
        {
          name: "Paragraph",
          icon: "https://cdn.icon-icons.com/icons2/2446/PNG/512/paragraph_capital_text_icon_148706.png",
          associatedComponent: {
            type: "ParagraphTemplate",
            name: "Paragraph",
            props: {
              ...TextProps,
            },
          },
        },
        {
          name: "Link",
          icon: "https://cdn.icon-icons.com/icons2/2348/PNG/512/link_icon_142996.png",
          associatedComponent: {
            type: "LinkTemplate",
            name: "Link",
            props: {
              ...TextProps,
            },
          },
        },
      ],
      imageComponents: [
        {
          name: "Image",
          icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
          associatedComponent: {
            type: "ImageTemplate",
            name: "Image",
            props: {
              ...ImageProps,
            },
          },
        },
      ],
      containerComponents: [
        {
          name: "Container",
          icon: "https://static.thenounproject.com/png/452089-200.png",
          associatedComponent: {
            type: "ContainerTemplate",
            name: "Container",
            props: {
              ...ContainerProps,
            },
          },
        },
      ],
      listComponents: [
        {
          name: "Unordered List",
          icon: "https://cdn0.iconfinder.com/data/icons/user-interface-6/100/ui-31-512.png",
          associatedComponent: {
            type: "UnorderedListTemplate",
            name: "Unordered List",
            props: {
              ...UnorderedListProps,
            },
          },
        },
        {
          name: "Ordered List",
          icon: "https://cdn.icon-icons.com/icons2/2596/PNG/512/ordered_list_icon_155054.png",
          associatedComponent: {
            type: "OrderedListTemplate",
            name: "Ordered List",
            props: {
              ...OrderedListProps,
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
        case "Images":
          return this.imageComponents;
        case "Containers":
          return this.containerComponents;
        case "Lists":
          return this.listComponents;
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