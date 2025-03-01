<template>
  <div id="app">
    <c-header :pages="pages" :currentPage="currentPage" @changePage="currentPage = $event"/>
    <c-main>
      <component :is="currentPage"/>
    </c-main>
    <c-footer :pages="pages" :currentPage="currentPage" @changePage="currentPage = $event"/>
  </div>
</template>

<script>
import CHeader from "@/components/CHeader.vue";
import CMain from "@/components/CMain.vue";
import CFooter from "@/components/CFooter.vue";
import PageHome from "@/components/pages/PageHome.vue";
import PageProject from "@/components/pages/PageProject.vue";
import PageBlog from "@/components/pages/PageBlog.vue";

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
        home: {name: 'Home', comp: PageHome},
        project: {name: 'Project', comp: PageProject},
        blog: {name: 'Blog', comp: PageBlog},
      },
    };
  },
}
</script>

<style lang="scss" src="@/styles/style.scss"/>