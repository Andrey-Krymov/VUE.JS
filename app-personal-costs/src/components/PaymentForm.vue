<template>
   <div class="formTemplate">
      <div class="input_form">
        <input placeholder="Payment Date" v-model="date"/><br>
        <input placeholder="Payment Description" v-model="category"/><br>
        <input placeholder="Payment Amount" v-model.number="price"/><br>
        <button @click="save">ADD +</button>
      </div>
   </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  data: () => ({
    date: '',
    category: '',
    price: '',
    show: '',
  }),
  methods: {
    save() {
      const { date, category, price } = this;
      this.$emit('add', { date, category, price });
    },
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
</style>
