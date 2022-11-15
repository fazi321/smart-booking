<template>
  <section :class="['login-signup', { active: model }]">
    <div class="primary-login">
      <div class="main-login">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Vendor Profile</h1>
        </div>
        <section class="profile-container">
          <div class="profile-details">
            <div class="logo-close">
              <div class="logo">
                <img src="../../assets/images/profile-image.svg" alt="" />
              </div>
            </div>
            <div class="profile-name">
              <h4>Jhon Phillips</h4>
            </div>
            <div class="detail-profile-bottom">
              <div>
                <p>Joined</p>
                <h1>08, Aug, 2022</h1>
              </div>
              <div>
                <p>Services</p>
                <h1>3</h1>
              </div>
            </div>
            <div class="rating-main">
              <div class="rating">
                <span class="star">&starf;</span>
                <span class="star">&starf;</span>
                <span class="star">&starf;</span>
                <span class="star">&starf;</span>
                <span class="star gray">&starf;</span>
                <span class="rating-counter">(381)</span>
              </div>
            </div>
          </div>
        </section>
        <div class="login-form">
          <ReviewsVendor @openReview="showModel"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReviewsVendor from "@/components/ReviewsVendor";
export default {
  name: "vendorProfileModle",
  props: ["model"],
  components: {
    ReviewsVendor,
  },
  data() {
    return {};
  },
  methods: {
    showModel(){
      this.$emit('openReview')
    },
    close() {
      this.$emit('close')
    },
  },
};
</script>

<style scoped>
.login-signup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  visibility: hidden;
}
.login-signup.active {
  visibility: visible;
}
.primary-login {
  width: 623px;
  background: #fff;
  height: fit-content;
  padding: 25px 15px;
  border-radius: 20px;
  transition: 0.2s linear;
  transform: translateY(-100%);
}
.login-signup.active .primary-login {
  transform: translateY(0);
}
.logo-close {
  display: flex;
  justify-content: center;
  position: relative;
}
.logo-close .logo {
  width: 110px;
  overflow: hidden;
  border-radius: 50%;
  height: 110px;
}
img {
  width: 100%;
  height: 100%;
}
.close-icon {
  cursor: pointer;
  top: -10px;
  position: absolute;
  right: 0;
  width: 35px;
  height: 35px;
}
.headings {
  text-align: center;
  padding: 5px;
  margin: 0;
}
.headings h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 18px;
}
.headings h4 {
  font-weight: 500;
  font-size: 16px;
}
.profile-container {
  display: flex;
  justify-content: center;
}
.profile-container .profile-details {
  width: 38%;
}
.detail-profile-bottom {
  display: flex;
  justify-content: space-between;
}
.detail-profile-bottom > div {
  width: 50%;
}
.detail-profile-bottom p {
  font-size: 14px;
  color: #c9c9c9;
  margin-bottom: 10px;
}
.detail-profile-bottom h1 {
  font-size: 14px;
  color: #000;
}
.profile-container .profile-name {
  margin: 14px 0;
}
.rating-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.rating {
  text-align: left;
  padding: 15px 0;
  display: flex;
  align-items: center;
}
.rating .star {
  font-size: 24px;
  color: #fdc350;
  margin-right: 5px;
  cursor: pointer;
  line-height: 1;
}
.rating .gray {
  color: #efefef !important;
}
.rating .rating-counter {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  font-size: 10px;
  top: -2px;
  position: relative;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
  .headings h1 {
    font-size: 20px;
  }
}
</style>
