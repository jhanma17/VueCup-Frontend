import * as Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import VueDragDrop from "vue3-drag-drop";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3DUPW4Tq4bF5lqfOwAYlbgsDv7cl44tM",
  authDomain: "vue-cup-5fdde.firebaseapp.com",
  projectId: "vue-cup-5fdde",
  storageBucket: "vue-cup-5fdde.appspot.com",
  messagingSenderId: "422780300915",
  appId: "1:422780300915:web:386e3086a9a50572990406",
};

initializeApp(firebaseConfig);

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});

const app = Vue.createApp(App);

app.config.globalProperties.window = window;

const baseURL = import.meta.env.VITE_API_ENDPOINT;
axios.defaults.baseURL = baseURL;

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
  (request) => {
    // Add token to request headers
    const token = localStorage.getItem("token");
    if (token) {
      request.headers["Authorization"] = token;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueDragDrop);

app.mount("#app");
