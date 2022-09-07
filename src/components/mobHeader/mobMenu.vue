<template>
  <div class="logout-container" id="slide">
    <div class="logout-inner">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt="" />
      </div>
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/hotel">Apartments</router-link></li>
        <li><router-link to="/hotel">Farms</router-link></li>
        <li><router-link to="/hotel">Hotels</router-link></li>
        <li><router-link to="/hotel">Resorts</router-link></li>
        <li><router-link to="#">Lounges</router-link></li>
      </ul>
      <ul>
        <li>Login</li>
        <li>Become Vendor</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  components: {},
  data() {
    return {};
  },
  methods: {
    closeSlide() {
      this.$parent.openSidebar = false;
    },
  },
};
</script>

<style scoped>
.hi p {
  width: 30px !important;
  height: 30px !important;
  border-radius: 50%;
  background: #333;
  color: #fff !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-transform: capitalize;
}
.logout-inner .close-icon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 15px 10px 0;
}
.logout-inner .close-icon img {
  width: 25px;
  height: 25px;
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
  z-index: 999;
  height: 100%;
}
.logout-inner {
  background: #fff;
  width: 90%;
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
  border-top: 2px solid #eee;
  padding: 10px;
}
.logout-container ul li {
  padding: 15px 10px;
  color: #333;
  font-size: 16px !important;
  font-weight: 600;
  margin: 0 !important;
  cursor: pointer;
  width: 85%;
  display: flex;
  align-items: center;
}
.logout-container ul li a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
}
.logout-container ul li img {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
.logout-container ul li svg {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}
.logout-container ul li:last-child {
  border: none !important;
}
.logout-text {
  color: #1783b4 !important;
}
.profile-pic img {
  width: 100%;
  height: 100%;
}
</style>