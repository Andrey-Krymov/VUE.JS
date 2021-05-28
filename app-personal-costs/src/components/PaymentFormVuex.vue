<template>
  <div class="input_form">
    <input type="date" placeholder="Payment Date" v-model="date" /><br />
    <select v-model="category">
      <option disabled value="">Payment Description</option>
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select><br />
    <input placeholder="Payment Amount" v-model.number="price" /><br />
    <button :class="[$style.btn]" @click="save">{{ localeDate }}</button>
  </div>
</template>

<script>
// import { mapMutations, mapGetters } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'PaymentFormVuex',

  data: () => ({
    date: null,
    category: '',
    price: '',
    show: '',
    options: [
      'Education',
      'Food',
      'Transport',
    ],
    completedForm: {},
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
    // ...mapMutations(['SET_PAYMENTLIST_DATA']),

    // ...mapMutations({
    //   mySetMutation: 'SET_PAYMENTLIST_DATA',
    // }),

    save() {
      const {
        id, date, category, price,
      } = this;
      this.getPaymentList.push({
        id,
        date,
        category,
        price,
      });
    },
  },

  // created() {
  //   const newLocal = (this.date = Date.now());
  //   this.intervalId = setInterval(() => newLocal, 1000);
  // },
  // mounted() {
  //   this.SET_PAYMENTLIST_DATA(this.fetchData());
  //   console.log(this.$store.state);
  //   console.log(this.$store.getters.getPaymentList);
  //   console.log(this.getPaymentListFullPrice);
  // },

  // mounted() {
  //   this.$store.commit('setPaymentListData', this.fetchData());
  // },
};
</script>

<style lang="scss" module>
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
.btn {
  background: #42b983;
  color: #2c3e50;
  border: none;
  padding: 7px;
  font-weight: bold;
  cursor: pointer;
}
</style>
