<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>MY SERVICES</h1>
      </div>
      <div class="service-container" v-if="!loading">
        <div class="booking-cards">
          <div class="card" v-for="(item, key) in dataCard" :key="key">
            <MyServicesCard :items="item"/>
          </div>
        </div>
      </div>
      <div class="booking-cards service-skeleton" v-else>
       <div class="card"  v-for="(skeleton, loading) in skeleton" :key="loading">
        <CardSkeleton/>
       </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import MyServicesCard from "@/components/common/MyServices.vue";
import CardSkeleton from "@/components/common/cardSkeleton.vue";

export default {
  name: "MyServices",
  components: {
    DefaultLayout,
    MyServicesCard,
    CardSkeleton
  },
  data() {
    return {
      dataCard: [],
      loading: false,
      skeleton: 8,
    };
  },
  methods: {
    async getData() {
      try {
        this.loading = true;
        var res = await this.$axios.get(`services`);
        // console.log(res.data, "-->");
        this.dataCard = res.data;
         this.loading = false;
      } catch (error) {
         this.loading = false;
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
</style>
