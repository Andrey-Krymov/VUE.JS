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
        <div v-if="show">
          <PaymentFormVuex />
        </div>
        <PaymentListVuex />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentListVuex from '@/components/PaymentListVuex.vue';
import PaymentFormVuex from '@/components/PaymentFormVuex.vue';

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
