<template>
  <div class="block">
    <div class="title" v-if="title">{{ title }}</div>
    <div class="page">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageBlock',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.block {
  @include flexColumn(stretch, stretch, 30px);

  .title {
    @include textTitle(50px);
  }
}
</style>