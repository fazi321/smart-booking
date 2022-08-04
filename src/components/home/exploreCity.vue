<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>EXPLORE CITIES</h1>
    </div>
    <div class="card-container">
      <SmartBookingCard
        v-for="(item, index) in smartBooking"
        :dataItem="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import SmartBookingCard from "@/components/common/BookingCard.vue";
export default {
  name: "ExploreCity",
  components: {
    SmartBookingCard,
  },
  data() {
    return {
      smartBooking: [
        { title: "Apartments", image: "apartment.svg", categoryCount: "681" },
        { title: "Apartments", image: "apartment.svg", categoryCount: "681" },
      ],
    };
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
.smart-title {
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
}
.smart-title h1 {
  font-size: 26px;
  color: #231f20;
  opacity: 0.8;
  letter-spacing: 0.7px;
}
</style>