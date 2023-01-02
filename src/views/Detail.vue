<template>
  <default-layout>
    <HotelCard />
    <div :class="['details-main container',{'set-dir':$t('lang') == 'ar'}]">
      <section :class="['detail-left', {'set-lang':$t('lang') == 'ar'}]">
        <HotelDescription @show="showModel" />
        <VendorModel
          :model="vendorReviewModel"
          @close="closeVendorModel"
          @openReview="addReviewModel"
        />
        <AddReview :model="addReview" @close="closeAddModel" />
        <DetailTabs />
      </section>
      <section class="detail-right" v-if="$route.params.cat != 'services'">
        <FormBook />
      </section>
      <!-- <section class="detail-right" v-if="$route.params.cat != 'services' && storeState?.bookingSetting?.bookingType == '24-Hour'">
        <RequestBooking  />
      </section> -->
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HotelCard from "@/components/hotelDetail/hotelCard.vue";
import HotelDescription from "@/components/hotelDetail/detailDescription.vue";
import DetailTabs from "@/components/hotelDetail/tabs.vue";
import FormBook from "@/components/hotelDetail/bookForm.vue";
import VendorModel from "@/components/hotelDetail/vendorProfileModel.vue";
import AddReview from "@/components/hotelDetail/AddReview.vue";
// import RequestBooking from "@/components/RequestBooking.vue";

export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout,
    HotelCard,
    HotelDescription,
    DetailTabs,
    FormBook,
    VendorModel,
    AddReview,
    // RequestBooking
  },
  data() {
    return {
      vendorReviewModel: false,
      addReview: false,
    };
  },
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    showModel() {
      this.vendorReviewModel = !this.vendorReviewModel;
    },
    addReviewModel() {
      this.addReview = !this.addReview;
    },
    closeVendorModel() {
      this.vendorReviewModel = false;
    },
    closeAddModel() {
      this.addReview = false;
    },
    async getDetail() {
      var { cat, id } = this.$route.params;
      var cate =
        cat != "farms" && cat != "resorts" && cat != "services" && cat != 'wedding-halls'
          ? cat.slice(0, -1) :cat == 'wedding-halls'? cat = 'weddinghalls' :cat;
      var q = { cate, id };
      this.$store.dispatch("details/getDetail", q);
    },
  },
};
</script>
<style scoped>
.details-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 50px;
}
.details-main .detail-left {
  width: 66%;
}
.details-main .detail-right {
  width: 28%;
}
.set-lang{
  direction:rtl;
}
.set-dir{
  flex-direction: row-reverse;
}

@media ((max-width: 700px)) and (min-width: 320px) {
  .details-main .detail-left {
    width: 100%;
    margin: 10px;
  }
  .details-main .detail-right {
    width: 100%;
    margin: 10px;
  }
}
</style>
