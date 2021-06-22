<template>
  <div class="content">
    <header :class="[$style.header]">
      <h2>My personal costs</h2>
    <div id="nav" :class="[$style.dashboard]">
          <router-link  to="/lesson-5">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/food">Food</router-link>
          <router-link to="/transport">Transport</router-link>
          <router-link to="/entertainment">Entertainment</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/404">404</router-link>
        </div>
      </header>
      <!-- <completed-form /> -->
      <div class="input_form">
    <input type="date" placeholder="Payment Date" v-model="date" /><br />
    <select v-model="category">
      <option value="">Payment Description</option>
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select><br />
    <input placeholder="Payment Amount" v-model.number="value" /><br />
    <button :class="[$style.btn]" @click="save">ADD +</button>
  </div>
      <PaymentListVuex />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
// eslint-disable-next-line import/no-unresolved
import PaymentListVuex from '@/components/PaymentListVuex.vue';

export default {
  name: 'Transport',
  components: {
    PaymentListVuex,
  },
  data: () => ({
    date: '',
    category: 'Transport',
    value: '50',
    show: '',
    options: [
      'Food',
      'Sport',
      'Education',
      'Transport',
      'Navigation',
      'Entertaiment',
    ],
  }),
  props: {
    items: Array,
  },
  computed: {
    ...mapGetters(['getPaymentList']),
    localeDate() {
      return new Date(this.date).toLocaleDateString();
    },
  },
  methods: {
    ...mapMutations({
      mySetMutation: 'ADD_PAYMENTLIST_DATA',
    }),
    save() {
      const {
        id, date, category, value,
      } = this;
      this.mySetMutation([
        {
          id,
          date,
          category,
          value,
        },
      ]);
    },
  },
};
</script>

<style lang="scss" module>
.header {
  color: #2c3e50;
}

.dashboard {
  display: flex;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 20px;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
}
.btn {
  background: #42b983;
  color: #2c3e50;
  border: none;
  padding: 7px;
  font-weight: bold;
  cursor: pointer;
}
span {
  font-size: 18px;
  color: #42b983;
}
input {
  width: 176px;
  padding: 0 10px;
  margin: 10px 0;
  text-align: start;
}
select {
  width: 200px;
  padding: 2px 10px;
  outline: none;
}
</style>
