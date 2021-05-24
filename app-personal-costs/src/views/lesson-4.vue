<template>
  <div class="app">
    <div class="about">
      <router-link to="/lesson-3">
        <button class="btnNav">◀</button>
      </router-link>

      <h3 class="headingLess">
        <a href="https://gb.ru/lessons/134353/homework" target="_blank"
          >Lesson 04</a
        >
      </h3>

      <router-link to="/">
        <button class="btnNav">▶</button>
      </router-link>
    </div>

    <app-vuex />
  </div>
</template>

<script>
import appVuex from '@/block/appVuex.vue';

export default {
  name: 'lesson-4',
  components: {
    appVuex,
  },
};
</script>
