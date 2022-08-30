<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>EXPLORE MORE ON SMART BOOKINGS</h1>
    </div>
    <div class="card-container" v-if="!loading">
      <SmartBookingCard
        v-for="(item, index) in smartBooking"
        :dataItem="item"
        :key="index"
      />
    </div>
    <div class="card-container" v-else>
      <div>loading...</div>
    </div>
  </div>
</template>

<script>
import SmartBookingCard from "@/components/common/BookingCard.vue";
export default {
  name: "SmartBooking",
  components: {
    SmartBookingCard,
  },
  data() {
    return {
      loading:false,
      smartBooking: [
        {
          title: "Apartments",
          image: "apartment.svg",
          categoryCount: "681",
          link: "/apartments?page=1",
        },
        {
          title: "Hotels",
          image: "hotel.svg",
          categoryCount: "681",
          link: "/hotels?page=1",
        },
        {
          title: "Camps",
          image: "camps.svg",
          categoryCount: "681",
          link: "/camps?page=1",
        },
        {
          title: "Resorts",
          image: "resort.png",
          categoryCount: "681",
          link: "/resorts?page=1",
        },
      ],
    };
  },
  mounted(){
    this.getData();
  },
  methods: {
    async getData() {
      try {
        this.loading = true;
        // services/explore-cities
        var res = await this.$axios.get(`services/explore-servies`);
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
</style>
