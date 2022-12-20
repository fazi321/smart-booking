<template>
  <section class="nav">
    <ul :class="{'lang':$t('lang') == 'ar'}">
      <li :class="{ active: $route.path == '/' }">
        <router-link to="/">{{ $t("header.home") }}</router-link>
      </li>
      <li :class="{ active: $route.path == '/category' }" class="category-menu">
        <router-link class="category" to="/">{{
          $t("header.categories")
        }}</router-link>
        <div :class="['sub-menu', { 'set-language': $t('lang') == 'ar' }]">
          <ul>
            <!-- <li>
              <router-link to="/">Home</router-link>
            </li>-->
            <!-- <li
              :class="{ active: $route.params.category == 'apartments' }"
              @click="addRecent('apartments')"
            >
              <router-link to="/apartments?page=1">{{$t('header.apartments')}}</router-link>
            </li>
            <li :class="{ active: $route.params.category == 'farms' }" @click="addRecent('farms')">
              <router-link to="/farms?page=1">{{$t('header.farms')}}</router-link>
            </li>
            <li
              :class="{ active: $route.params.category == 'hotels' }"
              @click="addRecent('hotels')"
            >
              <router-link to="/hotels?page=1">{{$t('header.hotels')}}</router-link>
            </li>
            <li
              :class="{ active: $route.params.category == 'resorts' }"
              @click="addRecent('resorts')"
            >
              <router-link to="/resorts?page=1">{{$t('header.resorts')}}</router-link>
            </li> -->
            <!-- <li
              :class="{ active: $route.params.category == 'lounges' }"
              @click="addRecent('lounges')"
            >
              <router-link to="/lounges?page=1">{{
                $t("header.lounges")
              }}</router-link>
            </li> -->
            <li
              :class="{ active: $route.params.category == 'stadiums' }"
              @click="addRecent('stadiums')"
            >
              <router-link to="/stadiums?page=1">{{
                $t("header.stadium")
              }}</router-link>
            </li>
            <li
              :class="{ active: $route.params.category == 'Camps' }"
              @click="addRecent('Camps')"
            >
              <router-link to="/Camps?page=1">{{
                $t("header.camps")
              }}</router-link>
            </li>
            <li
              :class="{ active: $route.params.category == 'wedding-halls' }"
              @click="addRecent('wedding-halls')"
            >
              <router-link to="/wedding-halls?page=1">{{
                $t("header.weddingHalls")
              }}</router-link>
            </li>
            <li
              :class="{ active: $route.params.category == 'chalets' }"
              @click="addRecent('chalets')"
            >
              <router-link to="/chalets?page=1">{{
                $t("header.chalets")
              }}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li
        :class="{ active: $route.params.category == 'apartments' }"
        @click="addRecent('apartments')"
      >
        <router-link to="/apartments?page=1">{{
          $t("header.apartments")
        }}</router-link>
      </li>
      <li
        :class="{ active: $route.params.category == 'farms' }"
        @click="addRecent('farms')"
      >
        <router-link to="/farms?page=1">{{ $t("header.farms") }}</router-link>
      </li>
      <li
        :class="{ active: $route.params.category == 'hotels' }"
        @click="addRecent('hotels')"
      >
        <router-link to="/hotels?page=1">{{ $t("header.hotels") }}</router-link>
      </li>
      <li
        :class="{ active: $route.params.category == 'resorts' }"
        @click="addRecent('resorts')"
      >
        <router-link to="/resorts?page=1">{{
          $t("header.resorts")
        }}</router-link>
      </li>
      <li
        :class="{ active: $route.params.category == 'lounges' }"
        @click="addRecent('lounges')"
      >
        <router-link to="/lounges?page=1">{{
          $t("header.lounges")
        }}</router-link>
      </li>
      <!-- <li :class="{ active: $route.params.category == 'privacy' }" @click="addRecent('privacy')">
        <router-link to="/privacy?page=1">{{$t("header.privacy")}}</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'faqs' }" @click="addRecent('faqs')">
        <router-link to="/faqs?page=1">{{$t("header.faqs")}}</router-link>
      </li>
      <li
        :class="{ active: $route.params.category == 'term-conditions' }"
        @click="addRecent('term-conditions')"
      >
        <router-link to="/term-conditions?page=1">{{$t("header.termOfUse")}}</router-link>
      </li>
      <li :class="{ active: $route.params.category == 'about' }" @click="addRecent('about')">
        <router-link to="/about?page=1">{{$t("header.aboutUs")}}</router-link>
      </li> -->
      <!-- <li :class="{ active: $route.params.category == 'lounges' }" @click="addRecent('lounges')">
        <router-link to="/lounges?page=1">Lounges</router-link>
      </li>-->
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
.set-language li {
  text-align: right !important;
}
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
.sub-menu ul li:last-child {
  border-bottom: none !important;
}
.sub-menu ul li a {
  padding: 10px !important;
  letter-spacing: 0.38px;
  color: gray;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
}

.sub-menu ul li a:hover {
  color: #febb12 !important;
}

.category-menu:hover .category {
  color: #febb12 !important;
}
.category-menu:hover .category::after {
  color: #febb12 !important;
  border-right: 2px solid #febb12 !important;
  border-bottom: 2px solid #febb12 !important;
}

.category::after {
  background-color: white;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
  width: 5px;
  display: inline-block;
  height: 5px;
  transform: rotate(45deg);
  -webkit-transform: scale(1) rotate(45deg) translate(0px, 0px);
  -moz-transform: rotate(45deg) scale(1);
  -o-transform: rotate(45deg) scale(1);
  /* margin-top: 10px; */
  content: "";
  margin-left: 5px;
  top: 5px;
  position: absolute;
  right: 8px;
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
.lang{
  flex-direction: row-reverse;
}
@media only screen and (max-width: 1199px) {
  .nav {
    display: none;
  }
}
</style>
