<template>
   <div v-if="shown"
   :class="[$style.correct]"
   :style="styles">
     <div v-for="item in items"
     :key="item.text"
     :class="[$style.correct_item]"
     @click="onClick(item)"
     >
       {{ item.text }}
     </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0,
    };
  },
  methods: {
    onShown({ items, caller }) {
      this.shown = true;
      this.items = items;

      this.setPosition(caller);
    },
    setPosition(caller) {
      const computed = caller.getBoundingClientRect();
      this.xPos = computed.left;
      this.yPos = computed.top;
    },

    onClose() {
      this.shown = false;
      this.items = [];
    },
    onClick(item) {
      item.action();
      this.onClose();
    },
  },
  mounted() {
    this.$correction.EventBus.$on('show', this.onShown);
    this.$correction.EventBus.$on('close', this.onClose);
  },
  beforeDestroy() {
    this.$correction.EventBus.$off('show', this.onShown);
    this.$correction.EventBus.$off('close', this.onClose);
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos}px`,
        left: `${this.xPos + 15}px`,
      };
    },
  },
};
</script>

<style lang="scss" module>
.correct {
  background:#42b983;
  position: absolute;
}
.correct_item {
  cursor: pointer;
}
</style>
