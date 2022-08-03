<template>
  <section class="btns">
    <button class="btn btn-transparent" @click="vendorModelShow">Become Vendor</button>
    <button class="btn btn-filled" @click="loginModelShow">Login</button>
    <LoginModel :model="loginModel" />
    <SignUpModel :model="signUpModel" />
    <VendorModel :model="vendorModel" />
  </section>
</template>

<script>
import LoginModel from "../models/LoginModel.vue";
import SignUpModel from "../models/SignUpModel.vue";
import VendorModel from "../models/VendorModel.vue";
export default {
  name: "webProfile",
  components: {
    LoginModel,
    SignUpModel,
    VendorModel,
  },
  data() {
    return {
      loginModel: false,
      signUpModel: false,
      vendorModel:false,
    };
  },
  methods: {
    loginModelShow() {
      this.loginModel = !this.loginModel;
    },
    vendorModelShow(){
       this.vendorModel = !this.vendorModel;
    }
  },
};
</script>

<style scoped>
.btns {
  display: flex;
}
.btn {
  border-radius: 50px;
  border: 1px solid #febb12;
  padding: 12px 25px;
}
.btn-transparent {
  background: transparent;
  color: #febb12;
  margin-right: 10px;
}
.btn-filled {
  background: #febb12;
  color: #000;
  box-shadow: 0 10px 10px -5px #00000038;
}
</style>
