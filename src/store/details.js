import axios from "@/services/axios";

export default {
  namespaced: true,
  state: {
    details: [],
  },
  mutations: {
    SET_DATA(state, data) {
      state.details = data;
    },
  },
  actions: {
    async getDetail({ commit }, payload) {
      try {
        const dataDetail = await axios().get(`${payload.cate}/${payload.id}`);
        commit("SET_DATA", dataDetail.data[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
