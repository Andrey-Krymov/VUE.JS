<template>
  <div class="content">

    <header :class="[$style.header]">
      <h2>My personal costs</h2>
      <div id="nav" :class="[$style.dashboard]">
        <router-link to="/lesson-7">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/test">Test</router-link>
        <router-link to="/404">404</router-link>
      </div>
      <button :class="[$style.btn]" @click="openModal">Open Modal Window</button>
      <button :class="[$style.btnCross]" @click="closeModal">×</button>
    </header>
      <PaymentFormModal v-if="modalShown" :name="modalShown" modal='PaymentFormVuex' />
      <PaymentListVuex />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import PaymentFormModal from '@/components/PaymentFormModal.vue';
import PaymentListVuex from '@/components/PaymentListVuex.vue';

export default {
  name: 'PageDashboard',
  components: {
    PaymentFormModal: () => import('@/components/PaymentFormModal.vue'),
    PaymentListVuex,
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

  mounted() {
    this.fetchData();

    this.$modal.EventBus.$on('show', this.onShown);
    this.$modal.EventBus.$on('close', this.onClose);

    // this.$modal.EventBus.$on('close', name => (this.modalShown = name));
    // this.$modal.EventBus.$on('close', name => (this.modalShown = name));
  },
  beforeDestroy() {
    this.$modal.EventBus.$off('show', this.onShown);
    this.$modal.EventBus.$off('close', this.onClose);
  },
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
.btnCross {
  background: #2c3e50;
  color: #42b983;
  border: none;
  padding: 7px 9px;
  font-weight: bold;
  cursor: pointer;
}
span {
  font-size: 18px;
  color: #42b983;
}

// :global(.fade-enter-active), :global(.fade-leave-active) {
//   transition: opacity 1s;
// }
// :global(.fade-enter), :global(.fade-leave-to) {
//   opacity: 0;
// }

</style>
