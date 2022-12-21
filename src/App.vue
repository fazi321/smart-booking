<template>
  <router-view />
</template>
<script>
import Cookies from "js-cookie";
import { io } from "socket.io-client";
export default {
  beforeCreate() {
    let auth = Cookies.get("Authorization");
    if (auth) {
      this.$axios.defaults.headers.common["Authorization"] = `bearer ${auth}`;
      this.$store.dispatch("auth/profile");
    } else {
      this.$axios.defaults.headers.common["Authorization"] = "";
    }
  },
  mounted() {
    this.$store.dispatch("details/getCategories");
  },
  methods: {
    notificationModel(arg) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: `${arg.data?.notification?.title}`,
        position: "top-end",
        text: `${arg.data?.notification?.body}`,
        showConfirmButton: false,
        toast: true,
        timer: 3000,
      });
    },
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
    getProfile() {
      var user = this.$store.state.auth.user;
      if (user) {
        const socket = io("https://www.testingserver.tech", {
          query: `userId=${user._id}`,
        });
        socket.on("connect", () => {
          // console.log(socket && socket.id);
          console.log("connected");
        });
        socket.on("notification", (arg) => {
          // console.log('homePage', arg)
          this.notificationModel(arg);
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
