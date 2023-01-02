<template>
  <section>
   <div class="desktop-header">
      <Header />
    </div>
    <div class="mobile-header">
      <MobHeader />
    </div>
    <Listing />
  </section>
</template>

<script>
import Header from "@/components/header/index.vue";
import Listing from "@/components/listings/index.vue";
import MobHeader from "@/components/mobHeader/index";

export default {
  name: "AparmentView",
  components: {
    Header,
    Listing,
    MobHeader
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
@media (max-width: 700px) and (min-width: 320px) {
  .desktop-header {
    display: none;
  }
  .mobile-header {
    display: block;
  }
}
</style>
