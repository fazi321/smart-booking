<template>
  <section class="nav">
    <ul>
      <li :class="{ active: $route.path == '/' }">
        <router-link to="/">Home</router-link>
      </li>
      <li :class="{ active: $route.path == '/category' }" class="category-menu">
        <router-link class="category" to="/">Categories</router-link>
        <div class="sub-menu">
          <ul>
            <!-- <li>
              <router-link to="/">Home</router-link>
            </li> -->
            <li :class="{ active: $route.params.category == 'apartments' }" @click="addRecent('apartments')">
              <router-link to="/apartments?page=1">Apartments</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'farms' }" @click="addRecent('farms')">
              <router-link to="/farms?page=1">Farms</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'hotels' }" @click="addRecent('hotels')">
              <router-link to="/hotels?page=1">Hotels</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'resorts' }" @click="addRecent('resorts')">
              <router-link to="/resorts?page=1">Resorts</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'lounges' }" @click="addRecent('lounges')">
              <router-link to="/lounges?page=1">Lounges</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'stadiums' }" @click="addRecent('stadiums')">
              <router-link to="/stadiums?page=1">Stadium</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'Camps' }" @click="addRecent('Camps')">
              <router-link to="/Camps?page=1">Camps</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'wedding-halls' }" @click="addRecent('wedding-halls')">
              <router-link to="/wedding-halls?page=1">Wedding Halls</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'chalets' }" @click="addRecent('chalets')">
              <router-link to="/chalets?page=1">Chalets</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li :class="{ active: $route.params.category == 'privacy' }" @click="addRecent('privacy')">
        <router-link to="/privacy?page=1">Privacy Policy</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'faqs' }" @click="addRecent('faqs')">
        <router-link to="/faqs?page=1">FAQs</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'term-conditions' }" @click="addRecent('term-conditions')">
        <router-link to="/term-conditions?page=1">Term of Use</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'about' }" @click="addRecent('about')">
        <router-link to="/about?page=1">About Us</router-link>
      </li>
      <!-- <li :class="{ active: $route.params.category == 'lounges' }" @click="addRecent('lounges')">
        <router-link to="/lounges?page=1">Lounges</router-link>
      </li> -->
    </ul>
  </section>
</template>

<script>
export default {
  name: "webMenu",
  methods: {
    addRecent(slug) {
      localStorage.setItem("slug", slug);
    },
  },
};
</script>

<style scoped>
.category-menu {
  position: relative;
}

.category-menu:hover .sub-menu {
  display: block !important;
  position: absolute;
  z-index: 9;
  top: 25px;
  /* transform: translateY(20px);
  opacity: 0;
  animation-duration: 250ms;
  animation-name: ProMoveUp;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards; */
}

.category-menu .sub-menu {
  display: none;
}

.sub-menu ul {
  padding: 10px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  width: 140px;
}

.sub-menu ul li {
  padding: 10px !important;
  border-bottom: 1px solid #eee;
  width: 115px;
  text-align: left;
}
.sub-menu ul li:last-child{
  border-bottom: none!important;
}
.sub-menu ul li a {
  padding: 10px !important;
  letter-spacing: 0.38px;
  color: gray ;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
}

.sub-menu ul li a:hover {
  color: #febb12 !important;
}

.category::after {
  font-weight: 600;
  font-style: normal;
  font-family: FontAwesome;
  border: none;
  content: "\f107";
  font-size: 12px;
  top: 50%;
  right: 24px;
  margin-top: -6px;
  margin-left: 5px;
}

.nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* position:relative;
  left:30px; */
}

/* .nav ul li {
  padding: 10px 25px;
} */

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
