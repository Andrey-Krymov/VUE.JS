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
  {
    path: '/lesson-3',
    name: 'lesson-3',
    component: () => import('@/views/lesson-3.vue'),
  },
  {
    path: '/lesson-4',
    name: 'lesson-4',
    component: () => import('@/views/lesson-4.vue'),
  },
  {
    path: '/lesson-5',
    name: 'lesson-5',
    component: () => import('@/views/lesson-5.vue'),
  },
  {
    path: '/lesson-6',
    name: 'lesson-6',
    component: () => import('@/views/lesson-6.vue'),
  },
  {
    path: '/lesson-7',
    name: 'lesson-7',
    component: () => import('@/views/lesson-7.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/PageDashboard.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/PageAbout.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/pages/PageTest.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/pages/Page404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
