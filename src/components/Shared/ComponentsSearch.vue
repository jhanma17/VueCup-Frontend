<template>
  <div class="search-container">
    <v-icon class="ml-4" size="20" color="#c5c5c5"> mdi-magnify </v-icon>
    <input
      v-model="searchComputed"
      class="ml-2 text-caption search-input"
      placeholder="Search"
    />
  </div>
</template>

<script>
export default {
  computed: {
    searchComputed: {
      get() {
        return this.search;
      },
      set(value) {
        this.$emit("updateSearch", value);
      },
    },
  },
  props: {
    search: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>

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