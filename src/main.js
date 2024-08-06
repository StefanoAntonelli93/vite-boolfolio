import { createApp } from "vue";
// import router-web
import { router } from "./router";
// import sass
import "./assets/js/scss/main.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import App from "./App.vue";

createApp(App).use(router).mount("#app");
