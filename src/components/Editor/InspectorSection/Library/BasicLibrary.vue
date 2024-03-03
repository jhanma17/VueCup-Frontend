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
import ContainerProps from "../../../ComponentTemplates/BasicComponents/ContainerComponents/ContainerProps";

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
              size: 16,
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
              size: 10,
              color: "#ffffff",
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
            props: {
              src: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
              width: 100,
              widthMode: "px",
              height: 100,
              heightMode: "px",
              display: "block",
              position: "static",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              grow: 0,
              shrink: 0,
              fitMode: "Fill",
              repeatMode: "Repeat",
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
            props: {
            },
          },
        },
        {
          name: "Ordered List",
          icon: "https://cdn.icon-icons.com/icons2/2596/PNG/512/ordered_list_icon_155054.png",
          associatedComponent: {
            type: "OrderedListTemplate",
            props: {
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