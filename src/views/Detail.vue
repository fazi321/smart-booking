<template>
  <default-layout>
    <HotelCard />
    <div class="details-main container">
      <section class="detail-left">
        <HotelDescription />
        <DetailTabs />
      </section>
      <section class="detail-right" v-if="$route.params.cat != 'services'">
        <FormBook />
      </section>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HotelCard from "@/components/hotelDetail/hotelCard.vue";
import HotelDescription from "@/components/hotelDetail/detailDescription.vue";
import DetailTabs from "@/components/hotelDetail/tabs.vue";
import FormBook from "@/components/hotelDetail/bookForm.vue";

export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout,
    HotelCard,
    HotelDescription,
    DetailTabs,
    FormBook,
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      var { cat, id } = this.$route.params;
      var cate = cat != "farms" && cat != "resorts" && cat != 'services' ? cat.slice(0, -1) : cat;
      var q = { cate, id };
      this.$store.dispatch("details/getDetail", q);
    },
  },
};
</script>
<style scoped>
.details-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 50px;
}
.details-main .detail-left {
  width: 60%;
}
.details-main .detail-right {
  width: 28%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .details-main .detail-left {
  width: 100%;
  margin: 10px;
}
.details-main .detail-right {
  width: 100%;
   margin: 10px;
}
}
</style>
