<template>
  <div class="banner" ref="banner">
    <div class="image">
      <div class="tag" v-if="tag">{{ tag }}</div>
      <img :src="this.background" alt="Banner" v-if="this.background">
    </div>
    <div class="title" v-if="title">{{ title }}</div>
    <div class="info">
      <div class="desc" v-if="desc">{{ desc }}</div>
      <div class="button" ref="button" v-if="button" @click="submit()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerSmall',
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: '',
    },
    button: {
      type: Boolean,
      default: true,
    },
    background: {
      type: String,
      default: '',
    },
  },
  methods: {
    submit() {
      this.$emit('click');
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.banner {
  @include flexColumn(stretch, stretch, 20px);
  max-width: 382px;
  border: 1px solid #E7E7E7;
  border-radius: 62px;
  padding: 20px;
  overflow: hidden;

  .image {
    @include flexColumn(stretch, stretch, 20px);
    position: relative;
    border-radius: 48px 48px 0 0;
    overflow: hidden;

    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      content: '';
    }

    .tag {
      @include textDesc(16px);
      text-transform: capitalize;
      position: absolute;
      left: 20px;
      bottom: 20px;
      border-radius: 8px 8px 8px 0;
      background: $color-clear;
      padding: 10px 15px;
    }
  }

  .title {
    @include textTitle(25px);
  }

  .info {
    @include flexRow(space-between, center, 10px);

    .desc {
      @include textDesc(16px);
      text-transform: capitalize;
    }

    .button {
      @include flexRow(center, center, 10px);
      width: 52px;
      height: 52px;
      background: $color-third;
      border-radius: 50%;
      cursor: pointer;

      &:after {
        background: url('@/assets/icons/Arrow.svg') no-repeat center;
        height: 1em;
        width: 1em;
        content: '';
      }
    }
  }

  &.dark {
    background: $color-third;

    .button {
      background: $color-clear;
    }
  }
}
</style>