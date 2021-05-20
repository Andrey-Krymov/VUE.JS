<template>
  <div>
      <div
        :class="[$style.data_list]"
        v-for="(item, index) in items"
        :key="index"
      >
        <!-- <ul class="data_number">
          <li>{{ items.length++ }}</li>
        </ul> -->
        <ul class="data_date">
          <li>{{ item.date }}</li>
        </ul>
        <ul class="data_category">
          <li>{{ item.category }}</li>
        </ul>
        <ul class="data_price">
          <li>{{ item.price }}</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      // default: () => [],
    },
  },
  data: () => ({
  }),
};
</script>

<style lang="scss" module>
.data_list {
  display: flex;
}

ul {
  list-style-type: none;
  padding: 0px 100px 0px 0px;
}
</style>
