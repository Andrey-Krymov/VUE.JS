<template>
  <div>
    <h3 :class="[$style.title]">Personal finance application</h3>
    <div class="content">
      <header :class="[$style.header]">
        <h2>My personal costs</h2>
      </header>
      <main>
        <button @click="show = !show">ADD NEW COST +</button>
        <div v-if="show" class="formTemplate">
        <PaymentForm @add="onDataAdded" />
        <PaymentList :items="paymentList" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentList from '@/components/PaymentList.vue';
import PaymentForm from '@/components/PaymentForm.vue';

export default {
  name: 'appHome',
  components: {
    PaymentList,
    PaymentForm,
  },

  data: () => ({
    paymentList: [
      {
        date: '20.05.2021',
        category: 'Education',
        price: 123,
      },
      {
        date: '21.05.2021',
        category: 'Education',
        price: 456,
      },
      {
        date: '22.05.2021',
        category: 'Education',
        price: 789,
      },
      {
        date: '23.05.2021',
        category: 'Education',
        price: 0,
      },
    ],
    show: '',
  }),
  methods: {
    onDataAdded(data) {
      this.paymentList.push(data);
    },
  },
};
</script>

<style lang="scss" module>
.header {
  color: #2c3e50;
}
</style>
