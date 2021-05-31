<template>
   <div>
      <payment-form-modal />
   </div>
</template>

<script>
import PaymentFormModal from '@/components/PaymentFormModal.vue';

export default {
  name: 'modalWindow',
  components: {
    PaymentFormModal,
  },
};
</script>
