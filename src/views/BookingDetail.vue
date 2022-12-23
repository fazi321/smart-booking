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
      <section class="detail-right">
        <CancelBooking :detail="detail" />
      </section>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HotelCard from "@/components/hotelDetail/hotelCard.vue";
import HotelDescription from "@/components/hotelDetail/detailDescription.vue";
import DetailTabs from "@/components/hotelDetail/tabs.vue";
import CancelBooking from "@/components/CancelBooking.vue";
// import VendorModel from "@/components/hotelDetail/vendorProfileModel.vue"
import VendorModel from "@/components/hotelDetail/vendorProfileModel.vue";
import AddReview from "@/components/hotelDetail/AddReview.vue";

export default {
  name: "BookingDetail",
  data() {
    return {
      detail: [],
      vendorReviewModel: false,
      addReview: false,
    };
  },
  components: {
    DefaultLayout,
    HotelCard,
    HotelDescription,
    DetailTabs,
    CancelBooking,
    VendorModel,
    AddReview,
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
      var { id } = this.$route.params;
      try {
        const dataDetail = await this.$axios.get(`booking/${id}`);
        this.detail = dataDetail.data;
        this.$store.commit("details/SET_DATA", dataDetail.data.service.name);
      } catch (error) {
        console.log(error);
      }
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
  width: 33%;
}
@media (max-width: 479px) and (min-width: 320px) {
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
