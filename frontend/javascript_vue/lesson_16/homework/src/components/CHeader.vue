<template>
  <header>
    <img class="logo" src="@/assets/icons/Logo.svg" alt="logo">
    <nav class="menu">
      <a class="link" v-for="(item, idx) in listPages" :key="idx" :href="`${item.url}`">
        {{ item.name }}
      </a>
    </nav>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'CHeader',
  computed: {
    ...mapGetters(["listPages"]),
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