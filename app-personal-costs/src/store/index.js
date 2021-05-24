import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentList: [],
  },
  mutations: {
    SET_PAYMENTLIST_DATA(state, payload) {
      state.paymentList = payload;
    },
  },
  getters: {
    getPaymentList: (state) => state.paymentList,
    getPaymentListFullPrice: (state) => state.paymentList
      .reduce((res, cur) => res + cur.price, 0),
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 0; i < 61; i += 1) {
            items.push({
              num: i,
              date: '20.05.2021',
              category: 'Education',
              price: 100,
            });
          }
          resolve(items);
        }, 1000);
      })
        .then((res) => {
          commit('SET_PAYMENTLIST_DATA', res);
        });
    },
  },
});
