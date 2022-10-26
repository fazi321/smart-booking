<template>
  <section class="dropdown">
    <ul>
      <li>
        <router-link to="/my-profile">
          <span>My Profile</span>
        </router-link>
      </li>
      <li>
        <router-link to="/messages">
          <span>Messages</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>Balance</span>
          <span
            >SAR
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
          <span>My Services</span>
        </router-link>
        <router-link
          to="/my-bookings"
          v-else
        >
          <span>My Bookings</span>
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
          <span>Service Bookings</span>
        </router-link>
        <router-link
          to="/service-booking"
          v-else
        >
          <span class="active-color">Become Vendor</span>
        </router-link>
      </li>
      <li>
        <router-link to="/favourites">
          <span>Favourites</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>Language</span>
          <span>Eng</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>Price Display</span>
          <span>SAR</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>Distance</span>
          <span>km</span>
        </router-link>
      </li>
      <li>
        <router-link to="/privacy">
          <span>Privacy Policy</span>
        </router-link>
      </li>
      <li>
        <router-link to="/faqs">
          <span>FAQs</span>
        </router-link>
      </li>
      <li>
        <router-link to="/term-conditions">
          <span>Term of Use</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <span>About Us</span>
        </router-link>
      </li>
      <li>
        <p @click="logOut">
          <span>Logout</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
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
.active-color{
  color:#FEBB12;
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
</style>
