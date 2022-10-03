<template>
  <default-layout>
    <HeroSlider />
    <HotelSlider />
    <SmartBooking />
    <ExploreCity />
    <WhatCanWeDo />
    <!-- <h1 @click="send">Send Message</h1> -->
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HeroSlider from "@/components/home/heroSlider.vue";
import HotelSlider from "@/components/home/hotelSlider.vue";
import SmartBooking from "@/components/home/smartBooking.vue";
import ExploreCity from "@/components/home/exploreCity.vue";
import WhatCanWeDo from "@/components/home/whatCanWeDo.vue";
import { io } from "socket.io-client";
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
  methods: {
    getProfile() {
      var user = this.$store.state.auth.user;
      if (user) {
        const socket = io("https://www.testingserver.tech", {
          query: `id=${user._id}`,
        });
        socket.on("connect", () => {
          console.log(socket && socket.id);
          console.log("connected");
        });
        socket.on("notification", (arg) => {
          console.log(arg, "=>");
        });
      }
    },
  },
  watch: {
    "$store.state.auth.user": {
      immediate: true,
      handler() {
        this.getProfile();
      },
    },
  },
  // methods: {
  //   send() {
  //     // eslint-disable-next-line
  //     const socket = io("http://13.229.167.135:5000/api");
  //     socket.emit("howdy", "stranger");
  //   },
  // },
  // mounted() {
  //   const socket = io("http://13.229.167.135:5000");
  //   socket.on("connect", () => {
  //     console.log(socket && socket.id);
  //     console.log('connected')
  //   });
  //   // console.log('connected')
  //   socket.on("notification", (arg) => {
  //     console.log(arg, "=>");
  //   });
  // },
};
</script>
