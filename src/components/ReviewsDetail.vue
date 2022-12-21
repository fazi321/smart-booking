<template>
  <section class="main-container-div">
    <!-- / -->
    <div class="primary-container" v-for="(review, index) in reviews" :key="index">
      <div class="secondry-container">
        <img src="../assets/images/imageProfile.png" />
      </div>
      <div>
        <div>
          <h4>{{review.name}}</h4>
          <p>{{review.comment}}</p>
        </div>
        <div>
          <StarReviews :review="review.rating" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarReviews from "@/components/reviews/StarReviews.vue";
export default {
  name: "ReviewsDetail",
  props:['reviews'],
  components: {
    StarReviews,
  },
};
</script>

<style scoped>
.main-container-div {
  /* background: red; */
  display:flex;
  flex-direction: column;
  align-items: center;
}
.primary-container {
  display: flex;
  width:64%;
  padding:10px;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 11px;
  margin-bottom:15px;
  border-bottom: 1px solid darkgray;
}
.primary-container h4, .primary-container p{
  text-align: left;
}
.primary-container p{
  font-size:14px;
}
.primary-container>div{
  margin:10px;
}
.secondry-container {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #febb12;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
