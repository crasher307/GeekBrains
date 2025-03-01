<template>
  <div>
    <div class="banner">
      <div class="image" v-if="this.background">
        <img :src="this.background" alt="Image">
      </div>
      <div class="info">
        <div class="title" v-if="title">{{ title }}</div>
        <div class="desc" v-if="desc" v-html="desc"></div>
        <div class="link">
          <div class="desc" v-if="date" v-html="date"></div>
          <div class="button" v-if="button" @click="submit()"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerBig',
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    date: {
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
  @include flexRow(stretch, stretch, 20px);
  flex-wrap: nowrap;
  border: 1px solid #E7E7E7;
  border-radius: 62px;
  padding: 20px;
  overflow: hidden;

  .image {
    position: relative;
    max-width: 570px;
    width: 100%;

    &:after {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      content: '';
    }
  }

  .info {
    @include flexColumn(start, center, 20px);
    padding: 30px 50px;

    .title {
      @include textTitle(25px);
    }

    .desc {
      @include textDesc(22px);
    }

    .link {
      @include flexRow(space-between, center);
      width: 100%;

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
  }
}
</style>