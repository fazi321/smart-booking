<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>Booking Requests</h1>
      </div>
      <div class="service-container">
        <!-- <h3>You can your service booking here</h3> -->
        <div class="booking-cards">
          <div class="card" v-for="(item, index) in dataCard" :key="index">
            <RequestCard :items="item" />
          </div>
          <!-- <div class="card">
            <ServiesCard />
          </div>
          <div class="card">
            <ServiesCard />
          </div>
          <div class="card">
            <ServiesCard />
          </div>
          <div class="card">
            <ServiesCard />
          </div>
          <div class="card">
            <ServiesCard />
          </div> -->
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import RequestCard from "@/components/common/RequestCard.vue";

export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout,
    RequestCard,
  },
  data() {
    return {
      dataCard: [],
    };
  },
  methods: {
    async getData() {
      try {
        // var res = await this.$axios.get(`vender/service-booking-count`);
        var res = await this.$axios.get(`vender/service-booking-requests`);
        // console.log(res.data, "-->");
        this.dataCard = res.data;
        console.log(res.data, "-==>");
      } catch (error) {
        console.log(error);
      }
    },

    // clickCallback(num) {
    //   this.$refs.slider.slideTo(num);
    // },
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
