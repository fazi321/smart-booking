<template>
  <section :class="['dropdown', {'set-langauge': $t('lang') == 'ar'}]">
    <ul>
      <li>
        <router-link to="/my-profile">
          <span>{{ $t("menuDropdown.myProfile") }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/messages">
          <span>{{ $t("menuDropdown.messages") }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>{{ $t("menuDropdown.balance") }}</span>
          <span
            >{{ $t("menuDropdown.priceSymbol") }}
            {{ $store.state.auth.user && $store.state.auth.user.balance }}</span
          >
        </router-link>
      </li>
      <li>
        <router-link
          to="/my-services"
          v-if="
            ($store.state.auth.user.verify &&
              $store.state.auth.user.host &&
              $store.state.auth.user.role == 'Vender') ||
            ($store.state.auth.user.verify &&
              $store.state.auth.user.company &&
              $store.state.auth.user.role == 'Vender')
          "
        >
          <span>{{ $t("menuDropdown.myServices") }}</span>
        </router-link>
        <router-link to="/my-bookings">
          <span>{{ $t("menuDropdown.myBookings") }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/booking-request" v-if="
            ($store.state.auth.user.verify &&
              $store.state.auth.user.host &&
              $store.state.auth.user.role == 'Vender') ||
            ($store.state.auth.user.verify &&
              $store.state.auth.user.company &&
              $store.state.auth.user.role == 'Vender')
          ">
          <span>{{ $t("menuDropdown.bookingRequest") }}</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/service-booking"
          v-if="
            ($store.state.auth.user.verify &&
              $store.state.auth.user.host &&
              $store.state.auth.user.role == 'Vender') ||
            ($store.state.auth.user.verify &&
              $store.state.auth.user.company &&
              $store.state.auth.user.role == 'Vender')
          "
        >
          <span>{{ $t("menuDropdown.serviceBookings") }}</span>
        </router-link>
        <div @click="becomeVendor" v-else>
          <span class="active-color">{{
            $t("menuDropdown.becomeVendor")
          }}</span>
        </div>
      </li>
      <li>
        <router-link to="/favourites">
          <span>{{ $t("menuDropdown.favourites") }}</span>
        </router-link>
      </li>
      <li>
        <div @click="language">
          <span>{{ $t("menuDropdown.language") }}</span>
          <span>{{ langLoading ? "---" : lang ? "Eng" : "عربى" }}</span>
        </div>
      </li>
      <li>
        <router-link to="#demo">
          <span>{{ $t("menuDropdown.priceDisplay") }}</span>
          <span>{{ $t("menuDropdown.priceSymbol") }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>{{ $t("menuDropdown.distance") }}</span>
          <span>{{ $t("menuDropdown.km") }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/privacy">
          <span>{{ $t("header.privacy") }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/faqs">
          <span>{{ $t("header.faqs") }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/term-conditions">
          <span>{{ $t("header.termOfUse") }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <span>{{ $t("header.aboutUs") }}</span>
        </router-link>
      </li>
      <li>
        <p @click="logOut">
          <span>{{ $t("menuDropdown.logout") }}</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lang: false,
      langLoading: false,
    };
  },
  methods: {
    language() {
      this.langLoading = true;
      setTimeout(() => {
        this.lang = !this.lang;
        this.$i18n.locale = this.lang ? "en" : "ar";
        this.langLoading = false;
      }, 1000);
    },
    becomeVendor() {
      this.$store.commit("details/SET_V_MODEL", true);
    },
    logOut() {
      this.$store.dispatch("auth/logOut");
      this.$axios.defaults.headers.common["Authorization"] = "";
      this.$parent.dropDown = false;
      this.$swal({
        icon: "success",
        title: "Success!",
        showConfirmButton: false,
        timer: 3000,
      });
      setTimeout(() => {
        this.$router.push("/");
      }, 2000);
    },
  },
};
</script>

<style scoped>
.active-color {
  color: #febb12;
}
.dropdown {
  position: absolute;
  background: #fff;
  box-shadow: 0px 0px 7px 0px #adadada6;
  width: 160px;
  text-align: left;
  padding: 10px 14px;
  border-radius: 14px;
  z-index: 50;
  right: 35px;
  top: 50px;
  min-height: 503px;
}
.dropdown ul li > div,
.dropdown ul li a,
.dropdown ul li p {
  color: #828282;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 10px 0;
  cursor: pointer;
}
.dropdown ul li a span:nth-child(2) {
  color: #febb12;
}
@media (max-width: 700px) and (min-width: 320px) {
  .dropdown{
    right: 10px;
    top: 40px;
  }
}
</style>
