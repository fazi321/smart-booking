<template>
  <section :class="['card-container',{'rtl-set':$t('lang') == 'ar'}]">
    <router-link to="" class="what-card">
      <div class="image">
        <img :src="require(`../../assets/images/reserve.svg`)" />
      </div>
      <div class="detail">
        <h5>{{ $t("homePage.InstantReservation") }}</h5>
        <p>Your reservation is 100% guaranteed.</p>
      </div>
    </router-link>
    <router-link to="" class="what-card">
      <div class="image">
        <img :src="require(`../../assets/images/customer.svg`)" />
      </div>
      <div class="detail">
        <h5>{{ $t("homePage.CustomerService") }}</h5>
        <p>We support you throughout the week</p>
      </div>
    </router-link>
    <router-link to="" class="what-card">
      <div class="image">
        <img :src="require(`../../assets/images/search.svg`)" />
      </div>
      <div class="detail">
        <h5>{{ $t("homePage.Advancedandintelligentsearch") }}</h5>
        <p>All kinds of search at your fingertips</p>
      </div>
    </router-link>
    <router-link to="" class="what-card">
      <div class="image">
        <img :src="require(`../../assets/images/payment.svg`)" />
      </div>
      <div class="detail">
        <h5>{{ $t("homePage.SafePaymentMethods") }}</h5>
        <p>{{ $t("homePage.MultipleandsecurepaymentMethods") }}</p>
      </div>
    </router-link>
    <router-link to="" class="what-card">
      <div class="image">
        <img :src="require(`../../assets/images/review.svg`)" />
      </div>
      <div class="detail">
        <h5>{{ $t("homePage.TrustedReviews") }}</h5>
        <p>Certified reviews and comments</p>
      </div>
    </router-link>
    <router-link to="" class="what-card">
      <div class="image">
        <img :src="require(`../../assets/images/review.svg`)" />
      </div>
      <div class="detail">
        <h5>{{ $t("homePage.Photosandvideos") }}</h5>
        <p>{{ $t("homePage.Seephotosfromyourplace") }}</p>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ["dataItem"],
};
</script>

<style scoped>
.what-card {
  display: flex;
  align-items: center;
  width: 30%;
  margin: 10px 0 25px 0;
}
.what-card .image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px #0000001a;
  opacity: 1;
  margin-right: 20px;
}
.what-card .image img {
  width: 30px;
}
.what-card .detail {
  padding: 5px 0 10px 0;
  line-height: 1.8;
  width: 80%;
}
.what-card .detail h5 {
  font-size: 14px;
  color: #000000;
  opacity: 0.8;
  text-align: left;
  /* line-height: 1.5; */
}
.what-card .detail p {
  font-size: 12px;
  color: #000000;
  opacity: 0.6;
  text-align: left;
}
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
}
.rtl-set .what-card .detail h5,.rtl-set .what-card .detail p{
   text-align: right;
}
.rtl-set .what-card .image{
  margin-left:20px;
  margin-right:0;
}
@media (max-width: 479px) and (min-width: 320px) {
  .what-card {
    width: 100%;
    margin: 0 10px 20px 10px;
  }
}
</style>
