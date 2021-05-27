<template>
    <div class="input_form">
      <input placeholder="Payment Date" v-model="date" /><br />
      <input placeholder="Payment Description" v-model="category" /><br />
      <input placeholder="Payment Amount" v-model.number="price" /><br />
      <button :class="[$style.btn]" @click="save">ADD +</button>
    </div>
</template>

<script>
// import { mapMutations, mapGetters } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'PaymentFormVuex',
  data: () => ({
    date: '',
    category: '',
    price: '',
    show: '',
  }),
  props: {
    items: Array,
  },
  computed: {
    ...mapGetters(['getPaymentList']),
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
        id, date, category, price,
      });
    },
  },
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
  width: 150px;
  padding: 0 10px;
  margin: 10px 0;
  text-align: start;
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
