<template>
  <section class="btns">
    <section v-if="!$store.state.auth.user">
      <button class="btn btn-transparent" @click="vendorModelShow">
        Become Vendor
      </button>
      <button class="btn btn-filled" @click="loginModelShow">Login</button>
      <LoginModel :model="loginModel" />
      <SignUpModel :model="signUpModel" />
    </section>
    <!-- after login -->
    <section v-else class="dropdown-container">
      <button class="btn btn-transparent" @click="vendorModelShow">
        Become Vendor
      </button>
      <button class="btn btn-filled add-services" @click="serviceModelShow">
        Add Service
      </button>
      <div id="demo">
        <div class="avatar" @click="toggleDropdown">
          <img src="../../assets/images/profile.svg" alt="avatar" />
        </div>
        <DropDownMenu v-if="dropDown" />
      </div>
      <AddServiceModel :model="serviceModel" />
      <VendorModel :model="vendorModel" />
    </section>
  </section>
</template>

<script>
import LoginModel from "@/components/models/LoginModel.vue";
import SignUpModel from "@/components/models/SignUpModel.vue";
import VendorModel from "@/components/models/VendorModel.vue";
import AddServiceModel from "@/components/models/AddServiceModel.vue";
import DropDownMenu from "../DropdownMenu.vue";
import Cookies from "js-cookie";

export default {
  name: "webProfile",
  components: {
    LoginModel,
    SignUpModel,
    VendorModel,
    AddServiceModel,
    DropDownMenu,
  },
  data() {
    return {
      loginModel: false,
      signUpModel: false,
      vendorModel: false,
      serviceModel: false,
      dropDown: false,
      user: false,
    };
  },
  mounted() {
    var close = () => {
      this.dropDown = false;
    };
    window.addEventListener("click", function (e) {
      var doc = document.getElementById("demo");
      if (doc) {
        var ele = doc.contains(e.target);
        if (!ele) {
          close();
        }
      }
    });
  },
  methods: {
    toggleDropdown() {
      this.dropDown = !this.dropDown;
    },
    loginModelShow() {
      this.loginModel = !this.loginModel;
    },
    vendorModelShow() {
      let auth = Cookies.get("Authorization");
      if (!auth) {
        this.loginModelShow();
        return;
      }
      this.vendorModel = !this.vendorModel;
    },
    serviceModelShow() {
      this.serviceModel = !this.serviceModel;
    },
  },
  created(){
     let auth = Cookies.get("Authorization");
     if(!auth){
       this.user =  false;
     }else{
       this.user = true;
     }
  }
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 40px;
  background: #fff;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 2px 5px #888888a6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-services {
  padding: 12px 20px !important;
  margin-right: 10px;
}
.dropdown-container {
  position: relative;
}
.dropdown-container .btn {
  padding: 10px 10px;
}
.demo-login {
  position: absolute;
  top: -26px;
  font-size: 12px;
  right: 0;
  cursor: pointer;
}
.btns > section {
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
