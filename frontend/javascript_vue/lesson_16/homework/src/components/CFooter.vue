<template>
  <footer>
    <div class="info">
      <img class="logo" src="@/assets/icons/Logo.svg" alt="logo">
      <div class="desc">It is a long established fact that a reader will be distracted lookings.</div>
      <div class="social">
        <a href="#twitter" @click.prevent="link('twitter')">
          <img src="@/assets/icons/Twitter.svg" alt="twitter">
        </a>
        <a href="#linkedIn" @click.prevent="link('linkedIn')">
          <img src="@/assets/icons/LinkedIn.svg" alt="linked in">
        </a>
      </div>
    </div>
    <div class="pages">
      <div class="title">Pages</div>
      <a class="link" v-for="(item, idx) in listPages" :key="idx" :href="`${item.url}`">
        {{ item.name }}
      </a>
    </div>
    <div class="contact">
      <div class="title">Contact</div>
      <a target="_blank" :href="addressSearch">{{ address }}</a>
      <a :href="`mailto:${email}`">{{ email }}</a>
      <a :href="`tel:${numberData}`">{{ numberView }}</a>
    </div>
  </footer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'CFooter',
  data() {
    return {
      address: '55 East Birchwood Ave. Brooklyn, New York 11201',
      email: 'contact@interno.com',
      number: '8 (123) 456-78-90',
    };
  },
  computed: {
    ...mapGetters(["listPages"]),
    addressSearch() {
      return `https://www.google.com/maps/search/${this.address.replace(/ /g, '+')}`;
    },
    numberData() {
      return this.number.replace(/\D/g, '');
    },
    numberView() {
      const match = this.numberData.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
      return match ? `${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}` : this.numberData;
    },
  },
  methods: {
    link(type) {
      switch (type) {
        default:
          break;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

footer > * {
  @include flexColumn(start, start, 25px);
  @include textDesc(22px);
  min-width: 200px;
  max-width: 100%;
  width: calc(33.33% - 10px);

  .title {
    @include textTitle(25px);
  }

  &.info {
    .social {
      @include flexRow(center, center, 40px);

      a {
        @include flexRow(center, center);
        padding: 5px;
        border-radius: 5px;
      }
    }
  }

  &.pages {
    width: auto;
  }

  &.contact {
    max-width: 260px;
  }
}
</style>