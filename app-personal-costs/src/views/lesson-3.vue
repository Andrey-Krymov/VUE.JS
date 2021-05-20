<template>
  <div class="app">
    <div class="about">
      <router-link to="/lesson-2">
        <button class="btnNav">◀</button>
      </router-link>

      <h3 class="headingLess">
        <a href="https://gb.ru/lessons/134351/homework" target="_blank"
          >Lesson 03</a
        >
      </h3>

      <router-link to="#">
        <button class="btnNav">▶</button>
      </router-link>
    </div>

    <app-home />
  </div>
</template>

<script>
import appHome from '@/block/appHome.vue';

export default {
  name: 'lesson-3',
  components: {
    appHome,
  },
};
</script>
