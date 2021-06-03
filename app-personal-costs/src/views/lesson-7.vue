<template>
  <div class="app">
    <div class="about">
      <router-link to="/lesson-6">
        <button class="btnNav">◀</button>
      </router-link>

      <h3 class="headingLess">
        <a href="https://gb.ru/lessons/134356/homework" target="_blank"
          >Lesson 07</a
        >
      </h3>

      <router-link to="/">
        <button class="btnNav">▶</button>
      </router-link>
    </div>
    <app-test />
  </div>
</template>

<script>
import appTest from '@/block/appTest.vue';

export default {
  name: 'lesson-7',
  components: {
    appTest,
  },
};
</script>
