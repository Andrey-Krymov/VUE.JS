<template>
  <div>
    <h3 :class="[$style.title]">
      Personal finance application <span>with addition Vuex</span>
    </h3>
    <div class="content">
      <header :class="[$style.header]">
        <h2>My personal costs</h2>
      </header>
      <main>
        <button :class="[$style.btn]" @click="show = !show">
          ADD NEW COST +
        </button>
        <div v-if="show" class="formTemplate">
          <PaymentFormVuex />
          <PaymentListVuex />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentListVuex from '@/components/PaymentListVuex.vue';
import PaymentFormVuex from '@/components/PaymentFormVuex.vue';

import { mapActions } from 'vuex';

export default {
  name: 'appVuex',
  components: {
    PaymentFormVuex,
    PaymentListVuex,
  },

  data() {
    return {
      show: '',
    };
  },

  methods: {
    ...mapActions(['fetchData']),

    // onDataAdded(data) {
    //   this.paymentList.push(data);
    // },
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
.btn {
  background: #42b983;
}
span {
  font-size: 18px;
  color: #42b983;
}
</style>
