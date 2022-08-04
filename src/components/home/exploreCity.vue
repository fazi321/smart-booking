<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>EXPLORE CITIES</h1>
    </div>
    <div class="card-container">
      <SmartBookingCard />
      <SmartBookingCard />
      <SmartBookingCard />
      <SmartBookingCard />
    </div>
  </div>
</template>

<script>
import SmartBookingCard from "@/components/common/BookingCard.vue";
export default {
  name: "ExploreCity",
  components: {
    SmartBookingCard
  }
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