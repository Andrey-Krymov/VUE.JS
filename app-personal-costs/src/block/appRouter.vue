<template>
  <div>
    <h3 :class="[$style.title]">
      Personal finance application <span>with addition Vue-Router</span>
    </h3>
    <div class="content">
      <header :class="[$style.header]">
        <h2>My personal costs</h2>
        <div id="nav" :class="[$style.dashboard]">
          <router-link to="/lesson-5">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/404">404</router-link>

          <!-- <a href="#dashboard">Dashboard</a>
          <a href="#about">About</a>
          <a href="#404">404</a> -->

          <!-- <a href="/dashboard">Dashboard</a>
          <a href="/about">About</a>
          <a href="/404">404</a> -->
        </div>
      </header>
      <main>
        <button :class="[$style.btn]" @click="show = !show">
          ADD NEW COST +
        </button>
        <!-- <div v-if="show" class="formTemplate">
          <PageDashboard v-if="page === 'dashboard'" />
          <PageAbout v-if="page === 'about'" />
          <Page404 v-if="page === '404'" />
        </div> -->
      </main>
    </div>
  </div>
</template>

<script>
// import PageDashboard from '@/pages/PageDashboard.vue';
// import PageAbout from '@/pages/PageAbout.vue';
// import Page404 from '@/pages/Page404.vue';

export default {
  name: 'appRouter',
  // components: {
  //   PageDashboard,
  //   PageAbout,
  //   Page404,
  // },

  data() {
    return {
      // show: '',
      // page: 'dashboard',
    };
  },

  // mounted() {
  //   this.$router.push({ name: 'Not Found' });
  // },

  // HASHED URL
  // methods: {
  //   setPage() {
  //     this.page = location.hash.slice(1);
  //   },
  // },

  // mounted() {
  //   this.setPage();
  //   window.addEventListener('hashchange', () => {
  //     this.setPage();
  //   });
  // },

  // ORDINARY URL
  // methods: {
  //   setPage() {
  //     this.page = location.pathname.slice(1);
  //   },
  // },

  // mounted() {
  //   this.setPage();
  //   const links = document.querySelectorAll('a');
  //   links.forEach((link) => {
  //     link.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       history.pushState({}, '', link.href);
  //       this.setPage();
  //     });
  //   });
  //   window.addEventListener('popstate', this.setPage);
  // },
};
</script>

<style lang="scss" module>
.header {
  color: #2c3e50;
}
.dashboard {
  display: flex;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 20px;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
}
.btn {
  background: #42b983;
  color: #2c3e50;
  border: none;
  padding: 7px;
  font-weight: bold;
  cursor: pointer;
}
span {
  font-size: 18px;
  color: #42b983;
}
</style>
