<template>
  <div>
    <div
      :class="[$style.data_list]"
      v-for="(item, index) in currentElements"
      :key="index"
    >
      <ul class="data_date">
        <li>{{ item.id }}</li>
      </ul>
      <ul class="data_date">
        <li>{{ item.date }}</li>
      </ul>
      <ul class="data_category">
        <li>{{ item.category }}</li>
      </ul>
      <ul class="data_price">
        <li>{{ item.price }}</li>
      </ul>
      <select v-model="category">
        <option disabled value="">{{ item.edit }}</option>
        <option v-for="correction in corrections" :key="correction">
          {{ correction }}
        </option>
      </select>

        <CorrectionForm />
    </div>

    <PaginationVuex
      :length="getPaymentList.length"
      :n="n"
      :cur="page"
      @paginate="onPaginate"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PaginationVuex from '@/components/PaginationVuex.vue';

export default {
  name: 'PaymentListVuex',
  data: () => ({
    page: 1,
    n: 5,
    category: '',
    corrections: [
      'Edit',
      'Delit',
    ],
  }),
  components: {
    PaginationVuex,
    CorrectionForm: () => import('@/components/CorrectionForm.vue'),
  },
  methods: {
    onPaginate(p) {
      this.page = p;
    },
  },
  computed: {
    ...mapGetters(['getPaymentList']),

    currentElements() {
      const { n, page } = this;
      return this.getPaymentList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
};
</script>

<style lang="scss" module>
.data_list {
  display: flex;
}
ul {
  list-style-type: none;
  padding: 0px 50px 0px 0px;
}
select {
  border: none;
  outline: none;
  padding: 0px;
}
</style>
