<template>
    <div class="input_form">
      <input placeholder="Payment Date" v-model="date" /><br />
      <select v-model="category">
        <option disabled value="">Payment Description</option>
        <option v-for="option in options" :key="option">
          {{ option }}
        </option></select
      ><br />
      <input placeholder="Payment Amount" v-model.number="value" /><br />
      <button :class="[$style.btn]" @click="save">ADD +</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PaymentFormVuex',
  data: () => ({
    date: '',
    category: '',
    value: '',
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
    id: Number,
    items: Array,
  },
  computed: {
    ...mapGetters([
      'getPaymentList',
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_PAYMENTLIST_DATA',
      'ADD_NEW_PAYMENT',
      'UPDATE_PAYMENT',
    ]),
    save() {
      const {
        id, date, category, value,
      } = this;
      const payload = {
        id, date, category, value,
      };
      if (this.id) {
        payload.id = this.id;
        this.UPDATE_PAYMENT(payload);
      } else {
        this.ADD_NEW_PAYMENT(payload);
      }
    },
    // save() {
    //   const {
    //     id, date, category, value,
    //   } = this;
    // this.ADD_PAYMENTLIST_DATA([
    //   {
    //     id,
    //     date,
    //     category,
    //     value,
    //   },
    // ]);
    // },
  },
  mounted() {
    if (this.id) {
      const item = this.getPaymentList.find((p) => p.id === this.id);
      if (item) {
        this.date = item.date;
        this.category = item.category;
        this.value = item.value;
      }
    }
  },
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
