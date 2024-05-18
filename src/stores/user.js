import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {},
  actions: {
    setUser(user) {
      this.user = user;
    },
    setToken(token) {
      this.token = token;
    },
  },
});
