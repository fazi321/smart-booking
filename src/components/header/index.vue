<template>
  <header :class="['header', { active: active }]">
    <div class="container">
      <div :class="['main-container',{'set-lang': $t('lang') == 'ar'}]">
        <Logo />
        <Menu />
        <Profile />
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./Menu.vue";
import Logo from "./Logo.vue";
import Profile from "./ProfileLogin.vue";

export default {
  name: "webHeader",
  components: {
    Logo,
    Menu,
    Profile,
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99;
  background: #fff;
  top: 0;
  width: 100%;
  /* border-bottom: 1px solid #eee; */
  min-height: 70px;
  transition: all 0.5s;
  box-shadow: 0 -15px 15px 8px rgb(48 52 65 / 50%);
}

header.active {
  background: #fff;
}

.header .container {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.set-lang{
  flex-direction:row-reverse!important;
}
.main-container section:nth-child(2),
.main-container section:nth-child(3) {
  position: relative;
  /* top:8px; */
}
</style>
