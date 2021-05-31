<template>
  <div class="app">
    <div class="about">
      <router-link to="/lesson-5">
        <button class="btnNav">◀</button>
      </router-link>

      <h3 class="headingLess">
        <a href="https://gb.ru/lessons/134355/homework" target="_blank"
          >Lesson 06</a
        >
      </h3>

      <router-link to="/">
        <button class="btnNav">▶</button>
      </router-link>
    </div>

    <app-plugins />
  </div>
</template>

<script>
import appPlugins from '@/block/appPlugins.vue';

export default {
  name: 'lesson-6',
  components: {
    appPlugins,
  },
};
</script>
