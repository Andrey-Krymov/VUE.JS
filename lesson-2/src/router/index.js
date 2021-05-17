import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/lesson-1',
    name: 'lesson-1',
    component: () => import('@/views/lesson-1.vue'),
  },
  {
    path: '/lesson-2',
    name: 'lesson-2',
    component: () => import('@/views/lesson-2.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
