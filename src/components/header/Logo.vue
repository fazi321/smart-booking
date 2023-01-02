<template>
  <section class="logo">
    <router-link to="/">
      <img src="../../assets/images/logo.svg" alt="logo" />
    </router-link>
  </section>
</template>

<script>
export default {
  name: "webLogo",
};
</script>

<style scoped>
.logo {
  width: 180px;
  position: relative;
  top: -6px;
}
@media (max-width: 700px) and (min-width: 320px) {
  .logo {
    width: 55px;
    height: 50px;
  }
}
</style>
