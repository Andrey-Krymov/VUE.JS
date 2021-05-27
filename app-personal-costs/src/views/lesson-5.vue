<template>
  <div class="app">
    <div class="about">
      <router-link to="/lesson-4">
        <button class="btnNav">◀</button>
      </router-link>

      <h3 class="headingLess">
        <a href="https://gb.ru/lessons/134354/homework" target="_blank"
          >Lesson 05</a
        >
      </h3>

      <router-link to="/">
        <button class="btnNav">▶</button>
      </router-link>
    </div>

    <app-router />
  </div>
</template>

<script>
import appRouter from '@/block/appRouter.vue';

export default {
  name: 'lesson-5',
  components: {
    appRouter,
  },
};
</script>
