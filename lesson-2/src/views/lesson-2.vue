<template>
<div class="app">
    <div class="about">
    <router-link to="/lesson-1">
    <button class="btnNav">◀</button>
    </router-link>

    <h3 class="headingLess"> <a href="https://gb.ru/lessons/134351/homework" target="_blank">Lesson 02</a></h3>

    <router-link to="/lesson-1">
    <button class="btnNav">▶</button>
    </router-link>
    </div>

    <upCalculate />
  </div>
</template>

<script>

import upCalculate from '../components/upCalculate.vue';

export default {
  name: 'lesson-2',
  components: {
    upCalculate,
  },
};
</script>
