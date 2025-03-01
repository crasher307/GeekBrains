<template>
  <div class="block">
    <div class="image">
      <img :src="this.background" alt="Banner" v-if="this.background">
    </div>
    <div class="info" v-if="title || desc">
      <div class="title" v-if="title">{{ title }}</div>
      <div class="desc" v-if="desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBlock',
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    background: {
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
  position: relative;
  padding: 0;
  overflow: hidden;

  .image {
    @include flexColumn(center, center);
    width: 100%;
    height: 356px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .info {
    @include flexColumn(center, center);
    position: absolute;
    background: $color-clear;
    bottom: 0;
    padding: 40px 80px;
    border-radius: 37px 37px 0 0;

    .title {
      @include textTitle(50px);
    }

    .desc {
      @include textDesc(22px);
    }
  }
}
</style>