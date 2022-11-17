<template>
  <section>
    <div class="top-section">
      <div class="top-head">
        <h1>Reviews <span>({{storeState && storeState.numReviews}})</span></h1>
      </div>
      <div>
        <h1 class="add-riveiw" @click="addModel">+ Add Review</h1>
      </div>
    </div>
    <section class="reviews-section">
      <!-- block -->
      <div class="primary-container" v-for="(review, index) in storeState.reviews" :key="index">
        <div class="secondry-container">
          <img src="../assets/images/imageProfile.jpeg" />
        </div>
        <div>
          <div>
            <h4>{{review.name}}</h4>
          </div>
          <div>
            <StarReviews :review="review.rating" :vendor="true" />
          </div>
          <div class="date-container">
            <p>{{reviewDate(review.createdAt)}}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import StarReviews from "@/components/reviews/StarReviews.vue";
export default {
  components: {
    StarReviews,
  },
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
  },
  methods: {
    addModel() {
      this.$emit("openReview");
    },
    reviewDate(val){
      const date = new Date(val);
      var time = date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
      var getDate =date.toLocaleDateString('en-GB');
      return time + ' ' + getDate
    },
  },
};
</script>

<style scoped>
.reviews-section {
  height: 150px;
  overflow-y: scroll;
  padding: 10px;
}
.top-section {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  margin: 0 10px;
  border-top: 1px solid #ebebeb;
}
.top-section .top-head h1 {
  font-size: 14px;
}
.top-section .top-head h1 span {
  font-size: 10px;
  margin-left: 2px;
  color: #c9c9cc;
}
.add-riveiw {
  color: #febb12;
  cursor: pointer;
  font-size: 12px;
}
/* // */
.primary-container {
  display: flex;
  padding: 10px;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 20px;
  margin-bottom: 15px;
  align-items: center;
  /* border-bottom: 1px solid darkgray; */
}
.primary-container h4 {
  text-align: left;
  font-size: 14px;
  color: #c9c9c9;
  font-weight: normal;
}
.primary-container > div {
  margin: 0 10px;
}
.secondry-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #febb12;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0px 0px 10px #0000001a;
}
.date-container p {
  font-size: 14px;
  color: #c9c9c9;
  text-align: left;
}
</style>
