<template>
  <div class="time">
    <p>{{ updatedTime }}</p>
  </div>
</template>

<script>
export default {
  props: ["time"],
  data() {
    return {
      updatedTime: "",
    };
  },
  mounted() {
    var check = new Date(this.time);
    console.log(this.timeSince(check));
    window.setInterval(() => {
      this.timeSince(check);
      // this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000);
  },
  methods: {
    timeSince(date) {
      var seconds = Math.floor((new Date() - Date.parse(date)) / 1000);
      var interval = seconds / 31536000;
      if (interval > 1) {
        this.updatedTime = Math.floor(interval) + `${Math.floor(interval) == 1 ? '  years Ago': '  years Ago'}`;
        return;
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        this.updatedTime = Math.floor(interval) + `${Math.floor(interval) == 1 ? ' month Ago': ' months Ago'}`;
        return;
      }
      interval = seconds / 86400;
      if (interval > 1) {
        this.updatedTime = Math.floor(interval) + `${Math.floor(interval) == 1 ? ' day Ago': " days Ago"}`;
        return;
      }
      interval = seconds / 3600;
      if (interval > 1) {
        this.updatedTime = Math.floor(interval) + `${Math.floor(interval) == 1 ? ' hour Ago': " hours Ago"}`;
        return;
      }
      interval = seconds / 60;
      if (interval > 1) {
        this.updatedTime = Math.floor(interval) + " Min Ago";
        return;
      }
      this.updatedTime = ' Now';
    },
  },
};
</script>

<style>
.time {
  width: 18%;
  display: flex;
  justify-content: flex-end;
}
.time p {
  text-align: left;
  letter-spacing: 0.2px;
  color: #231f20;
  opacity: 0.4;
  font-size: 10px;
}
</style>
