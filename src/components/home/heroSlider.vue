<template>
  <section class="container hero-slider">
    <carousel
      :settings="settings"
      :autoplay="4000"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="carousel-container"
    >
      <slide :key="1">
        <router-link to="/">
          <img src="../../assets/images/hero-banner.png" />
          <div class="layout"></div>
        </router-link>
      </slide>
      <slide :key="2">
        <router-link to="/">
          <img src="../../assets/images/hero-banner.png" />
          <div class="layout"></div>
        </router-link>
      </slide>
      <slide :key="3">
        <router-link to="/">
          <img src="../../assets/images/hero-banner.png" />
          <div class="layout"></div>
        </router-link>
      </slide>
      <template #addons>
        <navigation>
          <template #next>
            <img src="../../assets/images/right-arrow.png"/>
          </template>
          <template #prev>
            <img src="../../assets/images/arrow-left.png"/>
          </template>
        </navigation>
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
export default {
  name: "HeroSlider",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center"
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: "center"
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: "start"
      }
    }
  })
};
</script>

<style scoped>
.hero-slider {
  padding: 10px 0;
  min-height: 400px;

}
.layout {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 2px;
  background-image: linear-gradient(#9f9f9f00, #00000094);
  border-radius: 25px;
}
.carousel__slide {
  position: relative;
}
.carousel__slide img {
  width: 100%;
}
</style>