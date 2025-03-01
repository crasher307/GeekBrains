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
import PageHome from "@/components/pages/PageHome.vue";

export default {
  name: 'App',
  components: {
    CHeader,
    CMain,
    CFooter,
  },
  data() {
    return {
      currentPage: PageHome,
      pages: {
        // home: {name: 'Home', comp: PageHome},
      },
    };
  },
}
</script>

<style lang="scss" src="@/styles/style.scss"/>