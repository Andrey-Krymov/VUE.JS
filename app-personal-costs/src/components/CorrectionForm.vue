<template>
   <div>
      <button @click="openEdit">...</button>

      <select v-if="modalShown" :name="modalShown" v-model="category">
        <option disabled value="">{{ item.edit }}</option>
        <option v-for="correction in corrections" :key="correction">
          {{ correction }}
        </option>
        </select>
   </div>
</template>

<script>
export default {
  name: 'CorrectionForm',
  components: {
  },
  props: {
    correction: String,
  },
  data: () => ({
    modalShown: false,
    category: '',
    corrections: [
      'Edit',
      'Delit',
    ],
  }),

  methods: {
    openEdit() {
      this.$correction.show('PaymentListVuex');
    },
    closeEdit() {
      this.$correction.close();
    },

    onShown({ name }) {
      this.modalShown = name;
    },
    onClose() {
      this.modalShown = '';
    },
  },

  mounted() {
    console.log(this.$correction);

    this.$correction.EventBus.$on('show', this.onShown);
    this.$correction.EventBus.$on('close', this.onClose);
  },
  beforeDestroy() {
    this.$correction.EventBus.$off('show', this.onShown);
    this.$correction.EventBus.$off('close', this.onClose);
  },
};
</script>
