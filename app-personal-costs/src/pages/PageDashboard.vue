<template>
  <div class="content">
    <header :class="[$style.header]">
      <h2>My personal costs</h2>
    <div :class="[$style.dashboard]">
          <router-link  to="/lesson-5">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/404">404</router-link>
        </div>
      </header>
    <PaymentFormVuex />
    <PaymentListVuex />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import PaymentFormVuex from '@/components/PaymentFormVuex.vue';
import PaymentListVuex from '@/components/PaymentListVuex.vue';

export default {
  name: 'PageDashboard',
  components: {
    PaymentFormVuex,
    PaymentListVuex,
  },

  methods: {
    ...mapActions(['fetchData']),
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" module>
.header {
  color: #2c3e50;
}
.dashboard {
  display: flex;
  justify-content: space-between;
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
</style>
