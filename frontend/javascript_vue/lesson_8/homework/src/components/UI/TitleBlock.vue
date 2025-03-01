<template>
  <div class="block">
    <div class="title" v-if="title">{{ title }}</div>
    <div class="desc" v-if="desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: 'TitleBlock',
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.block {
  @include flexColumn(center, center, 10px);

  & > * {
    max-width: 800px;
    text-align: center;
  }

  .title {
    @include textTitle(50px);
  }

  .desc {
    @include textDesc(22px);
  }
}
</style>