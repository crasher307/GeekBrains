<template>
  <div class="item">
    <div class="image">
      <img :src="image" alt="Image">
    </div>
    <div class="data">
      <div class="info">
        <div class="title" v-if="title">{{ title }}</div>
        <div class="desc" v-if="desc">{{ desc }}</div>
      </div>
      <div class="button" @click="submit()" v-if="button"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageProjectItem',
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
    image: {
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

.item {
  @include flexColumn(space-between, stretch, 30px);

  .image {
    @include flexColumn();
    position: relative;

    img {
      width: 100%;
    }

    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      content: '';
    }
  }

  .data {
    @include flexRow(space-between, center);

    .info {
      .title {
        @include flexRow();
        @include textTitle(25px);
      }

      .desc {
        @include flexRow();
        @include textDesc(22px);
      }
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
</style>
