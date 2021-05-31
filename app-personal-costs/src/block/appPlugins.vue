<template>
  <div>
    <h3 :class="[$style.title]">
      Personal finance application <span>with addition Plagin ModalWindow</span>
    </h3>
    <div class="content">
      <header :class="[$style.header]">
        <h2>My personal costs</h2>
        <div id="nav" :class="[$style.dashboard]">
          <router-link to="/lesson-6">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/404">404</router-link>
        </div>
      </header>
      <main>
        <button :class="[$style.btn]" @click="openModal">
          ADD NEW COST +
        </button>
        <div :class="[$style.wrapper]">
          <div :class="[$style.overlay]">
          <div :class="[$style.contentForm]">
        <transition name="fade">
         <PaymentFormModal v-if="modalShown" :name="modalShown" />
        </transition>
          </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'appPlugins',

  components: {
    PaymentFormModal: () => import('@/components/PaymentFormModal.vue'),
  },
  data() {
    return {
      modalShown: false,
    };
  },

  methods: {
    ...mapActions(['fetchData']),

    openModal() {
      this.$modal.show('PaymentFormVuex');
    },
    closeModal() {
      this.$modal.close();
    },

    onShown({ name }) {
      this.modalShown = name;
    },
    onClose() {
      this.modalShown = '';
    },
  },
  // mounted() {
  //   console.log(this.$modal);
  //   this.$modal.show();
  //   this.$modal.close();
  // },
  mounted() {
    this.fetchData();
    console.log(this.$correction);

    this.$modal.EventBus.$on('show', this.onShown);
    this.$modal.EventBus.$on('close', this.onClose);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off('show', this.onShown);
    this.$modal.EventBus.$off('close', this.onClose);
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" module>
.header {
  color: #2c3e50;
}
.wrapper {
  position: absolute;
  width: 100%;
  height: 100vh;
}
.overlay {
  position: relative;
  z-index: 0;
  margin-left: -70px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(50,50,50,0.8);
}
.contentForm {
  z-index: 100;
  margin-left: 70px;
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
