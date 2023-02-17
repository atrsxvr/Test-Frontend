import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "../views/HomePageView.vue";
import LoginPageView from "../views/LoginPageView.vue";
import HistoryPageView from "../views/HistoryPageView.vue";
import ProfilePageView from "../views/ProfilePageView.vue";
import EditProfilePageView from "../views/EditProfilePageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPageView,
    },
    {
      path: "/home",
      name: "home",
      component: HomePageView,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryPageView,
    },
    {
      path: "/profile",
      name: "profilePage",
      component: ProfilePageView,
    },
    {
      path: "/editProfile",
      name: "editProfile",
      component: EditProfilePageView,
    },
  ],
});

export default router;
