<template>
  <div>
    <!-- <payment-form-vuex v-if="shown === 'PaymentFormVuex'" /><br> -->
           <payment-form-vuex v-if="name === 'PaymentFormVuex'" /><br>
            <button :class="[$style.btn]" @click="closeModal">Close Modal Window</button>
  </div>
</template>

<script>
import PaymentFormVuex from '@/components/PaymentFormVuex.vue';

export default {
  name: 'PaymentFormModal',
  components: { PaymentFormVuex },
  props: {
    // modal: String,
    name: String,
  },
  data() {
    return {
      // shown: '',
    };
  },
  methods: {
    closeModal() {
      this.$modal.close();
    },
    // onShow({ name }) {
    //   this.shown = name;
    // },
    // closeModal() {
    //   this.shown = '';
    // },
  },
  // mounted() {
  //   this.$modal.EventBus.$on('show', this.onShow);
  //   this.$modal.EventBus.$on('close', this.onCloseModal);
  // },
};
</script>

<style lang="scss" module>
input {
  width: 176px;
  padding: 0 10px;
  margin: 10px 0;
  text-align: start;
}
select {
  width: 200px;
  padding: 2px 10px;
  outline: none;
}
  .btn {
  background: #42b983;
  color: #2c3e50;
  border: none;
  padding: 7px;
  font-weight: bold;
  cursor: pointer;
}
</style>
