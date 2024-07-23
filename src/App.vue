<template>
  <main>
    <router-view />
  </main>
</template>

  <script>
  import { mapActions } from "pinia";
  import { userStore } from "./stores/user";

  export default {
    name: "App",
    methods: {
      ...mapActions(userStore, ["setUser", "setToken"]),
    },
    created() {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if (user && token) {
        this.setUser(user);
        this.setToken(token);
      }
    },
  };
</script>

<style>
.v-field{
  font-size: 14px !important;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}
</style>
