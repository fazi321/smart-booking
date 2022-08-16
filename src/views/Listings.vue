<template>
  <section>
    <Header />
    <Listing />
  </section>
</template>

<script>
import Header from "@/components/header/index.vue";
import Listing from "@/components/listings/index.vue";

export default {
  name: "AparmentView",
  components: {
    Header,
    Listing,
  },
};
</script>
