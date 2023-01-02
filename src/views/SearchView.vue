<template>
  <default-layout>
    <div class="container apartment-main">
      <div class="search-wrapper">
        <SearchHeader />
      </div>
      <div class="search-header">
        <h3>{{$t('searchHeader.search')}}</h3>
      </div>
      <Filters @openFilterMobile="openFilterMobile" />
      <div :class="['apartment-wrapper', { 'rtl-set': $t('lang') == 'ar' }]">
        <div class="apartment-left">
          <HotelFilters :isShow="mobileFilter"/>
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
          <div class="text-container" v-else>{{ $t("error.notFound") }}</div>
        </div>
        <div class="apartment-right" v-else>
          <SkeletonCard
            v-for="(skeleton, loading) in skeleton"
            :key="loading"
          />
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import Filters from "@/components/listings/filter.vue";
import HotelFilters from "@/components/listings/hotelFliters.vue";
import FilterCard from "@/components/common/filterCard.vue";
import SkeletonCard from "@/components/common/cardSkeleton.vue";
import SearchHeader from "@/components/SearchHeader.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "SearchPage",
  data() {
    return {
      searchList: [],
      filteredData: [],
      // pagination
      pageSelected: 1,
      pageCount: 1,
      showItem: 15,
      skeleton: 6,
      loading: false,
       mobileFilter:false
    };
  },
  components: {
    DefaultLayout,
    Filters,
    HotelFilters,
    FilterCard,
    Paginate,
    SearchHeader,
    SkeletonCard,
  },
  mounted() {
    this.getData();
  },
  methods: {
    openFilterMobile(){
      this.mobileFilter = !this.mobileFilter
    },
    convertDate(val) {
      var date = new Date(val);
      return date.toLocaleDateString("en-US");
    },
    async getData() {
      var q = this.$route.query;
      delete q.page;
      var check = { ...q };
      if (check.checkIn) {
        check.checkIn = this.convertDate(check.checkIn);
      }
      if (check.checkOut) {
        check.checkOut = this.convertDate(check.checkOut);
      }
      try {
        this.loading = true;
        var res = await this.$axios.get("services/filter", {
          params: check,
        });
        this.searchList = res.data.services;
        this.pageCount = Math.ceil(res.data.total / this.showItem);
        this.clickCallback(1);
        this.loading = false;
        // console.log(res.data);
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    pushUrl(page) {
      var q = this.$route.query;
      // delete q.page;
      var url = this.constructURL(this.$route.path, q) + "page=" + page;
      this.$router.push(url);
    },
    constructURL(url, fl) {
      url += "?";
      Object.keys(fl).forEach((e) => {
        if (fl[e] && fl[e] !== "undefined" && fl[e].length > 0)
          url += `${e}=${fl[e]}&`;
      });
      return url;
    },
    clickCallback(page) {
      var copyFrom = page * this.showItem - this.showItem;
      var copyTo = page * this.showItem;
      this.filteredData = this.searchList.slice(copyFrom, copyTo);
      this.pushUrl(page);
    },
  },
  watch: {
    "$route.params": {
      handler() {
      //  this.getData();
       this.mobileFilter =  false;
      },
    },
  },
};
</script>
<style scoped>
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
@media (max-width: 700px) and (min-width: 320px) {
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
