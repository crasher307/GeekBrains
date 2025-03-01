<template>
  <div class="container">
    <product-details v-for="(item, idx) in products" :key="idx" :product="item"/>
  </div>
</template>

<script>
import ProductDetails from "@/components/UI/ProductDetails.vue";

export default {
  name: 'PageHome',
  components: {
    ProductDetails,
  },
  data() {
    return {
      products: [
        {
          name: 'Test 1',
          price: 200.15,
          available: false,
        },
        {
          name: 'Test 2',
          price: 115,
          available: true,
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";
</style>