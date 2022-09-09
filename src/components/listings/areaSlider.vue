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
      area: {},
    };
  },
  components: {
    MultiRangeSlider,
  },
  mounted() {
    /* eslint-disable */ 
    var { minArea, maxArea } = this.$route.query;
    if (minArea) {
      this.oBarMinValue = parseInt(minArea);
    }
    if (maxArea) {
      this.oBarMaxValue = parseInt(maxArea);
    }
    var x = document.getElementsByClassName("thumb");
    // for price
    var minArea = () => this.minArea();
    var maxArea = () => this.maxArea();
    x[2].addEventListener("click", () => {
      minArea();

    });
    x[3].addEventListener("click", () => {
      maxArea();
    });
  },
  methods: {
    update_oBarValues(e) {
      this.oBarMinValue = e.minValue;
      this.oBarMaxValue = e.maxValue;
    },
    minArea() {
      this.area.minArea = this.oBarMinValue;
      this.dragEnd();
    },
    maxArea() {
      this.area.maxArea = this.oBarMaxValue;
      this.dragEnd();
    },
    dragEnd() {
      if(this.area.minArea){
         this.area.minArea = this.area.minArea.toString();
      }
      if(this.area.maxArea){
        this.area.maxArea = this.area.maxArea.toString();
      }
      this.$emit("values", this.area);
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
