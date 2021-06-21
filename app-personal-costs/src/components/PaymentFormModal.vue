<template>
  <div>
    <!-- <payment-form-vuex v-if="shown === 'PaymentFormVuex'" /><br> -->
   <payment-form-vuex v-if="name === 'PaymentFormVuex'"
   :id="settings && settings.id" /><br>
   <button :class="[$style.btn]" @click="closeModal">Close Modal Window</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PaymentFormVuex from './PaymentFormVuex.vue';

export default {
  name: 'PaymentFormModal',
  components: { PaymentFormVuex },
  props: {
    // modal: String,
    name: String,
    settings: Object,
    items: Array,
  },
  data() {
    return {
      date: '',
      category: '',
      value: '',
    };
  },
  methods: {
    closeModal() {
      this.$modal.close();
    },
  },
  computed: {
    ...mapGetters([
      'getPaymentList',
    ]),
  },
  mounted() {
    if (this.id) {
      const item = this.getPaymentList.find((p) => p.id === this.id);
      if (item) {
        this.date = item.date;
        this.category = item.category;
        this.value = item.value;
      }
    }
  },
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
