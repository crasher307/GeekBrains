<template>
  <div id="app">
    <c-header/>
    <c-main>
      <router-view/>
    </c-main>
    <c-footer/>
  </div>
</template>

<script>
import CHeader from "@/components/CHeader.vue";
import CMain from "@/components/CMain.vue";
import CFooter from "@/components/CFooter.vue";

export default {
  name: 'App',
  components: {
    CHeader,
    CMain,
    CFooter,
  },
}
</script>

<style lang="scss" src="@/styles/style.scss"/>