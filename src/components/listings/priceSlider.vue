<template>
  <div class="app-content">
    <div class="price">
      <span>SAR {{ oBarMinValue }}</span>
      <span>SAR {{ oBarMaxValue }}</span>
    </div>

    <MultiRangeSlider
      baseClassName="multi-range-slider-bar-only"
      :minValue="oBarMinValue"
      :maxValue="oBarMaxValue"
      :max="500"
      :min="0"
      :step="5"
      :rangeMargin="0"
      @input="update_oBarValues"
    />
  </div>
</template>
<script>
import MultiRangeSlider from "multi-range-slider-vue";
import "../../../node_modules/multi-range-slider-vue/MultiRangeSliderBlack.css";
import "../../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";

export default {
  props: ["type"],
  data() {
    return {
      oBarMinValue: 0,
      oBarMaxValue: 500,
      price: {},
    };
  },
  components: {
    MultiRangeSlider,
  },
  mounted() {
    /* eslint-disable */ 
    var { minPrice, maxPrice } = this.$route.query;
    if (minPrice) {
      this.oBarMinValue = parseInt(minPrice);
    }
    if (maxPrice) {
      this.oBarMaxValue = parseInt(maxPrice);
    }
    var x = document.getElementsByClassName("thumb");
    // for price
    var minPrice = () => this.minPrice();
    var maxPrice = () => this.maxPrice();
    x[0].addEventListener("click", () => {
      minPrice();
    });
    x[1].addEventListener("click", () => {
      maxPrice();
    });
  },
  methods: {
    update_oBarValues(e) {
      this.oBarMinValue = e.minValue;
      this.oBarMaxValue = e.maxValue;
    },
    minPrice() {
      this.price.minPrice = this.oBarMinValue;
      this.dragEnd();
    },
    maxPrice() {
      this.price.maxPrice = this.oBarMaxValue;
      this.dragEnd();
    },
    dragEnd() {
      if(this.price.minPrice){
         this.price.minPrice = this.price.minPrice.toString();
      }
      if(this.price.maxPrice){
        this.price.maxPrice = this.price.maxPrice.toString();
      }
      this.$emit("values", this.price);
    },
  },
};
</script>
<style>
.app-content .price {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.price span {
  color: #858585;
  font-size: 12px;
}
.multi-range-slider-bar-only .bar-inner {
  background-color: #febb12 !important;
  height: 5px;
  border: none !important;
  box-shadow: unset !important;
}
.multi-range-slider-bar-only .thumb::before {
  background-color: #febb12 !important;
  border: none !important;
  box-shadow: unset !important;
  width: 18px;
  height: 18px;
  margin: -7px;
}
.multi-range-slider-bar-only .thumb .caption {
  display: none !important;
}
.multi-range-slider-bar-only .thumb::after {
  background-color: #febb12 !important;
  border: none !important;
  box-shadow: unset !important;
}
.multi-range-slider-bar-only .bar-right {
  background: #fff !important;
  box-shadow: unset !important;
  border: 1px solid #eee;
  height: 6px;
}
.multi-range-slider-bar-only.zero-ranage-margin .thumb-right {
  left: 0px !important;
  top: 0px;
}
.multi-range-slider-bar-only.zero-ranage-margin .thumb-left {
  right: 0px !important;
  top: 0px;
}
.multi-range-slider-bar-only .bar-left {
  background: #fff !important;
  box-shadow: unset !important;
  border: 1px solid #eee;
  right: 0 !important;
  height: 6px;
  padding: 2px 0px;
}
</style>
