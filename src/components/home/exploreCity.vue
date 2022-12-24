<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>{{ $t("homePage.exploreCities") }}</h1>
    </div>
    <div :class="['card-container',{'rtl-set':$t('lang') == 'ar'}]">
      <SmartBookingCard
        v-for="(item, index) in smartBooking"
        :dataItem="item"
        :key="index"
        @click="goToUrl(item)"
        :city="true"
      />
      <CategoryModel
        :class="{'rtl-set':$t('lang') == 'ar'}"
        :model="categoryModel"
        :city="selectedCity"
        @search="searchNow"
        @close="close"
      />
    </div>
  </div>
</template>

<script>
import SmartBookingCard from "@/components/common/BookingCard.vue";
import CategoryModel from "@/components/home/categoryModel.vue";
export default {
  name: "ExploreCity",
  components: {
    SmartBookingCard,
    CategoryModel,
  },
  data() {
    return {
      categoryModel: false,
      smartBooking: [
        { title: "jeddah", image: "jeddah.png", categoryCount: "681" },
        { title: "madinah", image: "medina.png", categoryCount: "681" },
        { title: "riyadh", image: "riyadh.png", categoryCount: "681" },
        { title:  "makkah", image: "mecca.png", categoryCount: "681" },
      ],
      //
      selectedCity: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        this.loading = true;
        // services/explore-cities
        var res = await this.$axios.get(`services/explore-cities`);
        if (res) {
          // smartBooking
          console.log(res);
          this.loading = false;
        }
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    searchNow(val) {
      this.$router.push(
        `search?city=${this.selectedCity.title}&categoryId=${val._id}&page=1`
      );
    },
    goToUrl(val) {
      this.selectedCity = val;
      this.categoryModel = true;
    },
    close() {
      this.categoryModel = false;
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 0;
}
.smart-booking {
  padding: 10px 0;
}
@media (max-width: 479px) and (min-width: 320px) {
  .card-container {
    margin: 0 10px;
    padding: 10px 0;
  }
}
</style>
