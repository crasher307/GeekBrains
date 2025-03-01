<template>
  <div class="container">
    <header-block class="header-block" title="Error 404" desc="Page not found" background="/images/blog/Header.png"/>
  </div>
</template>

<script>
import HeaderBlock from "@/components/UI/HeaderBlock.vue";

export default {
  name: 'PageBlog',
  components: {
    HeaderBlock,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.container {
  gap: 150px;
}

.header-block, .news-block {
  margin-bottom: 50px;
}

.news {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
}

.pages {
  @include flexRow(center, center, 20px);
  margin-top: 50px;

  .page {
    @include flexRow(center, center);
    @include textDesc(16px, 500);
    border-radius: 50%;
    border: 1px solid $color-fourth;
    width: 52px;
    height: 52px;
    overflow: hidden;
    cursor: pointer;

    &.active {
      background: $color-third;
      border-color: $color-third;
    }

    &.prev:before,
    &.next:before {
      @include flexRow(center, center);
      background: url('@/assets/icons/Arrow.svg') no-repeat center;
      width: 100%;
      height: 100%;
      content: '';
    }

    &.prev:before {
      transform: rotate(180deg);
    }
  }
}
</style>
