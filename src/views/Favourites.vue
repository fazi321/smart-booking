<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>{{ $t("favourites.favourites") }}</h1>
      </div>
      <div :class="['service-container', { 'rtl-set': $t('lang') == 'ar' }]">
        <section class="filters-container">
          <div class="filter-buttons">
            <div class="filter-option">
              <img src="../assets/images/sort.svg" />
              <select name="sort">
                <option value>Sort by</option>
                <option value>Price low to high</option>
                <option value>Price high to low</option>
                <option value>Discount low to high</option>
              </select>
            </div>
          </div>
        </section>
        <div class="booking-cards favourite">
          <div class="card" v-for="(item, key) in filteredData" :key="key">
            <MyServicesCard :item="item" @removedWish="getFav" />
          </div>
        </div>
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
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import MyServicesCard from "@/components/common/filterCard.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "FavouritesView",
  data() {
    return {
      favList: [],
      filteredData: [],
      //
      pageSelected: 1,
      pageCount: 15,
    };
  },
  components: {
    DefaultLayout,
    MyServicesCard,
    Paginate,
  },
  mounted() {
    this.getFav();
  },
  methods: {
    async getFav() {
      try {
        var res = await this.$axios.get("user/favorite");
        this.favList = res.data;
        this.pageSelected = 1;
        this.clickCallback(1);
      } catch (error) {
        console.log(error);
      }
    },
    clickCallback(num) {
      var copyFrom = num * 6 - 6;
      var copyTo = num * 6;
      this.pageCount = Math.ceil(this.favList.length / 6);
      this.filteredData = this.favList.slice(copyFrom, copyTo);
    },
  },
};
</script>
<style scoped>
.service-booking {
  padding: 30px 0;
}
.service-booking h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.service-container h3 {
  text-align: left;
  letter-spacing: 0.5px;
  color: #231f20;
  opacity: 0.8;
  font-size: 16px;
  padding: 15px 0;
}
.booking-cards {
  padding: 20px 0 0px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.booking-cards .card {
  width: 47%;
}
.filters-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 0;
}
.filters-container div h6 {
  color: #0e4763;
  font-size: 18px;
}
.filter-buttons {
  display: flex;
}
.filter-buttons .filter-option {
  border: 1px solid #0e4763;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 100%;
}
.filter-buttons .filter-option img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.filter-buttons .filter-option select {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 70%;
  cursor: pointer;
  padding: 10px 0;
}
@media (max-width: 700px) and (min-width: 320px) {
  .booking-cards {
    margin: 0 10px;
  }
  .booking-cards .card {
    width: 100%;
  }
  .service-container h3 {
    margin: 0 10px;
  }
  .rtl-set .filter-buttons .filter-option{
    margin:0 10px;
  }
}
</style>
