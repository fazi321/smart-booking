<template>
  <section class="smart-card" v-if="!city">
    <router-link :to="`${dataItem.link}`" v-if="dataItem">
      <div class="image">
        <img :src="require(`../../assets/images/${dataItem.image}`)" />
      </div>
      <div class="detail">
        <h5>{{ dataItem.category }}</h5>
        <p>{{ dataItem.categoryCount }}</p>
      </div>
    </router-link>
  </section>
  <!-- // for city  -->
  <section class="smart-card" v-else>
    <div v-if="dataItem">
      <div class="image">
        <img :src="require(`../../assets/images/${dataItem.image}`)" />
      </div>
      <div class="detail">
        <h5>{{ dataItem.category }}</h5>
        <p>{{ dataItem.categoryCount }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookingCard",
  props: ["dataItem", "city"],
};
</script>

<style scoped>
.smart-card {
  width: 22%;
  background-color: #fff;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 17px;
  opacity: 1;
  cursor: pointer;
}
.smart-card .image img {
  width: 100%;
  border-radius: 17px;
}
.smart-card .detail {
  padding: 5px 0 10px 0;
}
.smart-card .detail h5 {
  font-size: 16px;
  color: #000000;
  opacity: 0.8;
  text-align: center;
  font-weight: normal;
}
.smart-card .detail p {
  font-size: 14px;
  color: #000000;
  opacity: 0.6;
  text-align: center;
}
@media (max-width: 479px) and (min-width: 320px) {
  .smart-card {
    width: 48%;
    margin: 10px 0;
  }
}
</style>
