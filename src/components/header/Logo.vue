<template>
  <section class="logo">
    <router-link to="/">
      <img src="../../assets/images/logo.png" alt="logo" />
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
  width: 62px;
  height: 56px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .logo {
    width: 55px;
    height: 50px;
  }
}
</style>
