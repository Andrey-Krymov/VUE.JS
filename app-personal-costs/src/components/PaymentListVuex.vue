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
        <li :class="[$style.correct]"
        @click="showContext($event, item.id)"
        > ... </li>
      </ul>
    </div>

    <PaginationVuex
      :length="50"
      :n="n"
      :cur="page"
      @paginate="onPaginate" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PaginationVuex from './PaginationVuex.vue';

export default {
  name: 'PaymentListVuex',
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
    ...mapMutations([
      'DELITE_ITEMS',
    ]),
    onPaginate(p) {
      this.page = p;
      this.fetchListData(p);
    },
    showContext(event, id) {
      const items = [
        { text: 'Delite', action: () => { this.DELITE_ITEMS(id); } },
        { text: 'Edit', action: () => { this.$modal.show('PaymentFormVuex', { id }); } },
      ];
      this.$correction.show({ event, items });
      console.log(id);
    },
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
.correct {
  cursor: pointer;
}
</style>
