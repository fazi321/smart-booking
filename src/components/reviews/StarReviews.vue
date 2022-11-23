<template>
  <section>
    <div :class="['rating',{'vendor-profile': vendor}]">
      <span
        :class="['star', { gray: star > review }]"
        v-for="(star, index) in 5"
        :key="index"
        >&starf;</span
      >
      <span class="rating-counter" v-if="!vendor">({{review}})</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "StarReviews",
  props: ["review","vendor"],
};
</script>

<style scoped>
.rating {
  text-align: left;
  padding: 5px 0;
  display: flex;
  align-items: center;
}
.rating .star {
  font-size: 28px;
  color: #fdc350;
  margin-right: 5px;
  cursor: pointer;
  line-height: 1;
}
.rating .gray {
  color: #efefef !important;
}
.rating .rating-counter {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  font-size: 14px;
}
.vendor-profile .star{
  font-size:24px!important;
  margin-right: 1px;
}
</style>
