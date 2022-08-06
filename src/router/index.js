import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Hotel from "../views/Hotel.vue";
import HotelDetail from "../views/HotelDetail.vue";
import Profile from "../views/Profile.vue";
import Messages from "../views/Messages.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/hotel",
    name: "hotel",
    component: Hotel,
  },
  {
    path: "/hotel-detail",
    name: "hotelDetail",
    component: HotelDetail,
  },
  {
    path: "/my-profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/messages",
    name: "messages",
    component: Messages,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
