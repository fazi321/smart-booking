<template>
  <section :class="['login-signup', { active: model }]">
    <OtpModel
      @submited="checkOTP"
      :model="otpModel"
      :otpC="verifyOtp"
      ref="otp"
    />
    <div class="primary-login">
      <div class="main-login">
        <div class="logo-close">
          <div class="logo">
            <img src="../../assets/images/logo-forms.svg" alt="" />
          </div>
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("login.login") }}</h1>
          <h4>{{ $t("login.loginAccount") }}</h4>
        </div>
        <div class="login-form">
          <div class="form-container">
            <form autocomplete="off" @submit.prevent="Login">
              <div class="input-div">
                <div :class="['input-primary', {'set-lang': $t('lang') == 'ar'}]" >
                  <div :class="'flag'">
                    <div class="flag-img">
                      <img src="../../assets/images/flag.svg" alt="flag" />
                    </div>
                    <div>
                      <span>+966</span>
                    </div>
                  </div>
                  <div class="container-input">
                    <input
                      type="number"
                      :placeholder="$t('login.mobileNumber')"
                      v-model="phoneNumber"
                      min='1'
                      required
                    />
                  </div>
                  <div class="error" v-if="isError">{{$t('error.numberError')}}</div>
                </div>
              </div>
              <div class="input-div">
                <button v-if="!loading" type="submit">{{$t('login.login')}}</button>
                <button v-else>Loading...</button>
              </div>
            </form>
          </div>
          <div class="buttom-text">
            {{$t('login.dontAccount')}} <span @click="SignUpModel">{{$t('login.signUpCapital')}} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OtpModel from "./OtpModel.vue";
import Cookies from "js-cookie";

export default {
  name: "LoginModel",
  props: ["model"],
  components: {
    OtpModel,
  },
  data() {
    return {
      phoneNumber: null,
      verifyOtp: "",
      userData: {},
      otpModel: false,
      loading: false,
      isError: false,
    };
  },
  methods: {
    async Login() {
      this.loading = true;
      try {
        const res = await this.$axios.post("user/login", {
          phone: `${this.phoneNumber}`,
        });
        if (res) {
          this.otpModel = true;
          this.verifyOtp = res.data.user.otp;
          this.userData = res.data;
          this.loading = false;
        }
      } catch (error) {
        this.isError = true;
        this.loading = false;
      }
    },
    checkOTP(val) {
      if (this.verifyOtp == val) {
        this.varify(this.verifyOtp);
        // var time = new Date(new Date().getTime() + 1 * 60 * 1000);
      } else {
        this.$refs.otp.error = true;
      }
    },
    async varify(otp) {
      this.$refs.otp.otploading = true;
      try {
        var phone = this.userData.user.phone;
        const res = await this.$axios.post("user/verify", {
          phone: `${phone}`,
          otp: otp,
        });
        if (res) {
          Cookies.set("Authorization", res.data.token, { expires: 7 });
          this.$axios.defaults.headers.common[
            "Authorization"
          ] = `bearer ${res.data.token}`;
          this.$store.dispatch("auth/login", res.data.user);
          this.close();
          this.$swal({
            icon: "success",
            title: "Success!",
            showConfirmButton: false,
            timer: 3000,
          });
          this.$refs.otp.otploading = false;
          this.otpModel = false;
        }
      } catch (error) {
        this.$refs.otp.otploading = false;
        console.log(error);
      }
    },
    SignUpModel() {
      this.$parent.loginModel = false;
      this.$parent.signUpModel = true;
    },
    close() {
      this.$store.commit("auth/MODEL_OPEN", false);
      this.$parent.loginModel = false;
    },
  },
  watch: {
    phoneNumber: function () {
      this.isError = false;
    },
  },
};
</script>

<style scoped>
.set-lang input{
  text-align: right!important;
  direction: rtl!important;
}
.error {
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: 0;
  width: 100%;
  bottom: -35px;
  left: 0;
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
  z-index: 999;
  visibility: hidden;
}
.login-signup.active {
  visibility: visible;
}
.primary-login {
  width: 623px;
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
  padding: 24px;
  margin: 15px 0;
}
.headings h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
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
  position: relative;
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
}
.input-div button {
  padding: 15px 30px;
  background: #febb12;
  color: #000;
  width: 72%;
  font-size: 18px;
  border: none;
  padding: 18px 30px;
  border-radius: 50px;
  outline: none;
  margin-bottom: 40px;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
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
/* responsive */
@media (max-width: 700px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
  .headings h1 {
    font-size: 20px;
  }
}
</style>
