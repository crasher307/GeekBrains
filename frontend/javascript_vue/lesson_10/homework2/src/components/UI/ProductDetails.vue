<template>
  <div>
    <div class="block">
      <div class="title">{{ name }}</div>
      <div class="price">{{ price }}</div>
      <div class="available">{{ available }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      default: () => ({
        name: '',
        price: 0.0,
        available: false,
      }),
    },
  },
  computed: {
    name() {
      return this.product.name ?? 'Без имени';
    },
    price() {
      return `$${Number.parseFloat(this.product.price) || 0}`;
    },
    available() {
      return this.product.available ? 'Available' : 'Out of stock';
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.block {
  @include flexColumn(start, center, 10px);
  border: 1px solid $color-second;
  //
  //& > * {
  //  max-width: 800px;
  //  text-align: center;
  //}
  //
  //.title {
  //  @include textTitle(50px);
  //}
  //
  //.desc {
  //  @include textDesc(22px);
  //}
}
</style>