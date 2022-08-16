<template>
  <sction>
    <Header />
    <Hotel />
  </sction>
</template>

<script>
import Header from "@/components/header/index.vue";
import Hotel from "@/components/hotel/index.vue";

export default {
  name: "AparmentView",
  components: {
    Header,
    Hotel,
  },
};
</script>
