<template>
  <div>
      <input placeholder="Payment Date" v-model="date" />
      <select v-model="category">
        <option disabled value="">Payment Description</option>
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
        </select>
      <input placeholder="Payment Amount" v-model.number="value" />
      <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="teal lighten-2"
      @click="loader = 'loading2', save"
    >
      Custom Loader
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
      <button @click="save">ADD +</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PaymentForm',
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
    loader: null,
    loading: false,
    loading2: false,
  }),
  props: {
    items: Array,
  },
  computed: {
    ...mapGetters(['getPaymentList']),
  },
  methods: {
    save() {
      const {
        id, date, category, value,
      } = this;
      this.getPaymentList.push({
        id,
        date,
        category,
        value,
      });
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      // eslint-disable-next-line no-return-assign
      setTimeout(() => (this[l] = false), 1000);

      this.loader = null;
    },
  },
};
</script>
