<template>
  <section class="model">
    <div class="success">
      <div class="main-login">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("myBookingPage.bookingRequests") }}</h1>
        </div>
        <div class="container-content">
          <div class="success-img">
            <img src="../../assets/images/success.svg" alt="" />
          </div>
          <div class="success-content">
            <h5>Notification Sent Successfully!</h5>
            <p>Notification has been sent to the customer successfully.</p>
          </div>
          <div class="input-div">
            <button type="submit" @click="close">Done</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.main-login {
  width: 100%;
}
.container-content {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
}
.success {
  width: 623px;
  background: #fff;
  height: fit-content;
  padding: 25px;
  border-radius: 20px;
  /* transition: 0.2s linear; */
  /* transform: translateY(-100%); */
}
/* .login-signup.active .success {
  transform: translateY(0);
} */
.logo-close {
  display: flex;
  justify-content: center;
  position: relative;
}
.logo-close .logo {
  width: 120px;
}
img {
  width: 100%;
  height: 100%;
}
.close-icon {
  cursor: pointer;
  top: -10px;
  position: absolute;
  right: 0;
  width: 35px;
  height: 35px;
}
.headings {
  text-align: center;
  padding: 0 24px 24px 24px;
  margin: 15px 0;
}
.headings h1 {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 26px;
}
.headings h4 {
  font-weight: 500;
  font-size: 16px;
}
.input-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 18px;
}
.input-div button {
  background: #febb12;
  color: #000;
  font-size: 18px;
  border: none;
  padding: 14px 30px;
  border-radius: 50px;
  outline: none;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
  min-width: 263px;
  cursor: pointer;
}
/* step success start */
.success-img {
  width: 140px;
  height: 144px;
  margin-bottom: 20px;
}
.success .headings {
  padding: 0 24px 0px 24px;
}
.success {
  padding: 25px 25px 10px 25px;
}
.success-content h5 {
  color: #000000;
  margin: 16px 0;
  font-size: 18px;
}
.success-content p {
  color: #393f45;
  font-size: 12px;
  line-height: 1.8;
}
.model {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
/* step success end */
/* responsive */
@media (max-width: 700px) and (min-width: 320px) {
  .success {
    width: 300px;
  }
}
</style>
