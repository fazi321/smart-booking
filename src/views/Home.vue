<template>
  <default-layout>
    <HeroSlider />
    <HotelSlider />
    <SmartBooking />
    <ExploreCity />
    <WhatCanWeDo />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HeroSlider from "@/components/home/heroSlider.vue";
import HotelSlider from "@/components/home/hotelSlider.vue";
import SmartBooking from "@/components/home/smartBooking.vue";
import ExploreCity from "@/components/home/exploreCity.vue";
import WhatCanWeDo from "@/components/home/whatCanWeDo.vue";
// import { io } from "socket.io-client";
export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    HeroSlider,
    HotelSlider,
    SmartBooking,
    ExploreCity,
    WhatCanWeDo,
  },
  // mounted() {
  //   const socket = io("http://13.229.167.135:5000");
  //   socket.on("connect", () => {
  //     console.log(socket.connected); // true
  //   });
  //   console.log(socket);
  // },
};
</script>
