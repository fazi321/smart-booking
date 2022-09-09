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
      <div class="apartment-right" v-if="!loading">
        <div v-if="filteredData && filteredData.length">
          <FilterCard
            v-for="(items, index) in filteredData"
            :key="index"
            :item="items"
          />
          <div class="pagination-container">
            <paginate
              v-model="pageSelected"
              :page-range="3"
              :margin-pages="2"
              :page-count="pageCount"
              :click-handler="clickCallback"
              :prev-text="'<'"
              :next-text="'>'"
              :container-class="'pagination'"
              :page-class="'page-item'"
            ></paginate>
          </div>
        </div>
        <div class="text-container" v-else>NOT FOUND SOME THING WENT WRONG</div>
      </div>
      <div class="apartment-right" v-else>
        <SkeletonCard v-for="(skeleton, loading) in skeleton" :key="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "./filter.vue";
import HotelFilters from "./hotelFliters.vue";
import FilterCard from "../common/filterCard.vue";
import SkeletonCard from "../common/cardSkeleton.vue";
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
    SkeletonCard,
  },
  data() {
    return {
      pageSelected: 1,
      dataCard: [],
      filteredData: [],
      loading: false,
      pageCount: 15,
      skeleton: 6,
    };
  },
  created() {
    this.pageSelected = parseInt(this.$route.query.page);
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
          this.loading = true;
          var res = await this.$axios.get(`${cat}`);
          if (res) {
            this.dataCard = res.data;
            this.pageCount = res.data.length / 15;
            this.filterByPage(this.$route.query.page || 1);
            this.loading = false;
          }
        } catch (error) {
          this.loading = false;
          console.log(error);
        }
      }
    },
    filterByPage(page) {
      var copyFrom = page * 15 - 15;
      var copyTo = page * 15;
      this.filteredData = this.dataCard.slice(copyFrom, copyTo);
    },
    clickCallback(num) {
      this.$router.push(`${this.$route.path}?page=${num}`);
      this.filterByPage(num);
      // this.$refs.slider.slideTo(num);
    },
  },
  watch: {
    "$route.params": {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        var old = "";
        if (oldValue) {
          old = oldValue.category;
        }
        if (newValue.category != old) {
          this.pageSelected = 1;
          this.getData();
        }
      },
    },
  },
};
</script>

<style>
.text-container {
  color: #e3e3e3;
  font-size: 28px;
  margin-top: 45px;
}
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
@media (max-width: 479px) and (min-width: 320px) {
  .search-wrapper .search .primary-search {
    width: 90%;
  }
  .apartment-wrapper .apartment-left {
    width: 100%;
    margin: 10px;
  }
  .apartment-wrapper .apartment-right {
    width: 94%;
    padding-right: 0px;
    margin: 10px;
  }
}
</style>
