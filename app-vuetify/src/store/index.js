import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LocalDB = {
  page1: [
    {
      id: 1, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 2, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 3, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
    {
      id: 5, date: '24.03.2020', category: 'Education', value: 1500,
    },
  ],
  page2: [
    {
      id: 6, date: '25.03.2020', category: 'Food', value: 200,
    },
    {
      id: 7, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 8, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 9, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 10, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
  ],
  page3: [
    {
      id: 11, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 12, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 13, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 14, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
    {
      id: 15, date: '24.03.2020', category: 'Education', value: 1500,
    },
  ],
  page4: [
    {
      id: 16, date: '25.03.2020', category: 'Food', value: 200,
    },
    {
      id: 17, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 18, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 19, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 20, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
  ],
  page5: [
    {
      id: 21, date: '25.03.2020', category: 'Food', value: 200,
    },
    {
      id: 22, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 23, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 24, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 25, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
  ],
  page6: [
    {
      id: 26, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 27, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 28, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 29, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
    {
      id: 30, date: '24.03.2020', category: 'Education', value: 1500,
    },
  ],
  page7: [
    {
      id: 31, date: '25.03.2020', category: 'Food', value: 200,
    },
    {
      id: 32, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 33, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 34, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 35, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
  ],
  page8: [
    {
      id: 36, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 37, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 38, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 39, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
    {
      id: 40, date: '24.03.2020', category: 'Education', value: 1500,
    },
  ],
  page9: [
    {
      id: 41, date: '25.03.2020', category: 'Food', value: 200,
    },
    {
      id: 42, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 43, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 44, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 45, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
  ],
  page10: [
    {
      id: 46, date: '25.03.2020', category: 'Food', value: 200,
    },
    {
      id: 47, date: '20.03.2020', category: 'Food', value: 169,
    },
    {
      id: 48, date: '21.03.2020', category: 'Navigation', value: 50,
    },
    {
      id: 49, date: '22.03.2020', category: 'Sport', value: 450,
    },
    {
      id: 50, date: '23.03.2020', category: 'Entertaiment', value: 969,
    },
  ],
};

export default new Vuex.Store({
  state: {
    paymentList: [],
    paymentListIDs: [],
  },
  mutations: {
    SET_PAYMENTLIST_DATA(state, payload) {
      state.paymentList = payload;
    },
    ADD_PAYMENTLIST_DATA(state, payload) {
      const newUniqIDs = payload.filter((obj) => state.paymentListIDs.indexOf(obj.id) < 0);
      const uniqIDs = newUniqIDs.map((obj) => obj.id);

      state.paymentList.push(...newUniqIDs);
      state.paymentListIDs.push(...uniqIDs);

      // const newIDs = payload.map(obj => obj.id);
      // const uniqIDs = newIDs.filter(id => state.paymentListIDs.indexOf((id) < 0));
    },
  },
  getters: {
    getPaymentList: (state) => state.paymentList,
    getPaymentListFullPrice: (state) => state.paymentListIDs
      .reduce((res, cur) => res + cur.price, 0),
  },
  actions: {
    fetchData({ commit }, page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = LocalDB[`page${page}`];
          resolve(items);
        }, 100);
      })
        .then((res) => {
          commit('ADD_PAYMENTLIST_DATA', res);
        });
    },
  },
});
