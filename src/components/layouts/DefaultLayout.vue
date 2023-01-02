<template>
  <div>
    <div class="desktop-header">
      <Header />
    </div>
    <div class="mobile-header">
      <MobHeader />
    </div>
    <slot />
    <custom-notification/>
    <Footer />
  </div>
</template>

<script>
import Header from "../header/index.vue";
import Footer from "../footer/AppFooter.vue";
import MobHeader from "../mobHeader/index";
import CustomNotification from '../Notification';

export default {
  name: "DefaultLayout",
  components: {
    Header,
    MobHeader,
    Footer,
    CustomNotification,
  },
};
</script>
<style scoped>
.desktop-header {
  display: block;
  min-height: 80px;
}
.mobile-header {
  display: none;
}
@media ((max-width: 700px)) and (min-width: 320px) {
  .desktop-header {
    display: none;
  }
  .mobile-header {
    display: block;
  }
}
</style>
