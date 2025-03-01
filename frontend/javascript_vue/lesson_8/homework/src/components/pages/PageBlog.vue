<template>
  <div class="container">
    <header-block class="header-block" title="Articles & News" desc="Home / Blog" background="/images/blog/Header.png"/>
    <page-block title="Latest Post">
      <banner-big
          :background="latestPost.image"
          :title="latestPost.title"
          :desc="latestPost.desc"
          :date="latestPost.date"
      />
    </page-block>
    <page-block class="news-block" title="Articles & News">
      <div class="news">
        <banner-small
            :class="{'dark': (idx - 1) % 3 === 0}"
            :title="item.title"
            :desc="item.date"
            :background="item.image"
            :tag="item.tag"
            v-for="(item, idx) in news"
            :key="idx"
        />
      </div>
      <div class="pages">
        <div class="page prev" v-if="currentPage > 1"></div>
        <div class="page" :class="{'active': idx === currentPage}" v-for="idx in pages" :key="idx">
          {{ String(idx).padStart(2, '0') }}
        </div>
        <div class="page next" v-if="currentPage < pages"></div>
      </div>
    </page-block>
  </div>
</template>

<script>
import HeaderBlock from "@/components/UI/HeaderBlock.vue";
import PageBlock from "@/components/UI/PageBlock.vue";
import BannerSmall from "@/components/UI/BannerSmall.vue";
import BannerBig from "@/components/UI/BannerBig.vue";

export default {
  name: 'PageBlog',
  components: {
    BannerBig,
    HeaderBlock,
    PageBlock,
    BannerSmall,
  },
  props: {},
  data() {
    return {
      latestPost: {
        image: '/images/blog/Image.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        desc: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.<br><br>' +
            'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        date: '26 December,2022',
      },
      currentPage: 1,
      pages: 3,
      news: [
        {
          image: '/images/blog/Image-1.png',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          tag: 'Kitchan Design',
        },
        {
          image: '/images/blog/Image-2.png',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022',
          tag: 'Living Design',
        },
        {
          image: '/images/blog/Image-3.png',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022',
          tag: 'Interior Design',
        },
        {
          image: '/images/blog/Image-4.png',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          tag: 'Kitchan Design',
        },
        {
          image: '/images/blog/Image-5.png',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022',
          tag: 'Living Design',
        },
        {
          image: '/images/blog/Image-6.png',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022',
          tag: 'Interior Design',
        },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {
  },
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
