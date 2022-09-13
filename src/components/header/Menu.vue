<template>
  <section class="nav">
    <ul>
      <li :class="{ active: $route.path == '/' }">
        <router-link to="/">HOME</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'apartments' }">
        <router-link to="/apartments?page=1">Apartments</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'farms' }">
        <router-link to="/farms?page=1">Farms</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'hotels' }">
        <router-link to="/hotels?page=1">Hotels</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'resorts' }">
        <router-link to="/resorts?page=1">Resorts</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'lounges' }">
        <router-link to="/lounges?page=1">Lounges</router-link>
      </li>
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
  /* position:relative;
  left:30px; */
}

.nav ul li a {
  letter-spacing: 0.38px;
  color: gray;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 25px;
}

.nav ul li a:hover {
  color: #febb12;
}
.nav ul li.active a {
  color: #febb12;
}
@media only screen and (max-width: 1199px) {
  .nav {
    display: none;
  }
}
</style>
