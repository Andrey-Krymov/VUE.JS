<template>
  <!-- <div>
    <div
      v-for="(item, index) in currentElements"
      :key="index"
    >
      <ul>
        <li>{{ item.id }}</li>
        <li>{{ item.date }}</li>
        <li>{{ item.category }}</li>
        <li>{{ item.value }}</li>
      </ul>
    </div>
  </div> -->
  <v-data-table
    :headers="headers"
    :items="addIndex"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PaymentList',
  data: () => ({
    headers: [
      { text: '#', value: 'index' },
      { text: 'Date', value: 'date' },
      { text: 'Category', value: 'category' },
      { text: 'Value', value: 'value' },
    ],
    page: 1,
    n: 5,
  }),
  components: {
  },
  methods: {
    ...mapActions({
      fetchListData: 'fetchData',
    }),
  },
  computed: {
    ...mapGetters(['getPaymentList']),

    addIndex() {
      return this.getPaymentList.map((obj, i) => {
        // eslint-disable-next-line no-param-reassign
        obj.index = i + 1;
        return obj;
      });
    },
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
