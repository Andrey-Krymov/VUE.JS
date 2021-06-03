<template>
  <div>
    <h3 :class="[$style.title]">
      Personal finance application <span>with addition Vue-Router</span>
    </h3>
    <div class="content">
      <header :class="[$style.header]">
        <h2>My personal costs</h2>
        <div id="nav" :class="[$style.dashboard]">
          <router-link to="/lesson-5">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/404">404</router-link>
        </div>
      </header>
      <main>
        <button :class="[$style.btn]" @click="show = !show">
          ADD NEW COST +
        </button>
        <div v-if="show">
          <PaymentFormVuex />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentFormVuex from '@/components/PaymentFormVuex.vue';

export default {
  name: 'appRouter',
  components: {
    PaymentFormVuex,
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
.dashboard {
  display: flex;
  justify-content: space-between;
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
</style>
