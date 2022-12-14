import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/style.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import axiosInstance from "@/services/axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import firebaseMessaging from "./firebase";
import i18n from './i18n'

const app = createApp(App).use(i18n);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB0BScCFIxNxzp_Ao7b4iwhaRx5ZnKvGCE",
    libraries: "places",
  },
});

app.config.globalProperties.$messaging = firebaseMessaging;
app.use(store);
app.use(router);
app.use(VueSweetalert2);
app.config.globalProperties.$axios = { ...axiosInstance() };
app.mount("#app");
