<template>
  <div class="item">
    <div class="image" v-if="data.image">
      <img :src="data.image" alt="Image">
    </div>
    <div class="data">
      <div class="info">
        <div class="title" v-if="data.title">{{ data.title }}</div>
        <div class="desc" v-if="data.desc">{{ data.desc }}</div>
      </div>
      <div class="button" @click="openProject(data)"></div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'PageProjectItem',
  props: {
    data: {
      type: Object,
      default: () => ({
        category: 'Category Name',
        image: '/images/project/Image-1.png',
        title: 'Test title',
        desc: 'Group / Category',
        data: [
          'Test description 1',
          'Test description 2',
        ],
        images: [
          '/images/projectView/Image.png',
          '/images/projectView/Image.png',
          '/images/projectView/Image.png',
        ],
      }),
    },
  },
  methods: {
    ...mapActions(["openProject"]),
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
