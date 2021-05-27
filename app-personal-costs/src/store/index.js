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
    async fetchData({ commit }) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          // items = items < 10 ? `0${items}` : items;
          for (let i = 1; i < 51; i += 1) {
            items.push({
              id: i,
              date: '20.05.2011',
              category: 'Education',
              price: 100,
            });
          }
          resolve(items);
        }, 1);
      });
      commit('SET_PAYMENTLIST_DATA', res);
    },
  },

  // actions: {
  //   fetchDatat({ commit }) {
  //     setTimeout(() => {
  //       const items = [];
  //       fetch('../src/db/items.json').then((response) => response.json());
  //       commit('SET_PAYMENTLIST_DATA', items);
  //     }, 1000);
  //   },
  // },
});
