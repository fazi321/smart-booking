<template>
  <header :class="['header', { active: active }]">
    <div class="container">
      <Logo />
      <Menu />
    </div>
  </header>
</template>

<script>
import Menu from "./Menu.vue";
import Logo from "./Logo.vue";

export default {
  name: "webHeader",
  components: {
    Logo,
    Menu,
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
  background-color: rgba(34, 34, 34, 0.1);
  /* position: fixed; */
  width: 100%;
  border-bottom: 1px solid #eee;
  min-height: 70px;
  transition: all 0.5s;
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
</style>
