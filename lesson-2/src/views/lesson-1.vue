<template>
  <div class="app">
    <div class="about">
    <router-link to="/">
    <button class="btnNav">◀</button>
    </router-link>

    <h3 class="headingLess"> <a href="https://gb.ru/lessons/134350/homework" target="_blank">Lesson 01</a></h3>

    <router-link to="/lesson-2">
    <button class="btnNav">▶</button>
    </router-link>
    </div>

    <calculate />
  </div>
</template>

<script>

import calculate from '../components/calculate.vue';

export default {
  name: 'lesson-1',
  components: {
    calculate,
  },
};
</script>
