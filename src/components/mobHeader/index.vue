<template>
  <header>
    <div class="container">
      <div :class="[{ active: transparent }, 'mobile-header header disktop']">
        <Logo/>
        <section class="navigation-profile">
          <div class="nav">
            <div class="login-container">
              <div class="profile-pic shadowActive" @click="menuModelShow">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    :fill="transparent ? '#fff' : '#000'"
                    d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
                  />
                </svg>
              </div>
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

export default {
  name: "MobileIndex",
  components: {
    Logo,
    MobMenu,
  },
  data() {
    return {
      openSidebar: false,
    };
  },
  methods: {
    menuModelShow() {
      this.openSidebar = !this.openSidebar;
    },
  },
};
</script>

<style scoped>
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
.profile-pic {
  overflow: hidden;
  width: 30px;
  height: 30px;
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
</style>