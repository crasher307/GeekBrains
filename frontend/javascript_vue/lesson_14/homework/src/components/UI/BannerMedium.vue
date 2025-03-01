<template>
  <div class="banner">
    <div class="image">
      <img :src="this.background" alt="Banner" v-if="this.background">
    </div>
    <div class="info">
      <div class="main">
        <div class="title" v-if="title">{{ title }}</div>
        <div class="desc" v-if="desc">{{ desc }}</div>
      </div>
      <div class="button" v-if="button" @click="submit()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerMedium',
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
  @include flexColumn(stretch, stretch, 25px);
  overflow: hidden;
  max-width: 525px;

  .image {
    @include flexColumn();
    position: relative;

    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      content: '';
    }
  }

  .info {
    @include flexRow(space-between, center, 10px);

    .main {
      @include flexColumn(start, center);

      .title {
        @include textTitle(25px);
      }

      .desc {
        @include textDesc(22px);
      }
    }

    .button {
      @include flexRow(center, center, 10px);
      width: 70px;
      height: 70px;
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
}
</style>