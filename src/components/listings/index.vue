<template>
  <div class="container apartment-main">
    <div class="search-wrapper">
      <SearchHeader />
    </div>
    <Filters />
    <div class="apartment-wrapper">
      <div class="apartment-left">
        <HotelFilters />
      </div>
      <div class="apartment-right" v-if="dataCard">
        <FilterCard
          v-for="(items, index) in dataCard"
          :key="index"
          :item="items"
        />
        <div class="pagination-container">
          <paginate
            :page-range="3"
            :margin-pages="2"
            :page-count="10"
            :click-handler="clickCallback"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          ></paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "./filter.vue";
import HotelFilters from "./hotelFliters.vue";
import FilterCard from "../common/filterCard.vue";
import SearchHeader from "../SearchHeader.vue";
import Paginate from "vuejs-paginate-next";
export default {
  name: "HotelMain",
  components: {
    Filters,
    HotelFilters,
    FilterCard,
    Paginate,
    SearchHeader,
  },
  data() {
    return {
      dataCard: [],
    };
  },
  methods: {
    async getData() {
      var catType = this.$route.params.category;
      if (catType) {
        var cat =
          catType != "farms" && catType != "resorts"
            ? catType.slice(0, -1)
            : catType;
        try {
          var res = await this.$axios.get(`${cat}`);
          this.dataCard = res.data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    clickCallback(num) {
      this.$refs.slider.slideTo(num);
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.getData();
      },
    },
  },
};
</script>

<style>
.search-wrapper .search .primary-search {
  width: 70%;
}
</style>
<style scoped>
.search-wrapper {
  margin-bottom: 50px;
  margin-top: 10px;
}
.apartment-main {
  padding: 15px 0;
}
.apartment-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
}
.apartment-wrapper .apartment-left {
  width: 25%;
}
.apartment-wrapper .apartment-right {
  width: 70%;
  padding-right: 20px;
}
</style>