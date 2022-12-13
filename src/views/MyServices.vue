<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>{{$t('myServicePage.myServices')}}</h1>
      </div>
      <div class="service-container" v-if="!loading">
        <div class="booking-cards">
          <div class="card" v-for="(item, key) in dataCard" :key="key">
            <MyServicesCard :items="item" @deleteItem="deleteCard" />
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
    CardSkeleton,
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
        var res = await this.$axios.get(`vender/services`);
        this.dataCard = res.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    deleteCard(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteItem(id);
        }
      });
    },
    async deleteItem(id) {
      try {
        var res = await this.$axios.delete(`services/delete-any/${id}`);
        if (res) {
          var updateCard = this.dataCard.filter((item) => item._id != id);
          this.dataCard = updateCard;
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Some Thing Went Wrong!",
          showConfirmButton: false,
          timer: 3000,
        });
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
