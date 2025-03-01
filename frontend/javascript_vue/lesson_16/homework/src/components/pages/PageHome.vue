<template>
  <div>
    <banner-main
        :title="main.title"
        :desc="main.desc"
        :button="main.btnText"
        :background="main.background"
    />
    <title-block
        title="Follow Our Projects"
        desc="It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points."
    />
    <div class="banners medium">
      <banner-medium
          :title="item.title"
          :desc="item.desc"
          :background="item.background"
          v-for="(item, idx) in medium"
          :key="idx"
      />
    </div>
    <div class="info">
      <div class="line">
        <div class="block">
          <div class="title">12</div>
          <div class="desc">Years Of Experiance</div>
        </div>
        <div class="block">
          <div class="title">85</div>
          <div class="desc">Success Project</div>
        </div>
        <div class="block">
          <div class="title">15</div>
          <div class="desc">Active Project</div>
        </div>
        <div class="block">
          <div class="title">95</div>
          <div class="desc">Happy CUstomers</div>
        </div>
      </div>
    </div>
    <title-block
        title="Articles & News"
        desc="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
    />
    <div class="banners small">
      <banner-small
          :class="{'dark': (idx - 1) % 3 === 0}"
          :title="item.title"
          :desc="item.desc"
          :background="item.background"
          :tag="item.tag"
          v-for="(item, idx) in small"
          :key="idx"
      />
    </div>
  </div>
</template>

<script>
import TitleBlock from "@/components/UI/TitleBlock.vue";
import BannerMain from "@/components/UI/BannerMain.vue";
import BannerMedium from "@/components/UI/BannerMedium.vue";
import BannerSmall from "@/components/UI/BannerSmall.vue";

export default {
  name: 'PageHome',
  components: {
    TitleBlock,
    BannerMain,
    BannerMedium,
    BannerSmall,
  },
  data() {
    return {
      main: {
        title: 'Let Your Home Be Unique',
        desc: 'There are many variations of the passages of lorem Ipsum fromavailable, majority.',
        btnText: 'Get Started',
        background: '/images/home/Banner.png',
      },
      medium: [
        {
          title: 'Modern Kitchan',
          desc: 'Decor / Artchitecture',
          background: '/images/home/Banner-1.png',
        },
        {
          title: 'Modern Kitchan',
          desc: 'Decor / Artchitecture',
          background: '/images/home/Banner-2.png',
        },
        {
          title: 'Modern Kitchan',
          desc: 'Decor / Artchitecture',
          background: '/images/home/Banner-3.png',
        },
        {
          title: 'Modern Kitchan',
          desc: 'Decor / Artchitecture',
          background: '/images/home/Banner-4.png',
        },
      ],
      small: [
        {
          title: 'Let’s Get Solution For Building Construction Work',
          desc: '26 December,2022',
          tag: 'Kitchan Design',
          background: '/images/home/Banner-1-1.png',
        },
        {
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          desc: '22 December,2022',
          tag: 'Living Design',
          background: '/images/home/Banner-1-2.png',
        },
        {
          title: 'Best For Any Office & Business Interior Solution',
          desc: '25 December,2022',
          tag: 'Interior Design',
          background: '/images/home/Banner-1-3.png',
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.banners {
  display: grid;
  justify-content: space-between;

  &.medium {
    grid-template-columns: repeat(2, auto);
    gap: 50px;
  }

  &.small {
    margin-top: -40px;
    grid-template-columns: repeat(3, auto);
    gap: 50px 30px;
  }
}

.info {
  @include flexColumn();
  background: $color-third;

  .line {
    background: $color-fourth;
    display: flex;
    gap: 1px;
    margin: 170px 0;

    .block {
      @include flexColumn(center, center, 15px);
      background: $color-third;
      text-align: center;
      width: 100%;

      & > * {
        line-height: 0;
      }

      .title {
        @include textTitle(85px);
        color: $color-fourth;
        margin-top: -38px;
      }

      .desc {
        @include textDesc(22px);
        margin-bottom: -32px;
      }
    }
  }
}
</style>