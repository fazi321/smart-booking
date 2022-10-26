import axios from "@/services/axios";

export default {
  namespaced: true,
  state: {
    details: [],
    categories: [],
    btnLastLoading: false,
  },
  mutations: {
    SET_DATA(state, data) {
      state.details = data;
    },
    SET_CAT(state, data) {
      state.categories = data;
    },
    SET_LOADING(state, data) {
      state.btnLastLoading = data;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("SET_LOADING", payload);
    },
    async getCategories({ commit }) {
      try {
        var res = await axios().get("services/categories");
        commit("SET_CAT", res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getDetail({ commit }, payload) {
      try {
        const dataDetail = await axios().get(`${payload.cate}/${payload.id}`);
        // services
        // console.log(dataDetail)
        if (payload.cate == "services") {
          commit("SET_DATA", dataDetail.data);
        } else {
          commit("SET_DATA", dataDetail.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
