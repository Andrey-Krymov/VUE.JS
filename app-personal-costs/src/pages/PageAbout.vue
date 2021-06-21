<template>
   <div class="content">
     <header :class="[$style.header]">
       <h2>My personal costs</h2>
    <div id="nav" :class="[$style.dashboard]">
          <router-link to="/lesson-6">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/about">Chart</router-link>
          <router-link to="/404">404</router-link>
        </div>
      </header>
      <!-- <div class="chart">
        <canvas ref="canvas"></canvas>
      </div> -->
      <bar-chart :chart-data="chartData" :options="options"/>
      <PaymentListVuex v-if="show" />
   </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PaymentListVuex from '../components/PaymentListVuex.vue';
import BarChart from '../components/BarChart.vue';

export default {
  components: { PaymentListVuex, BarChart },
  name: 'Chart',
  data: () => ({
    page: 1,
    n: 5,
    show: false,
    chartData: {
      labels: ['Chart'],
      datasets: [
        {
          label: 'Data One',
          data: [40, 20, 12, 39, 10, 40, 39, 80],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
    methods: {
      ...mapActions({
        fetchListData: 'fetchData',
      }),
      onPaginate(p) {
        this.page = p;
        this.fetchListData(p);
      },
      setups() {},
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
  }),
};
</script>

<style lang="scss" module>
.header {
  color: #2c3e50;
}
.dashboard {
  display: flex;
  gap: 1em;
  margin-bottom: 20px;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
}
.btn {
  background: #42b983;
  color: #2c3e50;
  border: none;
  padding: 7px;
  font-weight: bold;
  cursor: pointer;
}
span {
  font-size: 18px;
  color: #42b983;
}
.data_list, .data_items {
  display: flex;
  gap: 15px;
}
ul {
  list-style-type: none;
  padding: 0px 50px 0px 0px;
}
</style>
