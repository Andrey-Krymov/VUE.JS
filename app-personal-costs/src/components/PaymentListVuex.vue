<template>
  <div>
    <div
      :class="[$style.data_list]"
      v-for="(item, index) in currentElements"
      :key="index"
    >
      <ul class="data_date">
        <li>{{ item.num }}</li>
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
    n: 10,
  }),
  components: {
    PaginationVuex,
  },
  // props: {
  //   items: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
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
</style>
