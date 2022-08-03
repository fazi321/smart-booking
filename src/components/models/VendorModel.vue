<template>
  <section :class="['login-signup', { active: model }]">
    <!-- step one -->
    <div class="primary-login">
      <div class="main-login">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Become Vendor</h1>
          <h4>Please select an option</h4>
        </div>
        <div class="container-vendor">
          <div class="cards">
            <div class="primary-cards">
              <h5>I represent the</h5>
              <h6>Company</h6>
            </div>
            <div class="primary-cards">
              <h5>I am a personal</h5>
              <h6>Host</h6>
            </div>
          </div>
          <div class="form-container">
            <div class="input-div">
              <button type="submit">Next</button>
            </div>
          </div>
          <!-- <div class="buttom-text">
            Don’t Have an Account? <span @click="SignUpModel">Sign Up </span>
          </div> -->
        </div>
      </div>
    </div>
    <!-- step one End -->
  </section>
</template>

<script>
export default {
  name: "vendorModel",
  props: ["model"],
  data() {
    return {
      phoneNumber: null,
    };
  },
  methods: {
    close() {
      this.$parent.vendorModel = false;
    },
  },
};
</script>

<style scoped>
.error {
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: red;
}
.login-signup {
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
  visibility: hidden;
}
.login-signup.active {
  visibility: visible;
}
.primary-login {
  width: 46%;
  background: #fff;
  height: fit-content;
  padding: 25px;
  border-radius: 20px;
  transition: 0.2s linear;
  transform: translateY(-100%);
}
.login-signup.active .primary-login {
  transform: translateY(0);
}
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
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 26px;
}
.headings h4 {
  font-weight: 500;
  font-size: 16px;
}
.login-form .input-primary {
  display: flex;
  height: 42px;
  padding: 6px 30px;
  border-radius: 50px;
  box-shadow: 0px 0px 3px 1px #f1f1f1;
  margin-bottom: 35px;
  align-items: center;
  width: 62%;
}
.container-input {
  width: 90%;
}
.login-form input {
  width: 100%;
  /* height: 42px; */
  border: none;
  outline: none;
  user-select: none;
  margin-left: 10px;
}
.login-form input::placeholder {
  color: #b0b0b0;
}
.form-container {
  display: flex;
  justify-content: center;
}
.form-container form {
  width: 100%;
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
.input-div .flag {
  display: flex;
  align-items: center;
}
.input-div .flag span {
  color: #b0b0b0;
  font-size: 14px;
}
.input-div .flag .flag-img {
  width: 20px;
  position: relative;
  top: 2px;
  right: 3px;
}
.buttom-text {
  text-align: center;
  font-size: 14px;
}
.buttom-text span {
  text-align: center;
  color: #febb12;
  cursor: pointer;
}

/* step one */
.container-vendor {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container-vendor .cards {
  display: flex;
  justify-content: space-between;
  width: 58%;
  margin: 20px 0px 40px 0px;
}
.container-vendor .primary-cards {
  width: 150px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 1px 11px -5px #0000006b;
  cursor:pointer;
}
.container-vendor .primary-cards h6 {
  color: #febb12;
  margin-top: 3px;
}
.container-vendor .primary-cards h6,
h5 {
  font-size: 14px;
}

/* step one end */
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
  .headings h1 {
    font-size: 20px;
  }
}
</style>