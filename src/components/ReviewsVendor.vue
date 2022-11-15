<template>
  <section>
    <div class="top-section">
      <div class="top-head">
        <h1>Reviews <span>(24)</span></h1>
      </div>
      <div>
        <h1 class="add-riveiw" @click="addModel">+ Add Review</h1>
      </div>
    </div>
    <section class="reviews-section">
      <!-- block -->
      <div class="primary-container">
        <div class="secondry-container">
          <img src="../assets/images/imageProfile.jpeg" />
        </div>
        <div>
          <div>
            <h4>Lorem Ipsum color sit amet, consectetur</h4>
          </div>
          <div>
            <StarReviews :review="2" :vendor="true" />
          </div>
          <div class="date-container">
            <p>03:44 PM 27/04/2022</p>
          </div>
        </div>
      </div>
      <!-- block -->
      <div class="primary-container">
        <div class="secondry-container">
          <img src="../assets/images/imageProfile.jpeg" />
        </div>
        <div>
          <div>
            <h4>Lorem Ipsum color sit amet, consectetur</h4>
          </div>
          <div>
            <StarReviews :review="4" :vendor="true" />
          </div>
          <div class="date-container">
            <p>03:44 PM 27/04/2022</p>
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
  methods: {
    addModel() {
      this.$emit("openReview");
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
