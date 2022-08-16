import axios from "@/services/axios";
import Cookies from "js-cookie";
import authHeader from '../services/authHeaders'

export default {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
    SET_LOADING(state, data) {
      state.loading = data;
    },
    LOGOUT(state, value) {
      state.user = value;
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("SET_USER", payload);
    },
    async profile({ commit }) {
      const userData = await axios().get("/api/v1/user/profile", authHeader());
      commit("SET_USER", userData.data);
    },
    logOut({ commit }) {
      Cookies.remove("Authorization");
      commit("LOGOUT", null);
    },
  },
};