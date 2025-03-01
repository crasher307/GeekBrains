<template>
  <header>
    <img class="logo" src="@/assets/icons/Logo.svg" alt="logo">
    <nav class="menu">
      <a class="link"
         :class="{'active': currentPage === idx}"
         v-for="(item, idx) in pages" :key="idx"
         @click.prevent="changePage(item.comp)"
         :href="`#${idx}`"
      >
        {{ item.name }}
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    currentPage: null,
    pages: {},
  },
  methods: {
    changePage(component) {
      this.$emit('changePage', component);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.menu {
  @include flexRow(end, center, 50px);
  @include textTitle(20px);
  font-family: $font-second;
}
</style>