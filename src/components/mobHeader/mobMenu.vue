<template>
  <div class="logout-container" id="slide">
    <div class="logout-inner">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt="" />
      </div>

      <ul>
        <li :class="{ active: $route.path == '/' }">
          <router-link to="/">{{ $t("header.home") }}</router-link>
        </li>
        <li
          :class="{ active: $route.path == '/category' }"
          class="category-menu"
        >
          <div class="category" @click="openDropdown">
            {{ $t("header.categories") }}
          </div>
          <div class="sub-menu" v-if="dropDown">
            <ul class="sub-list">
              <!-- <li>
              <router-link to="/">Home</router-link>
            </li>-->

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
          <router-link to="/hotels?page=1">{{
            $t("header.hotels")
          }}</router-link>
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
        <!-- <li
          :class="{ active: $route.params.category == 'privacy' }"
          @click="addRecent('privacy')"
        >
          <router-link to="/privacy?page=1">{{$t('header.privacy')}}</router-link>
        </li>
        <li
          :class="{ active: $route.params.category == 'faqs' }"
          @click="addRecent('faqs')"
        >
          <router-link to="/faqs?page=1">{{$t('header.faqs')}}</router-link>
        </li>
        <li
          :class="{ active: $route.params.category == 'term-conditions' }"
          @click="addRecent('term-conditions')"
        >
          <router-link to="/term-conditions?page=1">{{$t('header.termOfUse')}}</router-link>
        </li>
        <li
          :class="{ active: $route.params.category == 'about' }"
          @click="addRecent('about')"
        >
          <router-link to="/about?page=1">{{$t('header.aboutUs')}}</router-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  components: {},
  data() {
    return {
      dropDown: false,
    };
  },
  methods: {
    openDropdown() {
      this.dropDown = !this.dropDown;
    },
    addRecent(slug) {
      localStorage.setItem("slug", slug);
    },
    closeSlide() {
      this.$parent.openSidebar = false;
    },
  },
  watch: {
    $route: {
      handler() {
        this.closeSlide();
      },
    },
  },
};
</script>

<style scoped>
.sub-list {
  border: unset !important;
}
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
  margin: 0 10px;
}
.logout-inner .close-icon img {
  width: 22px;
  height: 22px;
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
/* .category{
  text-align:left;
} */
.logout-container ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 2px solid #eee;
  padding: 10px;
}
.set-lang {
  align-items: flex-end !important;
}
.set-lang .category {
  text-align: right !important;
}
.logout-container ul li {
  padding: 15px 10px;
  color: #333;
  font-size: 16px !important;
  font-weight: 600;
  margin: 0 !important;
  cursor: pointer;
  /* width: 85%; */
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
