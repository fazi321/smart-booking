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
          <h1>{{$t('detailPage.vendorProfile')}}</h1>
        </div>
        <section class="profile-container">
          <div class="profile-details">
            <div class="logo-close">
              <div class="logo">
                <img src="../../assets/images/profile-image.svg" alt="" />
              </div>
            </div>
            <div class="profile-name">
              <h4>{{ vendorInfo.firstName }} {{ vendorInfo.lastName }}</h4>
            </div>
            <div class="detail-profile-bottom">
              <div>
                <p>Joined</p>
                <h1>{{ formateDate(vendorInfo.requestedAt) }}</h1>
              </div>
              <div>
                <p>Services</p>
                <h1>{{ vendorInfo.numberOfservices }}</h1>
              </div>
            </div>
            <div class="rating-main" v-if="storeState && storeState.numReviews">
              <div class="rating">
                <span :class="['star', { yellow: storeState.rating >= 1 }]"
                  >&starf;</span
                >
                <span :class="['star', { yellow: storeState.rating >= 2 }]"
                  >&starf;</span
                >
                <span :class="['star', { yellow: storeState.rating >= 3 }]"
                  >&starf;</span
                >
                <span :class="['star', { yellow: storeState.rating >= 4 }]"
                  >&starf;</span
                >
                <span :class="['star', { yellow: storeState.rating >= 5 }]"
                  >&starf;</span
                >
                <span class="rating-counter">({{ storeState.rating }})</span>
              </div>
            </div>
          </div>
        </section>
        <div class="login-form">
          <ReviewsVendor @openReview="showModel" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReviewsVendor from "@/components/ReviewsVendor";
export default {
  name: "vendorProfileModel",
  props: ["model"],
  components: {
    ReviewsVendor,
  },
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
    user: function () {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      vendorInfo: {},
    };
  },
  methods: {
    formateDate(dateString) {
      if (!dateString) return;
      function join(t, a, s) {
        function format(m) {
          let f = new Intl.DateTimeFormat("en", m);
          return f.format(t);
        }
        return a.map(format).join(s);
      }
      let a = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
      let s = join(new Date(dateString), a, ",");
      return s;
    },
    async getReviews() {
      if(!this.storeState.vender) return
      try {
        var res = await this.$axios.get(
          `vender/profile/${this.storeState.vender}`
        );
        if (res.data) {
          this.vendorInfo = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    showModel() {
      this.$emit("openReview");
    },
    close() {
      this.$emit("close");
    },
  },
  watch: {
    model: {
      immediate: true,
      handler() {
        this.getReviews();
      },
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
  z-index: 80;
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
  color: #efefef;
  margin-right: 5px;
  cursor: pointer;
  line-height: 1;
}
.rating .yellow {
  color: #fdc350 !important;
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
