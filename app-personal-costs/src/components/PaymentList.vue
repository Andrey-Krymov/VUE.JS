<template>
  <div>
    <div
      :class="[$style.data_list]"
      v-for="(item, index) in items.slice(n * (page - 1), n * (page - 1) + n)"
      :key="index"
    >
      <!-- <ul class="data_number">
          <li>{{ items.length++ }}</li>
        </ul> -->
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

    <Pagination
    :length="items.length" :n="n"
    :cur="page"
    @paginate="onPaginate" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'PaymentList',
  components: {
    Pagination,
  },
  props: {
    items: {
      type: Array,
      // default: () => [],
    },
  },
  data: () => ({
    page: 1,
    n: 3,
  }),
  methods: {
    onPaginate(p) {
      this.page = p;
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
