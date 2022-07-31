<template>
  <section class="nav">
    <ul>
      <li><router-link to="#">HOME</router-link></li>
      <li><router-link to="#">BRANDS</router-link></li>
      <li><router-link to="#">PRODUCTS</router-link></li>
      <li><router-link to="#">ABOUT US</router-link></li>
      <li><router-link to="#">HOW IT WORKS</router-link></li>
      <li><router-link to="#">NEWS</router-link></li>
      <li><router-link to="#">CONTACT US</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "webMenu",
};
</script>

<style scoped>
.nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.nav ul li a {
  letter-spacing: 0.38px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 15px;
}

.nav ul li a:hover {
  color: #f21822;
}
@media only screen and (max-width: 1199px) {
  .nav {
    display: none;
  }
}
</style>
