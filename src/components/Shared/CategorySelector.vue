<template>
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
</template>

<script>
export default {
  methods: {
    selectCategory(category) {
      this.$emit("selectCategory", category);
    },
  },
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    selectedCategory: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
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
</style>