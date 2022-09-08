import axios from "@/services/axios";

export default {
  namespaced: true,
  state: {
    details: [],
    categories:[],
  },
  mutations: {
    SET_DATA(state, data) {
      state.details = data;
    },
    SET_CAT(state, data) {
      state.categories = data;
    },
  },
  actions: {
    async getCategories({commit}) {
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
        console.log(dataDetail)
        if(payload.cate == 'services'){
          commit("SET_DATA", dataDetail.data);
        }else{
          commit("SET_DATA", dataDetail.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
