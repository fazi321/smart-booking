<template>
  <section class="btns">
    <section v-if="!$store.state.auth.user" :class="{ 'set-lang': $t('lang') == 'ar' }">
      <button class="btn btn-transparent" @click="vendorModelShow">
        {{ $t("header.becomeVendor") }}
      </button>
      <button class="btn btn-filled" @click="loginModelShow">
        {{ $t("header.login") }}
      </button>
      <LanguageDrop />
      <LoginModel :model="loginModel || $store.state.auth.loginModel" />
      <SignUpModel :model="signUpModel" @getUserName="userModel" />
      
    </section>
    <!-- after login -->
    <section
      v-else
      :class="['dropdown-container', { 'set-lang': $t('lang') == 'ar' }]"
    >
      <UserModel :model="userName" />
      <button
        class="btn btn-transparent"
        v-if="
          $store.state.auth.user.verify &&
          $store.state.auth.user.role != 'Vender'
        "
        @click="vendorModelShow"
      >
        {{ $t("header.becomeVendor") }}
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
      >
        {{ $t("header.addService") }}
      </button>
      <div id="demo">
        <div class="avatar" @click="toggleDropdown">
          <img
            src="../../assets/images/profile.svg"
            alt="avatar"
            v-if="!$store.state.auth.user || !$store.state.auth.user.file"
          />
          <img :src="$store.state.auth.user.file" alt="avatar" v-else />
        </div>
        <DropDownMenu v-if="dropDown" />
      </div>
      <NotificationsHeader />
      <LanguageDrop />
      <AddServiceModel :model="serviceModel" />
      <VendorModel :model="vendorModel || $store.state.details.vendor" />
    </section>
  </section>
</template>

<script>
import LoginModel from "@/components/models/LoginModel.vue";
import SignUpModel from "@/components/models/SignUpModel.vue";
import VendorModel from "@/components/models/VendorModel.vue";
import UserModel from "@/components/models/UserModel.vue";
import AddServiceModel from "@/components/models/AddServiceModel.vue";
import LanguageDrop from "@/components/common/Langdrop.vue";
import NotificationsHeader from "../NotificationsHeader.vue";
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
    UserModel,
    NotificationsHeader,
    LanguageDrop,
  },
  data() {
    return {
      loginModel: false,
      signUpModel: false,
      vendorModel: false,
      serviceModel: false,
      dropDown: false,
      user: false,
      userName: false,
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
  },
  created() {
    let auth = Cookies.get("Authorization");
    if (!auth) {
      this.user = false;
    } else {
      this.user = true;
    }
  },
};
</script>

<style scoped>
#demo {
  display: flex;
  align-items: center;
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 38px;
  background: #fff;
  height: 38px;
  cursor: pointer;
  box-shadow: 0 2px 5px #888888a6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 1px;
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
  align-items: center;
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
.set-lang {
  flex-direction: row-reverse;
}
.set-lang .btn{
  margin-right:5px;
}
.set-lang #demo {
  margin: 0px 10px;
}

</style>
