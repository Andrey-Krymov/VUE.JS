<template>
   <div class="content">
     <header :class="[$style.header]">
       <h2>My personal costs</h2>
    <div id="nav" :class="[$style.dashboard]">
          <router-link to="/lesson-7">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/test">Test</router-link>
          <router-link to="/404">404</router-link>
        </div>
      <h2>Page Test</h2>
      </header>
   </div>

</template>

<script>

export default {
  name: 'pageAbout',
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
</style>
