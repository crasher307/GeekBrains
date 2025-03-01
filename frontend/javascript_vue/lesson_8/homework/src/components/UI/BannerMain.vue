<template>
  <div class="banner" ref="banner">
    <img :src="this.background" alt="Banner" v-if="this.background">
    <div class="info">
      <div class="title" v-if="title">{{ title }}</div>
      <div class="desc" v-if="desc">{{ desc }}</div>
      <div class="button" v-if="button" @click="submit()">{{ button }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerMain',
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    button: {
      type: String,
      default: '',
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
  mounted() {
    if (!this.background) {
      this.$refs.banner.style.minHeight = '700px';
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.banner {
  @include flexColumn();
  position: relative;
  overflow: hidden;

  .info {
    @include flexColumn(start, center, 20px);
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 50px;
    text-align: left;

    & > * {
      max-width: 434px;
    }

    .title {
      @include textTitle(65px);
    }

    .desc {
      @include textDesc(22px);
    }

    .button {
      @include flexRow(center, center, 10px);
      @include textDesc(18px, 600);
      padding: 26px 48px;
      border-radius: 18px;
      box-shadow: 0 10px 20px 0 #C0C0C059;
      background: $color-main;
      color: $color-clear;
      cursor: pointer;

      &:after {
        background: url('@/assets/icons/ArrowFull.svg') no-repeat center;
        height: 1em;
        width: 1em;
        content: '';
      }
    }
  }
}
</style>