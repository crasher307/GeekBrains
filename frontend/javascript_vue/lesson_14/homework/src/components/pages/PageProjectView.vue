<template>
  <div class="container">
    <header-block class="header-block" background="/images/projectView/Header.png"/>
    <div class="page-block">
      <div class="info">
        <div class="title">{{ title }}</div>
        <div class="desc">
          <p v-for="(item, idx) in desc" :key="idx">{{ item }}</p>
        </div>
      </div>
      <div class="images">
        <div class="image">
          <div class="view"></div>
          <img v-for="(item, idx) in images" :key="idx" :src="item" alt="Image" v-show="viewImage === idx">
        </div>
        <div class="list">
          <div class="item"
               :class="{'active': viewImage === idx}"
               v-for="(item, idx) in images"
               :key="idx"
               @click="viewImage = idx"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "@/components/UI/HeaderBlock.vue";
import {mapGetters} from "vuex";

export default {
  name: 'PageBlogView',
  components: {
    HeaderBlock,
  },
  data() {
    return {
      viewImage: 0,
    };
  },
  computed: {
    ...mapGetters(["currentProject"]),
    title() {
      return this.currentProject.title;
    },
    desc() {
      return this.currentProject.data || [];
    },
    images() {
      return this.currentProject.images || [];
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.container {
  gap: 150px;
}

.header-block, .page-block {
  margin-bottom: 50px;
}

.page-block {
  @include flexColumn(center, start, 100px);

  .info {
    max-width: 660px;

    .title {
      @include textTitle(50px);
    }

    .desc {
      @include textDesc(22px);
    }
  }

  .images {
    .image {
      @include flexColumn(center, center);
      position: relative;
      border-radius: 70px;
      overflow: hidden;

      .view {
        @include flexRow(center, center);
        position: absolute;
        border-radius: 50%;
        background: url('@/assets/icons/Search.svg') no-repeat center, $color-clear;
        width: 130px;
        height: 130px;
        cursor: pointer;
        z-index: 2;
      }

      &:after {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        content: '';
      }
    }

    .list {
      @include flexRow(center, center, 10px);
      padding: 25px 0;

      .item {
        @include flexRow();
        border: 2px solid $color-main;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        cursor: pointer;

        &.active {
          border: none;
          background: $color-fourth;
        }
      }
    }
  }
}
</style>
