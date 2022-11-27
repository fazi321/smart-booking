<template>
  <header>
    <div class="container">
      <div :class="['mobile-header header disktop']">
        <Logo />
        <section class="navigation-profile">
          <div class="nav">
            <div class="login-container">
              <section class="btns">
                <section class="login-inner" v-if="!$store.state.auth.user">
                  <button class="btn btn-transparent" @click="vendorModelShow">
                    <img src="../../assets/images/management.png" />
                  </button>
                  <button class="btn btn-filled" @click="loginModelShow">
                    <img src="../../assets/images/user.png" alt="avatar" />
                  </button>
                  <LoginModel :model="loginModel || $store.state.auth.loginModel" />
                  <SignUpModel :model="signUpModel" @getUserName="userModel" />
                </section>
                <!-- after login -->
                <section v-else class="dropdown-container mobile-dropdown">
                  <NotificationsHeader :RemOutClick="true" />
                  <UserModel :model="userName" />
                  <button
                    class="btn btn-transparent"
                    v-if="
                      $store.state.auth.user.verify &&
                      $store.state.auth.user.role != 'Vender'
                    "
                    @click="vendorModelShow"
                  >
                    <img src="../../assets/images/management.png" />
                  </button>
                  <!-- v-if="$store.state.auth.user.verify && $store.state.auth.user.host && $store.state.auth.user.role == 'Vender' || $store.state.auth.user.verify && $store.state.auth.user.company && $store.state.auth.user.role == 'Vender'" -->
                  <button
                    class="btn btn-filled add-services"
                    v-if="
                      ($store.state.auth.user.verify &&
                        $store.state.auth.user.host &&
                        $store.state.auth.user.role == 'Vender') ||
                      ($store.state.auth.user.verify &&
                        $store.state.auth.user.company &&
                        $store.state.auth.user.role == 'Vender')
                    "
                    @click="serviceModelShow"
                  ><img src="../../assets/images/add-new.png" /></button>
                  <div id="demo">
                    <div class="avatar" @click="toggleDropdown">
                      <img
                        src="../../assets/images/user.png"
                        alt="avatar"
                        v-if="
                          !$store.state.auth.user ||
                          !$store.state.auth.user.file
                        "
                      />
                      <img :src="$store.state.auth.user.file" alt="avatar" v-else />
                    </div>
                    <DropDownMenu v-if="dropDown" />
                  </div>

                  <AddServiceModel :model="serviceModel" />
                  <VendorModel :model="vendorModel || $store.state.details.vendor" />
                </section>
                <div class="profile-pic shadowActive" @click="menuModelShow">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="#000"
                      d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
                    />
                  </svg>
                </div>
              </section>

              <MobMenu v-if="openSidebar" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </header>
</template>
<script>
import Logo from "../header/Logo.vue";
import MobMenu from "./mobMenu.vue";
import LoginModel from "@/components/models/LoginModel.vue";
import SignUpModel from "@/components/models/SignUpModel.vue";
import VendorModel from "@/components/models/VendorModel.vue";
import UserModel from "@/components/models/UserModel.vue";
import AddServiceModel from "@/components/models/AddServiceModel.vue";
import NotificationsHeader from "../NotificationsHeader.vue";
import DropDownMenu from "../DropdownMenu.vue";
import Cookies from "js-cookie";

export default {
  name: "MobileIndex",
  components: {
    Logo,
    MobMenu,
    LoginModel,
    SignUpModel,
    VendorModel,
    AddServiceModel,
    DropDownMenu,
    UserModel,
    NotificationsHeader
  },
  data() {
    return {
      openSidebar: false,
      loginModel: false,
      signUpModel: false,
      vendorModel: false,
      serviceModel: false,
      dropDown: false,
      user: false,
      userName: false
    };
  },
  mounted() {
    // var close = () => {
    //   this.dropDown = false;
    // };
    // window.addEventListener("click", function (e) {
    //   var doc = document.getElementById("demo");
    //   if (doc) {
    //     var ele = doc.contains(e.target);
    //     if (!ele) {
    //       close();
    //     }
    //   }
    // });
  },
  methods: {
    userModel() {
      this.userName = true;
    },
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
    menuModelShow() {
      this.openSidebar = !this.openSidebar;
    }
  },
  created() {
    let auth = Cookies.get("Authorization");
    if (!auth) {
      this.user = false;
    } else {
      this.user = true;
    }
  }
};
</script>

<style scoped>
.svg-icon{
  width: 22px;
}
header {
  z-index: 3;
  position: relative;
}
.add {
  margin-right: 15px;
}
.add .btn {
  white-space: nowrap;
  background-color: #07abd3;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
/* .shadowActive {
  box-shadow: 0px 2px 5px #888888a6;
} */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mobile-header {
  min-height: 66px;
  padding: 0 15px;
}
.mobile-header .logo {
  width: 130px;
}
.header .logo img {
  width: 100%;
}
.navigation-profile {
  display: flex;
}
.navigation-profile .nav ul {
  display: flex;
  align-items: center;
  margin-top: 3px;
}
.navigation-profile .nav ul li {
  margin-right: 40px;
  text-transform: uppercase;
  font-size: 14px;
}
.navigation-profile .nav ul li a:hover {
  border-bottom: 1px solid #4092cf;
  color: #4092cf;
}
.navigation-profile .nav ul li:last-child {
  margin-right: unset;
}
.navigation-profile .nav ul li a {
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  padding: 10px 0;
}
.header.active .navigation-profile .nav ul li a {
  color: #fff;
}
.login-container {
  display: flex;
  align-items: center;
  position: relative;
}
.login-container .btns .login-inner {
  display: flex;
  align-items: center;
  position: relative;
  gap: 8px;
}
.login-container .btns .login-inner img{
  width: 22px;
}
.login-container .btns {
  display: flex;
  align-items: center;
  gap: 8px;
}
.login-container .btns .login-inner .btn {
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
}
.profile-pic {
  overflow: hidden;
  width: 30px;
  /* height: 30px; */
  cursor: pointer;
}
.logout-container {
  display: block;
  background: rgba(0, 0, 0, 0.32941);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  height: 100%;
}
.logout-inner {
  background: #fff;
  width: 25%;
  position: fixed;
  right: -600px;
  animation: slide 0.5s forwards;
  height: 100%;
}
@-webkit-keyframes slide {
  100% {
    right: 0;
  }
}
@keyframes slide {
  100% {
    right: 0;
  }
}
.logout-container ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
}
.logout-container ul li {
  padding: 10px;
  color: #333;
  font-size: 14px !important;
  font-weight: 500;
  margin: 0 !important;
  cursor: pointer;
  width: 85%;
  border-bottom: 1px solid #eee;
}
.logout-container ul li:last-child {
  border: none !important;
}
.profile-pic img {
  width: 100%;
  height: 100%;
}
.mobile-dropdown {
  display: flex;
  align-items: center;
  gap: 5px;
}
.mobile-dropdown .btn {
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
}
.mobile-dropdown img {
  margin-left: 5px;
  width: 22px;
}

@media (max-width: 479px) and (min-width: 320px) {
}
</style>
