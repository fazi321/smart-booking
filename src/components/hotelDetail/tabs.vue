<template>
  <section>
    <div class="detail-tabs">
      <div class="tabs">
        <p
          :class="{ active: tab == 'Facilities' }"
          @click="selected('Facilities')"
        >
          {{ $t("detailPage.facilities") }}
        </p>
        <p :class="{ active: tab == 'Reviews' }" @click="selected('Reviews')">
          {{ $t("detailPage.reviews") }}
        </p>
        <p :class="{ active: tab == 'Terms' }" @click="selected('Terms')">
          {{ $t("detailPage.terms") }}
        </p>
        <p :class="{ active: tab == 'Map' }" @click="selected('Map')">
          {{ $t("detailPage.map") }}
        </p>
      </div>
    </div>
    <Facilities v-if="tab == 'Facilities'" />
    <ReviewsDetail v-if="tab == 'Reviews'" :reviews="storeState.reviews" />
    <section
      v-if="tab == 'Terms'"
      :class="['terms', { 'set-lang': $t('lang') == 'ar' }]"
    >
      <div>
        <div class="title">
          <h1>{{ $t("pricing.cancellationPolicy") }}</h1>
        </div>
        <div :class="'primary-cards'" v-if="storeState.bookingSetting?.canellationPolicy == 'Flexible'">
          <!-- <div class="rounded-btn"></div> -->
          <div class="content">
            <h5>{{ $t("pricing.flexible") }}</h5>
            <h6>
              {{ $t("pricing.flexibleSubTitle") }}
            </h6>
          </div>
        </div>
        <div :class="'primary-cards'" v-if="storeState.bookingSetting?.canellationPolicy == 'Moderate'">
          <!-- <div class="rounded-btn"></div> -->
          <div class="content">
            <h5>{{ $t("pricing.moderate") }}</h5>
            <h6>
              {{ $t("pricing.moderateSubTitle") }}
            </h6>
          </div>
        </div>
        <div :class="'primary-cards'" v-if="storeState.bookingSetting?.canellationPolicy == 'Strict'">
          <!-- <div class="rounded-btn"></div> -->
          <div class="content">
            <h5>{{ $t("pricing.strict") }}</h5>
            <h6>
              {{ $t("pricing.strictSubTitle") }}
            </h6>
          </div>
        </div>
        <div :class="'primary-cards'" v-if="storeState.bookingSetting?.canellationPolicy == 'Non-Refundable'">
          <!-- <div class="rounded-btn"></div> -->
          <div class="content">
            <h5>{{ $t("pricing.nonRefundable") }}</h5>
            <h6>
              {{ $t("pricing.nonRefundableSubTitle") }}
            </h6>
          </div>
        </div>
      </div>
      <!-- <p v-else>{{ $t("error.notFound") }}</p> -->
    </section>
    <section v-if="tab == 'Map'" class="terms">
      <MapDetail />
    </section>
  </section>
</template>

<script>
import Facilities from "@/components/hotelDetail/facilities.vue";
import ReviewsDetail from "../ReviewsDetail.vue";
import MapDetail from "@/components/common/mapDetail.vue";
export default {
  name: "DetailTabs",
  components: {
    Facilities,
    MapDetail,
    ReviewsDetail,
  },
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
  },
  data() {
    return {
      tab: "Facilities",
    };
  },
  methods: {
    selected(val) {
      this.tab = val;
    },
  },
};
</script>

<style scoped>
.terms p {
  text-align: left;
  font-size: 14px;
  color: #c2c2c2;
  line-height: 1.5;
}
.detail-tabs {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.detail-tabs .tabs {
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 11px;
  opacity: 1;
  width: 65%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail-tabs .tabs p {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.4;
  font-size: 12px;
  padding: 15px 25px;
  cursor: pointer;
}
.detail-tabs .tabs .active {
  color: #000000;
  background-color: #febb12;
  border-radius: 12px;
  opacity: 1;
}
.detail-tabs .tabs p:hover,
.detail-tabs .tabs p:active {
  color: #000000;
  background-color: #febb12;
  border-radius: 12px;
  opacity: 1;
}
.set-lang p {
  text-align: right;
}
.primary-cards {
  width: 46%;
  height: 100px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 1px 11px -5px #0000006b;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0px 15px;
  text-align: left;
  margin-bottom: 22px;
  position: relative;
}
.booking-type .primary-cards .content {
  text-align: left;
  line-height: 1.5;
}
.primary-cards h5 {
  font-size: 14px;
}
.primary-cards h6 {
  color: #393f45;
  margin-top: 3px;
  font-size: 12px;
}
.set-lang .primary-cards {
  text-align: right;
}
.terms .title h1 {
  text-align: left;
  margin:10px 0;
}
.set-lang .terms .title h1 {
  text-align: right;
  margin:10px 0;
}
@media (max-width: 700px) and (min-width: 320px) {
  .detail-tabs .tabs {
    width: 100%;
  }
  .detail-tabs .tabs p {
    padding: 12px 15px;
  }
  .main-container-div .primary-container{
     width:89%!important;
  }
}
</style>
