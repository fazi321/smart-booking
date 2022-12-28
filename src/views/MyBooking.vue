<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>{{ $t("myBookingPage.myBookings") }}</h1>
      </div>
      <div class="service-container" v-if="!loading">
        <div class="detail-tabs">
          <div class="tabs">
            <p
              :class="{ active: tab == 'bookingRequests' }"
              @click="selected('bookingRequests')"
            >
              {{ $t("myBookingPage.bookingRequests") }}
            </p>
            <p
              :class="{ active: tab == 'Upcoming' }"
              @click="selected('Upcoming')"
            >
              {{ $t("myBookingPage.upcoming") }}
            </p>
            <p
              :class="{ active: tab == 'current' }"
              @click="selected('current')"
            >
              {{ $t("myBookingPage.current") }}
            </p>
            <p
              :class="{ active: tab == 'Completed' }"
              @click="selected('Completed')"
            >
              {{ $t("myBookingPage.completed") }}
            </p>
            <p
              :class="{ active: tab == 'Cancelled' }"
              @click="selected('Cancelled')"
            >
              {{ $t("myBookingPage.cancelled") }}
            </p>
          </div>
        </div>
        <div class="booking-cards">
          <div class="card" v-for="(data, index) in filteredData" :key="index">
            <MyCard :items="data" />
          </div>
          <div
            class="card"
            v-for="(data, index) in bookingRequests"
            :key="index"
            @click="payModel(data)"
          >
            <MyRequestCard :items="data" />
          </div>
        </div>
      </div>
      <div class="booking-cards service-skeleton" v-else>
        <div
          class="card"
          v-for="(skeleton, loading) in skeleton"
          :key="loading"
        >
          <CardSkeleton />
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
      <PayModelRequest
        v-if="bookingModel"
        :dataApi="dataBookingApi"
        @close="close"
      />
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import MyCard from "@/components/common/myCard.vue";
import MyRequestCard from "@/components/common/myRequestCard.vue";
import CardSkeleton from "@/components/common/cardSkeleton.vue";
import Paginate from "vuejs-paginate-next";
import PayModelRequest from "@/components/models/payModel.vue";
export default {
  name: "MyServices",
  components: {
    DefaultLayout,
    MyCard,
    MyRequestCard,
    CardSkeleton,
    Paginate,
    PayModelRequest,
  },
  data() {
    return {
      dataCard: [],
      filteredData: [],
      loading: false,
      skeleton: 8,
      tab: "Upcoming",
      //
      pageSelected: 1,
      pageCount: 15,
      //
      bookingModel: false,
      bookingRequests: [],
    };
  },
  methods: {
    close() {
      this.bookingModel = false;
    },
    payModel(val) {
      if (val.status != "waiting") {
        this.dataBookingApi = val?.bookngRequest[0];
        this.bookingModel = true;
      }else{
        this.$swal({
          icon: "success",
          title: "Request in Waiting!",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    },
    clickCallback(num) {
      var copyFrom = num * 6 - 6;
      var copyTo = num * 6;
      var filtereByTabs = this.dataCard.filter((e) => {
        var val =
          this.tab.toLowerCase() != "upcoming"
            ? this.tab.toLowerCase()
            : "pending";
        return e.status == val;
      });
      this.pageCount = Math.ceil(filtereByTabs.length / 6);
      this.filteredData = filtereByTabs.slice(copyFrom, copyTo);
    },
    selected(val) {
      if (val == "bookingRequests") {
        this.getRequests();
      }
      this.tab = val;
      this.pageSelected = 1;
      this.clickCallback(1);
    },
    async getRequests() {
      try {
        this.loading = true;
        var res = await this.$axios.get(`/booking/booking-requests`);
        this.bookingRequests = res.data;
        this.pageSelected = 1;
        this.clickCallback(1);
        // console.log(this.dataCard, '==>')
        // this.pageCount = Math.ceil(res.data.length / 6);
        // this.filteredData = this.dataCard.slice(0, 6);
        // console.log("==>", this.dataCard);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async getData() {
      try {
        this.loading = true;
        var res = await this.$axios.get(`/booking`);
        this.dataCard = res.data;
        this.pageSelected = 1;
        this.clickCallback(1);
        // console.log(this.dataCard, '==>')
        // this.pageCount = Math.ceil(res.data.length / 6);
        // this.filteredData = this.dataCard.slice(0, 6);
        // console.log("==>", this.dataCard);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
  mounted() {
    this.getData();
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
  padding: 20px 0 40px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.booking-cards .card {
  width: 49%;
}
/* / */

.detail-tabs {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.detail-tabs .tabs {
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 11px;
  opacity: 1;
  width: 50%;
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
  .booking-cards {
    margin: 0 10px;
  }
  .booking-cards .card {
    width: 100%;
  }
  .service-container h3 {
    margin: 0 10px;
  }
}
</style>
