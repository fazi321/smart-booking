<template>
  <section class="container">
    <div class="hotel-wrapper">
      <div class="title">
        <h2 v-if="storeState && storeState.description">
          {{ storeState.description.nameInEnglish }}
        </h2>
      </div>
      <div class="overview">
        <div class="icon">
          <img src="../../assets/images/place.svg" alt />
          <p v-if="storeState && storeState.address">
            {{ storeState.address.city }}
          </p>
        </div>
        <div class="icon">
          <img src="../../assets/images/star.svg" alt />
          <p>4.5 (23)</p>
        </div>
        <div class="icon">
          <img src="../../assets/images/sq.svg" alt />
          <p>2400 sq2</p>
        </div>
        <div class="icon">
          <img src="../../assets/images/family.svg" alt />
          <p v-if="storeState && storeState.bookingSetting">
            {{ storeState.bookingSetting.bookingFor }}
          </p>
        </div>
        <div class="icon">
          <img src="../../assets/images/glob.svg" alt />
          <p>www.lorem.com</p>
        </div>
      </div>
      <div class="hotel-images" v-if="storeState && storeState.description">
        <div class="big-img">
          <img
            :src="storeState.description.images[0]"
            v-if="storeState.description.images[0] && checkLink(storeState.description.images[0])"
            alt=""
          />
          <img src="../../assets/images/hotel-big.png" v-else />
        </div>
        <div class="small-images">
          <div>
            <img
              :src="storeState.description.images[1]"
              v-if="storeState.description.images[1] && checkLink(storeState.description.images[1])"
              alt=""
            />
            <img src="../../assets/images/hotel-mid1.png" v-else />
            <img
              :src="storeState.description.images[2]"
              v-if="storeState.description.images[2] && checkLink(storeState.description.images[2])"
              alt=""
            />
            <img src="../../assets/images/hotel-mid2.png" v-else />
          </div>
          <div>
            <img
              :src="storeState.description.images[3]"
              v-if="storeState.description.images[3] && checkLink(storeState.description.images[3])"
              alt=""
            />
            <img src="../../assets/images/hotel-mid3.png" v-else />
            <img
              :src="storeState.description.images[4]"
              v-if="storeState.description.images[4] && checkLink(storeState.description.images[4])"
              alt=""
            />
            <img src="../../assets/images/hotel-mid4.png" v-else />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HotelCard",
  computed: {
    storeState: function () {
      return this.$store.state.details && this.$store.state.details.details;
    },
  },
  methods: {
    checkLink(isLink) {
      if (
        new RegExp(
          "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
        ).test(isLink)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.hotel-wrapper .title {
  padding: 15px 0;
}
.hotel-wrapper .title h2 {
  text-align: left;
  letter-spacing: 0.6px;
  color: #231f20;
  opacity: 0.8;
  font-size: 18px;
  padding-top: 10px;
}
.overview {
  display: flex;
  padding: 20px 0;
}
.overview .icon {
  display: flex;
  align-items: center;
  margin-right: 40px;
}
.overview .icon img {
  height: 20px;
  width: 20px;
  margin-right: 15px;
}
.overview .icon p {
  text-align: center;
  letter-spacing: 0px;
  color: #0e4763;
  opacity: 1;
  font-size: 14px;
}
.hotel-images {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.hotel-images img{
  border-radius: 14px;
}
.hotel-images .big-img {
  width: 38%;
}
.hotel-images .big-img img {
  height: 339px;
}
.small-images {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.small-images div {
  width: 48.5%;
}
.small-images div img {
  height: 160px;
  margin-bottom: 15px;
}
</style>
