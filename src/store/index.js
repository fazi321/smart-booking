import { createStore } from "vuex";
import auth from "./auth";
import details from "./details";
export default createStore({
  modules: {
    auth,
    details,
  },
});
