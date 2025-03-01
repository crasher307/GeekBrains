<template>
  <div class="container">
    <header-block
        class="header-block"
        title="Our Project"
        desc="Home / Project"
        background="/images/project/Header.png"
    />
    <div class="page-block">
      <div class="sort">
        <div
            class="item"
            :class="{'active': item === selectedCategory}"
            v-for="(item, idx) in categories"
            :key="idx"
            @click="selectedCategory = item"
        >
          {{ item }}
        </div>
      </div>
      <div class="items">
        <div class="left">
          <page-project-item
              class="item"
              v-for="(item, idx) in itemsData.left"
              :key="idx"
              :data="item"
          />
        </div>
        <div class="right">
          <page-project-item
              class="item"
              v-for="(item, idx) in itemsData.right"
              :key="idx"
              :data="item"
          />
        </div>
      </div>
      <div class="pages">
        <div class="page prev" v-if="currentPage > 1"></div>
        <div class="page" :class="{'active': idx === currentPage}" v-for="idx in pages" :key="idx">
          {{ String(idx).padStart(2, '0') }}
        </div>
        <div class="page next" v-if="currentPage < pages"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HeaderBlock from "@/components/UI/HeaderBlock.vue";
import PageProjectItem from "@/components/UI/PageProjectItem.vue";

export default {
  name: 'PageBlog',
  components: {
    PageProjectItem,
    HeaderBlock,
  },
  props: {},
  data() {
    return {
      selectedCategory: '',
      currentPage: 1,
      pages: 3,
    };
  },
  computed: {
    ...mapGetters(["projects"]),
    categories() {
      return Array.from(new Set(this.projects.map(e => e.category)));
    },
    itemsData() {
      const data = {
        left: [],
        right: [],
      };
      this.projects.filter(e => e.category === this.selectedCategory).forEach((val, idx) => {
        idx % 2 === 0 ? data.left.push(val) : data.right.push(val);
      });
      return data;
    },
  },
  watch: {
    categories() {
      this.selectedCategory = this.categories[0];
    },
  },
  mounted() {
    this.selectedCategory = this.categories[0];
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
  @include flexColumn(center, start, 60px);

  .sort {
    @include flexRow(center, center, 10px);
    border: 2px solid $color-fourth;
    border-radius: 18px;

    .item {
      @include flexRow(center, center);
      @include textTitle(18px, 600);
      font-family: $font-second;
      padding: 20px;
      cursor: pointer;
      border-radius: 14px;

      &.active {
        background: $color-fourth;
        color: $color-clear;
      }
    }
  }

  .items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    & > * {
      @include flexColumn(stretch, start, 30px);
    }
  }

  .pages {
    @include flexRow(center, center, 20px);

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
}
</style>
