import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Listings from "../views/Listings.vue";
import Detail from "../views/Detail.vue";
import Profile from "../views/Profile.vue";
import Messages from "../views/Messages.vue";
import ServiceBooking from "../views/ServiceBooking.vue";
import ServiceDetail from "../views/ServiceDetail.vue";
import Privacy from "../views/Privacy.vue";
import Faqs from "../views/Faqs.vue";
import Terms from "../views/Terms.vue";
import MyServices from "../views/MyServices.vue";
import Favourites from "../views/Favourites.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:category",
    name: "category",
    component: Listings,
  },
  {
    path: "/:cat/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/my-profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/my-services",
    name: "myservices",
    component: MyServices,
  },
  {
    path: "/messages",
    name: "messages",
    component: Messages,
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: Privacy,
  },
  {
    path: "/faqs",
    name: "faqs",
    component: Faqs,
  },
  {
    path: "/term-conditions",
    name: "terms",
    component: Terms,
  },
  {
    path: "/service-booking",
    name: "ServiceBooking",
    component: ServiceBooking,
  },
  {
    path: "/service-details",
    name: "ServiceDetail",
    component: ServiceDetail,
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
  scrollBehavior() {
    // if (to.path === '/search' || to.path === '/blog') return
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ behavior: 'smooth', left: 0, top: 0 })
      }, 100)
    })
  },
});

export default router;
