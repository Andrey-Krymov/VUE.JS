<template>
  <div>
    <homePage />
    <ul id="nav">
      <li>
        <router-link to="/lesson-1">Lesson 01</router-link>
      </li>
      <li>
        <router-link to="/lesson-2">Lesson 02</router-link>
      </li>
      <li>
        <router-link to="/lesson-3">Lesson 03</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import homePage from '@/block/homePage.vue';

export default {
  name: 'Home',
  components: {
    homePage,
  },
};
</script>

<style scoped lang="scss">
#nav {
  display: flex;
  flex-direction: column;
}
li {
  padding-bottom: 20px;
}
ul {
  list-style-type: none;
}
</style>
