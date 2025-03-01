<template>
  <div id="app">
    <c-header/>
    <c-main>
      <component :is="currentPage"/>
    </c-main>
    <c-footer/>
  </div>
</template>

<script>
import CHeader from "@/components/CHeader.vue";
import CMain from "@/components/CMain.vue";
import CFooter from "@/components/CFooter.vue";
import {mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    CHeader,
    CMain,
    CFooter,
  },
  computed: {
    ...mapGetters(["currentPage"]),
  },
}
</script>

<style lang="scss" src="@/styles/style.scss"/>