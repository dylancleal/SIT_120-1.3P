import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// Import your route components
import myHome from "./components/myHome.vue";
import myAbout from "./components/myAbout.vue";
import myProjects from "./components/myProjects.vue";
import myContact from "./components/myContact.vue";

const routes = [
  { path: "/", component: myHome },
  { path: "/myabout", component: myAbout },
  { path: "/myprojects", component: myProjects },
  { path: "/mycontact", component: myContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
