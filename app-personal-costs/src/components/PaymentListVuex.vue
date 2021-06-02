<template>
  <div>
    <div
      :class="[$style.data_list]"
      v-for="(item, index) in currentElements"
      :key="index"
    >
      <ul :class="[$style.data_items]">
        <li>{{ item.id }}</li>
        <li>{{ item.date }}</li>
        <li>{{ item.category }}</li>
        <li>{{ item.value }}</li>
      </ul>
    </div>

    <PaginationVuex
      :length="50"
      :n="n"
      :cur="page"
      @paginate="onPaginate" />

    <!-- <PaginationVuex
      :length="getPaymentList.length"
      :n="n"
      :cur="page"
      @paginate="onPaginate"
    /> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PaginationVuex from '@/components/PaginationVuex.vue';

export default {
  name: 'PaymentListVuex',
  // props: {
  //   items: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
  data: () => ({
    page: 1,
    n: 5,
  }),
  components: {
    PaginationVuex,
  },

  methods: {
    ...mapActions({
      fetchListData: 'fetchData',
    }),

    onPaginate(p) {
      this.page = p;
      this.fetchListData(p);
    },
    // onDataAdded(data) {
    //   this.paymentList.push(data);
    // },
  },
  computed: {
    ...mapGetters(['getPaymentList']),

    currentElements() {
      const { n, page } = this;
      return this.getPaymentList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  mounted() {
    this.fetchListData(this.page);
  },
};
</script>

<style lang="scss" module>
.data_list, .data_items {
  display: flex;
  gap: 15px;
}

ul {
  list-style-type: none;
  padding: 0px 50px 0px 0px;
}
</style>
