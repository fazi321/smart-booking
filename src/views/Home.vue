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
// import { io } from "socket.io-client";
// import  i18n  from "../i18n";
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
    // notificationModel(arg) {
    //   const Toast = this.$swal.mixin({
    //     toast: true,
    //     position: "top-end",
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener("mouseenter", this.$swal.stopTimer);
    //       toast.addEventListener("mouseleave", this.$swal.resumeTimer);
    //     },
    //   });
    //   Toast.fire({
    //     icon: "success",
    //     title: `${arg.data?.notification?.title}`,
    //     position: "top-end",
    //     text: `${arg.data?.notification?.body}`,
    //     showConfirmButton: false,
    //     toast: true,
    //     timer: 3000,
    //   });
    // },
    // send() {
    //   const Toast = this.$swal.mixin({
    //     toast: true,
    //     position: "top-end",
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener("mouseenter", this.$swal.stopTimer);
    //       toast.addEventListener("mouseleave", this.$swal.resumeTimer);
    //     },
    //   });
    //   Toast.fire({
    //     icon: "success",
    //     title: "Success!",
    //     position: "top-end",
    //     text: "Something went wrong!",
    //     showConfirmButton: false,
    //     toast: true,
    //     timer: 3000,
    //   });
    // },
    // getProfile() {
    //   var user = this.$store.state.auth.user;
    //   if (user) {
    //     const socket = io("https://www.testingserver.tech", {
    //       query: `userId=${user._id}`,
    //     });
    //     socket.on("connect", () => {
    //       // console.log(socket && socket.id);
    //       console.log("connected");
    //     });
    //     socket.on("notification", (arg) => {
    //       // console.log('homePage', arg)
    //       this.notificationModel(arg);
    //     });
    //   }
    // },
  },
  // watch: {
  //   "$store.state.auth.user": {
  //     immediate: true,
  //     handler() {
  //       this.getProfile();
  //     },
  //   },
  // },
  // methods: {
  //   send() {
  //     // eslint-disable-next-line
  //     const socket = io("ws://localhost:3000/");
  //     socket.emit("howdy", "stranger");
  //   },
  // },
};
</script>
