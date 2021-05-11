<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100px">
    <calculate msg="Vue.js" lesson :num='9-8'/>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import calculate from '@/components/calculate.vue';

export default {
  name: 'App',
  components: {
    calculate,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
