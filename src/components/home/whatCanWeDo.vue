<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>{{$t('homePage.whatWeDo')}}</h1>
    </div>
    <div >
      <!-- <WhatWeDo v-for="(item, index) in WhatWeDo" :dataItem="item" :key="index" /> -->
      <WhatWeDo />
    </div>
  </div>
</template>

<script>
import WhatWeDo from "@/components/common/WeDo.vue";
export default {
  name: "WhatCanWeDo",
  components: {
    WhatWeDo
  },
  data() {
    return {
      // WhatWeDo: [
      //   { title: this.$t('homePage.InstantReservation'), image: "reserve.svg", text: "Your reservation is 100% guaranteed." },
      //   { title: this.$t('homePage.CustomerService'), image: "customer.svg", text: "We support you throughout the week" },
      //   { title: this.$t('homePage.Advancedandintelligentsearch'), image: "search.svg", text: "All kinds of search at your fingertips" },
      //   { title: this.$t('homePage.SafePaymentMethods'), image: "payment.svg", text: this.$t('homePage.MultipleandsecurepaymentMethods') },
      //   { title: this.$t('homePage.TrustedReviews'), image: "review.svg", text: "Certified reviews and comments" },
      //   { title: this.$t('homePage.Photosandvideos'), image: "photo.svg", text: this.$t('homePage.Seephotosfromyourplace') }
      // ]
    };
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
}
.smart-booking {
  padding: 10px 0;
}
</style>