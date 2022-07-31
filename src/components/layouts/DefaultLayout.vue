<template>
  <Header />
  <slot />
  <!-- <Footer /> -->
</template>

<script>
import Header from "../header/index.vue";
// import Footer from "@/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    // Footer,
  },
};
</script>
