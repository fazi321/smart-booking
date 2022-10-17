<template>
  <div></div>
</template>
<script>

import {getMessaging, onMessage ,getToken } from 'firebase/messaging'
// import messaging from "../firebase";
export default {
  name:'CustomNotification',
  methods: {
    async initMessaging() {
      const messaging = getMessaging();
      const token = await getToken(messaging, {
        vapidKey:
          "BCXKus3soBsc-N9l6nzVoCMdiVGq8mg_KRh7wdCPjhenUT5vLzZIncitdEZEYOPlQiV58ZnUZkQGPuKQB3W041M",
      });
      if (token) {
        console.log("token:", token);
      }
      onMessage(messaging, (payload) => {
        this.notificationModel(payload);
        console.log("Message from client", payload);
      });
    },
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
        title: `${arg.notification.title}`,
        position: "top-end",
        text: `${arg.notification.body}`,
        showConfirmButton: false,
        toast: true,
        timer: 3000,
      });
    },
  },
  mounted() {
    this.initMessaging();
  },
};
</script>
<style scoped></style>
