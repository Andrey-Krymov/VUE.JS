<template>
  <div :class="[$style.wrap]">
    <div @click="onClick(cur - 1)">◀</div>
    <div
      v-for="i in amount"
      :key="i"
      :class="{ [$style.active]: cur === i }"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">▶</div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit('paginate', p);
    },
  },
};
</script>

<style lang="scss" module>
.wrap {
  display: flex;
  & > div {
    padding: 10px;
    &:hover {
       color: #42b983;
    }
    &.active {
      background: #42b983;
    }
  }
  cursor: pointer;
}
</style>
