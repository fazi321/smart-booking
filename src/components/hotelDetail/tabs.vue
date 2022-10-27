<template>
  <section>
    <div class="detail-tabs">
      <div class="tabs">
        <p
          :class="{ active: tab == 'Facilities' }"
          @click="selected('Facilities')"
        >
          Facilities
        </p>
        <p :class="{ active: tab == 'Reviews' }" @click="selected('Reviews')">
          Reviews
        </p>
        <p :class="{ active: tab == 'Terms' }" @click="selected('Terms')">
          Terms & Conditions
        </p>
        <p :class="{ active: tab == 'Map' }" @click="selected('Map')">Map</p>
      </div>
    </div>
    <Facilities v-if="tab == 'Facilities'" />
    <ReviewsDetail v-if="tab == 'Reviews'" />
    <section v-if="tab == 'Terms'" class="terms">
      <p v-if="storeState.terms">{{ storeState.terms }}</p>
      <p v-else>NOT FOUND</p>
    </section>
    <section v-if="tab == 'Map'" class="terms">
      <MapDetail />
    </section>
  </section>
</template>

<script>
import Facilities from "@/components/hotelDetail/facilities.vue";
import ReviewsDetail from "../ReviewsDetail.vue";
import MapDetail from "@/components/common/mapDetail.vue"
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
@media (max-width: 479px) and (min-width: 320px) {
  .detail-tabs .tabs{
    width: 100%;
  }
  .detail-tabs .tabs p{
    padding: 12px 15px;
  }
}
</style>