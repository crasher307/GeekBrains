<template>
  <header>
    <img class="logo" src="@/assets/icons/Logo.svg" alt="logo">
    <nav class="menu">
      <a
          class="link"
          v-for="(item, idx) in listPages"
          :key="idx"
          :href="`#${idx}`"
          @click.prevent="currentPage(idx)"
      >
        {{ item.name }}
      </a>
    </nav>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'CHeader',
  computed: {
    ...mapGetters(["listPages"]),
  },
  methods: {
    ...mapMutations(["currentPage"]),
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