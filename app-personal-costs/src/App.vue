<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All Lessons</router-link>
      <div class="home">
        <img alt="Vue logo" src="../src/assets/logo.png" width="90px">
    </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background-color: #fff4f493;
}
.content {
  width: 1140px;
  padding: 10px 70px;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;

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
  .lessons {
    padding-bottom: 15px;
  }
}

.btnNav {
  color: #2c3e50;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: #42b983;
  }
}

.about {
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
}

.headingLess {
  padding: 0 12px;
}

.home {
  margin-top: 25px;
}
</style>
