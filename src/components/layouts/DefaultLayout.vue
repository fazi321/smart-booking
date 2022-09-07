<template>
  <div>
    <div class="desktop-header">
      <Header />
    </div>
    <div class="mobile-header">
      <MobHeader />
    </div>
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "../header/index.vue";
import Footer from "../footer/AppFooter.vue";
import MobHeader from "../mobHeader/index";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    MobHeader,
    Footer,
  },
};
</script>
<style scoped>
.desktop-header {
  display: block;
}
.mobile-header {
  display: none;
}
@media (max-width: 479px) and (min-width: 320px) {
  .desktop-header {
    display: none;
  }
  .mobile-header {
    display: block;
  }
}
</style>
