import * as Vue from "vue"; // in Vue 3
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

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueDragDrop);

app.mount("#app");
