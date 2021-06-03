<template>
  <div class="content">
    <div :class="[$style.dashboard]">
      <router-link to="/lesson-7">◀ Home</router-link>
    </div>
    <h2>page 404</h2>
  </div>
</template>

<script>
export default {
  name: 'page404',
};
</script>

<style lang='scss' module>
.dashboard {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #42b983;

    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
}
</style>
