<template>
  <section :class="['apartments-filters',{'rtl-set':$t('lang') == 'ar'}]" @keypress="handleFilterNow">
    <div :class="['inner',{'set-langauge':$t('lang') == 'ar'}]">
      <!-- location section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.locationFilters") }}</h6>
        <div class="form">
          <!-- <div class="option">
            <input
              type="text"
              placeholder="Name"
              v-model="filters.name"
              @blur="handleBlur"
            />
          </div> -->
          <div class="option">
            <input
              type="text"
              :placeholder="$t('listingPage.city')"
              v-model="filters.city"
              @blur="handleBlur"
            />
          </div>
          <div class="option">
            <input
              type="text"
              :placeholder="$t('listingPage.destination')"
              v-model="filters.destination"
              @blur="handleBlur"
            />
          </div>
          <div class="option">
            <input
              type="text"
              :placeholder="$t('listingPage.district')"
              v-model="filters.district"
              @blur="handleBlur"
            />
            <!-- <select name="sort">
              <option value>District</option>
              <option value>Price low to high</option>
              <option value>Price high to low</option>
              <option value>Discount low to high</option>
            </select> -->
          </div>
          <div class="option">
            <input
              type="text"
              :placeholder="$t('listingPage.direction')"
              v-model="filters.direction"
              @blur="handleBlur"
            />
            <!-- <select name="sort">
              <option value>Direction</option>
              <option value>Price low to high</option>
              <option value>Price high to low</option>
              <option value>Discount low to high</option>
            </select> -->
          </div>
        </div>
      </section>
      <!-- location section  -->
      <!-- other filter section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.otherFilter") }}</h6>
        <form class="form">
          <label class="checkbox-container">
            {{ $t("listingPage.availableOnly") }}
            <!-- <input type="checkbox" checked="" /> -->
            <input
              type="checkbox"
              value="availableOnly"
              @change="toggleFacilities"
              :checked="filters.availableOnly"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.offersOnly") }}
            <input
              type="checkbox"
              value="offersOnly"
              @change="toggleFacilities"
              :checked="filters.offersOnly"
            />
            <span class="checkmark"></span>
          </label>
          <div class="input">
            <input
              type="text"
              :placeholder="$t('listingPage.searchByPropertyName')"
              v-model="filters.name"
              @blur="handleBlur"
            />
            <!-- <input type="text" placeholder="Search by property name" /> -->
          </div>
          <div class="input">
            <input
              type="text"
              :placeholder="$t('listingPage.searchByUintName')"
              v-model="filters.unitName"
              @blur="handleBlur"
            />
          </div>
        </form>
      </section>
      <!-- other filter section  -->
      <!-- Vacation Rental section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.vacationRentalTypes") }}</h6>
        <form class="form radio">
          <div class="radio-input">
            <input
              type="radio"
              id="test1"
              name="radio-group"
              value="Hotel"
              @change="rentalVacation"
              :checked="filters.rentalType == 'Hotel'"
            />
            <label for="test1">{{ $t("listingPage.hotels") }}</label>
          </div>
          <div class="radio-input">
            <input
              type="radio"
              id="test2"
              name="radio-group"
              value="Rooms"
              @change="rentalVacation"
              :checked="filters.rentalType == 'Rooms'"
            />
            <label for="test2">{{ $t("listingPage.room") }}</label>
          </div>
          <div class="radio-input">
            <input
              type="radio"
              id="test3"
              name="radio-group"
              value="House"
              @change="rentalVacation"
              :checked="filters.rentalType == 'House'"
            />
            <label for="test3">{{ $t("listingPage.house") }}</label>
          </div>
          <div class="radio-input">
            <input
              type="radio"
              id="test4"
              name="radio-group"
              value="Farm"
              @change="rentalVacation"
              :checked="filters.rentalType == 'Farm'"
            />
            <label for="test4">{{ $t("listingPage.farm") }}</label>
          </div>
          <div class="radio-input">
            <input
              type="radio"
              id="test5"
              name="radio-group"
              value="Resort"
              @change="rentalVacation"
              :checked="filters.rentalType == 'Resort'"
            />
            <label for="test5">{{ $t("listingPage.resort") }}</label>
          </div>
          <div class="radio-input">
            <input
              type="radio"
              id="test6"
              name="radio-group"
              value="Chalet"
              @change="rentalVacation"
              :checked="filters.rentalType == 'Chalet'"
            />
            <label for="test6">{{ $t("listingPage.chalet") }}</label>
          </div>
        </form>
      </section>
      <!-- Vacation Rental section  -->
      <!-- Gathern Choices Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.gathernChoicesFilters") }}</h6>
        <div class="form">
          <div class="gathern">
            <h5>{{ $t("listingPage.unique") }}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Donec aliquot dolor a vulputate dapibus, sem velit tempus</p>
            <p>mi, sit amet blandit lorem elit vel ligula.</p>
          </div>
          <div class="gathern">
            <h5>{{ $t("listingPage.stable") }}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Donec aliquot dolor a vulputate dapibus, sem velit tempus</p>
            <p>mi, sit amet blandit lorem elit vel ligula.</p>
          </div>
        </div>
      </section>
      <!-- Gathern Choices Filters section  -->
      <!-- Price Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.priceFilters") }}</h6>
        <form class="form">
          <PriceSlider @values="dataRange" />
        </form>
      </section>
      <!-- Price Filters section  -->
      <!-- Space Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.spaceFilters") }}</h6>
        <form class="form">
          <AreaSlider @values="areaRange" />
        </form>
      </section>
      <!-- Space Filters section  -->
      <!-- Review Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.reviewFilters") }}</h6>
        <form class="form">
          <label class="checkbox-container">
            {{ $t("listingPage.all") }}
            <!-- <input type="checkbox" checked="" /> -->
            <input
              type="checkbox"
              value="reviewAll"
              @change="reviewsFilters"
              :checked="filters.reviewAll"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            +5 {{ $t("listingPage.excellent") }}
            <input
              type="checkbox"
              @change="reviewsValues('excellent', '5')"
              :checked="filters.excellent"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            +4 {{ $t("listingPage.veryGood") }}
            <!-- <input type="checkbox" checked="" /> -->
            <input
              type="checkbox"
              @change="reviewsValues('veryGood', '4')"
              :checked="filters.veryGood"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            +3 {{ $t("listingPage.good") }}
            <input
              type="checkbox"
              @change="reviewsValues('good', '3')"
              :checked="filters.good"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            +2 {{ $t("listingPage.fair") }}
            <!-- <input type="checkbox" checked="" /> -->
            <input
              type="checkbox"
              @change="reviewsValues('fair', '2')"
              :checked="filters.fair"
            />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Review Filters section  -->
      <!-- Bedroom Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.bedroomFilters") }}</h6>
        <form class="form">
          <div class="bedrooms">
            <span>{{ $t("listingPage.bedroom") }}</span>
            <div class="count">
              <img
                src="../../assets/images/sub.png"
                @click="valueDecIn('bedroom', 'dec')"
              />
              <span>{{ filters.bedroom || 0 }}</span>
              <img
                src="../../assets/images/plus.png"
                @click="valueDecIn('bedroom', 'inc')"
              />
            </div>
          </div>
          <div class="bedrooms">
            <span>{{ $t("listingPage.singleBeds") }}</span>
            <div class="count">
              <img
                src="../../assets/images/sub.png"
                @click="valueDecIn('singleBeds', 'dec')"
              />
              <span>{{ filters.singleBeds || 0 }}</span>
              <img
                src="../../assets/images/plus.png"
                @click="valueDecIn('singleBeds', 'inc')"
              />
            </div>
          </div>
          <div class="bedrooms">
            <span>{{ $t("listingPage.doubleBed") }}</span>
            <div class="count">
              <img
                src="../../assets/images/sub.png"
                @click="valueDecIn('doubleBed', 'dec')"
              />
              <span>{{ filters.doubleBed || 0 }}</span>
              <img
                src="../../assets/images/plus.png"
                @click="valueDecIn('doubleBed', 'inc')"
              />
            </div>
          </div>
        </form>
      </section>
      <!-- Bedroom Filters section  -->
      <!-- Bathroom Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.bathroomFilters") }}</h6>
        <form class="form">
          <div class="bedrooms">
            <span>{{ $t("listingPage.bathrooms") }}</span>
            <div class="count">
              <img
                src="../../assets/images/sub.png"
                @click="valueDecIn('bathrooms', 'dec')"
              />
              <span>{{ filters.bathrooms || 0 }}</span>
              <img
                src="../../assets/images/plus.png"
                @click="valueDecIn('bathrooms', 'inc')"
              />
            </div>
          </div>
          <label class="checkbox-container">
            {{ $t("listingPage.soap&Tissues") }}
            <input
              type="checkbox"
              value="soapTissue"
              @change="toggleFacilities"
              :checked="filters.soapTissue"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.shampoo") }}
            <input
              type="checkbox"
              value="shampoo"
              @change="toggleFacilities"
              :checked="filters.shampoo"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.tissue") }}
            <input
              type="checkbox"
              value="tissue"
              @change="toggleFacilities"
              :checked="filters.tissue"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.soap") }}
            <input
              type="checkbox"
              value="soap"
              @change="toggleFacilities"
              :checked="filters.soap"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.bathTub") }}
            <input
              type="checkbox"
              value="bathtub"
              @change="toggleFacilities"
              :checked="filters.bathtub"
            />
            <span class="checkmark"></span>
          </label>
          <!-- <label class="checkbox-container">
            Bathtub
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label> -->
        </form>
      </section>
      <!-- Bathroom Filters section  -->
      <!-- Capacity Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.capacityFilters") }}</h6>
        <form class="form">
          <div class="bedrooms">
            <span>{{ $t("listingPage.guests") }}</span>
            <div class="count">
              <img
                src="../../assets/images/sub.png"
                @click="valueDecIn('guests', 'dec')"
              />
              <span>{{ filters.guests || 0 }}</span>
              <img
                src="../../assets/images/plus.png"
                @click="valueDecIn('guests', 'inc')"
              />
            </div>
          </div>
        </form>
      </section>
      <!-- Capacity Filters section  -->
      <!-- Check-in & Check-out Filters section  -->
      <section class="location-filter">
        <h6>Check-in & Check-out Filters</h6>
        <form class="form">
          <div class="input">
            <input
              type="date"
              placeholder="Chekck-in time"
              @change="getCheckIn"
              v-model="filters.checkIn"
            />
          </div>
          <div class="input">
            <input
              type="date"
              :placeholder="$t('detailPage.checkOutTime')"
              @change="getCheckOut"
              :value="filters.checkOut"
            />
          </div>
        </form>
      </section>
      <!-- Check-in & Check-out Filters section  -->
      <!-- Pool Type Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.poolTypeFilters") }}</h6>
        <form class="form">
          <!-- <div class="bedrooms">
            <span>Swimming Pool With Heat</span>
            <div class="count">
              <img
                src="../../assets/images/sub.png"
                @click="valueDecIn('swimmingPoolWithHeat', 'dec')"
              />
              <span>{{ filters.swimmingPoolWithHeat || 0 }}</span>
              <img
                src="../../assets/images/plus.png"
                @click="valueDecIn('swimmingPoolWithHeat', 'inc')"
              />
            </div>
          </div> -->
          <label class="checkbox-container">
            {{ $t("listingPage.all") }}
            <input
              type="checkbox"
              value="poolAll"
              @change="toggleFacilities"
              :checked="filters.poolAll"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.swimmingPoolWithHeat") }}
            <input
              type="checkbox"
              value="swimmingPoolWithHeat"
              @change="toggleFacilities"
              :checked="filters.swimmingPoolWithHeat"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.noPool") }}
            <input
              type="checkbox"
              value="noPool"
              @change="toggleFacilities"
              :checked="filters.noPool"
            />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Pool Type Filters section  -->
      <!-- Facilities Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.facilities") }}</h6>
        <form class="form">
          <label class="checkbox-container">
            {{ $t("listingPage.wifi") }}
            <input
              type="checkbox"
              value="wifi"
              @change="toggleFacilities"
              :checked="filters.wifi"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.speakers") }}
            <!-- <input type="checkbox" checked="" /> -->
            <input
              type="checkbox"
              value="speakers"
              @change="toggleFacilities"
              :checked="filters.speakers"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.playground") }}
            <input
              type="checkbox"
              value="playground"
              @change="toggleFacilities"
              :checked="filters.playground"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.footBallCourt") }}
            <input
              type="checkbox"
              value="footballCourt"
              @change="toggleFacilities"
              :checked="filters.footBallCourt"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.volleyBallCourt") }}
            <input
              type="checkbox"
              value="volleyballcourt"
              @change="toggleFacilities"
              :checked="filters.volleyballcourt"
            />
            <span class="checkmark"></span>
          </label>
          <!-- <label class="checkbox-container">
            Volleyballcourt
            <input
              type="checkbox"
              value="volleyballcourt"
              @change="toggleFacilities"
              :checked="filters.volleyballcourt"
            />
            <span class="checkmark"></span>
          </label> -->
          <!-- <label class="checkbox-container">
            Jacuzzi
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label> -->
        </form>
      </section>
      <!-- Facilities Filters section  -->
      <!-- Categories Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.categoriesFilters") }}</h6>
        <form class="form">
          <label class="checkbox-container">
            {{ $t("listingPage.couples") }}
            <input
              type="checkbox"
              value="couples"
              @change="toggleFacilities"
              :checked="filters.couples"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.familiesOnly") }}
            <input
              type="checkbox"
              value="familiesOnly"
              @change="toggleFacilities"
              :checked="filters.familiesOnly"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.singlesOnly") }}
            <input
              type="checkbox"
              value="singlesOnly"
              @change="toggleFacilities"
              :checked="filters.singlesOnly"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.travelers") }}
            <input
              type="checkbox"
              value="travelers"
              @change="toggleFacilities"
              :checked="filters.travelers"
            />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Categories Filters section  -->
      <!-- Kitchen Facilities Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.kitchenFacilitiesFilters") }}</h6>
        <form class="form">
          <label class="checkbox-container">
            {{ $t("listingPage.oven") }}
            <input
              type="checkbox"
              value="oven"
              @change="toggleFacilities"
              :checked="filters.oven"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.refrigerator") }}
            <!-- <input type="checkbox" checked="" /> -->
            <input
              type="checkbox"
              value="refrigerator"
              @change="toggleFacilities"
              :checked="filters.refrigerator"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.microwave") }}
            <input
              type="checkbox"
              value="microwave"
              @change="toggleFacilities"
              :checked="filters.microwave"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.barbequeCorner") }}
            <input
              type="checkbox"
              value="barbequeCorne"
              @change="toggleFacilities"
              :checked="filters.barbequeCorne"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.coffeMachine") }}
            <input
              type="checkbox"
              value="coffeMachine"
              @change="toggleFacilities"
              :checked="filters.coffeMachine"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.kitchenUtensils") }}
            <input
              type="checkbox"
              value="kitchenUtensils"
              @change="toggleFacilities"
              :checked="filters.kitchenUtensils"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.woodStove") }}
            <input
              type="checkbox"
              value="woodStove"
              @change="toggleFacilities"
              :checked="filters.woodStove"
            />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Kitchen Facilities Filters section  -->
      <!-- add Facilities Filters section  -->
      <section class="location-filter">
        <h6>{{ $t("listingPage.other") }}</h6>
        <form class="form last-block">
          <label class="checkbox-container">
            {{ $t("listingPage.indoorWithBarrier") }}
            <input
              type="checkbox"
              value="indoorWithBarrier"
              @change="toggleFacilities"
              :checked="filters.indoorWithBarrier"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.indoorWithoutBarrier") }}
            <input
              type="checkbox"
              value="indoorWithoutBarrier"
              @change="toggleFacilities"
              :checked="filters.indoorWithoutBarrier"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.outdoorWithBarrier") }}
            <input
              type="checkbox"
              value="outdoorWithBarrier"
              @change="toggleFacilities"
              :checked="filters.outdoorWithBarrier"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.outdoorWithoutBarrier") }}
            <input
              type="checkbox"
              value="outdoorWithoutBarrier"
              @change="toggleFacilities"
              :checked="filters.outdoorWithoutBarrier"
            />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            {{ $t("listingPage.swimmingWithWaterGames") }}
            <input
              type="checkbox"
              value="swimmingWithWaterGames"
              @change="toggleFacilities"
              :checked="filters.swimmingWithWaterGames"
            />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- add Facilities Filters section  -->
    </div>
  </section>
</template>

<script>
import PriceSlider from "./priceSlider.vue";
import AreaSlider from "./areaSlider.vue";
// import facilitiesVue from '../hotelDetail/facilities.vue';
export default {
  name: "HotelFilters",
  data() {
    return {
      filters: {},
    };
  },
  components: {
    PriceSlider,
    AreaSlider,
  },
  mounted() {
    var q = this.$route.query;
    delete q.page;
    this.filters = q;
  },
  methods: {
    handleFilterNow(){
     console.log('working')
    },
    getCheckIn(ev) {
      this.filters.checkIn = ev.target.value;
      this.pushUrl();
    },
    getCheckOut(ev) {
      this.filters.checkOut = ev.target.value;
      this.pushUrl();
    },
    valueDecIn(key, op) {
      if (op == "inc") {
        var exist = key in this.filters;
        if (!exist) {
          this.filters[key] = 0;
        }
        this.filters[key] = parseInt(this.filters[key]) + 1;
        console.log(this.filters);
      } else {
        if (this.filters[key] <= 0) return;
        this.filters[key] = parseInt(this.filters[key]) - 1;
      }
      this.pushUrl();
    },
    rentalVacation(e) {
      this.filters.rentalType = e.target.value;
      this.pushUrl();
    },
    reviewsFilters(ev) {
      if (this.filters[ev.target.value]) {
        delete this.filters[ev.target.value];
      } else {
        this.filters[ev.target.value] = ev.target.value;
      }
      this.pushUrl();
    },
    reviewsValues(key, value) {
      if (this.filters[key] == value) {
        delete this.filters[key];
      } else {
        this.filters[key] = value;
      }
      this.pushUrl();
    },
    toggleFacilities(ev) {
      if (this.filters[ev.target.value]) {
        this.filters[ev.target.value] = false;
      } else {
        this.filters[ev.target.value] = true;
      }
      this.pushUrl();
    },
    dataRange(val) {
      this.filters.minPrice = val.minPrice;
      this.filters.maxPrice = val.maxPrice;
      this.pushUrl();
    },
    areaRange(val) {
      this.filters.minArea = val.minArea;
      this.filters.maxArea = val.maxArea;
      this.pushUrl();
    },
    handleBlur() {
      this.pushUrl();
    },
    pushUrl() {
      var url = this.constructURL("/", "filters", this.filters) + "page=1";
      this.$router.push(url);
    },
    constructURL(url, category, fl) {
      if (category) url += category + "?";
      Object.keys(fl).forEach((e) => {
        // && fl[e].length > 0
        if (fl[e] && fl[e] !== "undefined") url += `${e}=${fl[e]}&`;
      });
      return url;
    },
  },
  watch: {
    "$route.query": {
      immediate: true,
      handler() {
        var q = this.$route.query;
        delete q.page;
        this.filters = q;
      },
    },
  },
};
</script>

<style scoped>
.last-block {
  border-bottom: none !important;
  padding-bottom: 40px !important;
}
.apartments-filters {
  box-shadow: 0px 0px 7px 1px #0000001a;
  border-radius: 18px;
  opacity: 1;
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
}
.apartments-filters .inner {
  height: 2150px;
  overflow-y: scroll;
  scrollbar-color: #d4aa70 #e4e4e4;
}
.apartments-filters .inner::-webkit-scrollbar {
  width: 5px;
}
.apartments-filters .inner::-webkit-scrollbar-track {
  background-color: #0e476348;
  border-radius: 100px;
}
.apartments-filters .inner::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 18px #febb12;
  border-radius: 100px;
}
.apartments-filters .inner h6 {
  color: #0e4763;
  font-size: 14px;
  text-align: left;
  padding: 25px 15px 0 15px;
}
.apartments-filters .form {
  padding: 20px 15px;
  border-bottom: 0.5px solid #0000000f;
  text-align: left;
}

.apartments-filters .form .option {
  box-shadow: 0px 0px 8px #0000000f;
  border-radius: 28px;
  opacity: 1;
  padding: 0 15px;
  margin: 10px 0;
}
.apartments-filters .form input {
  border: none;
  outline: none;
  color: #a5a5a5;
  font-size: 12px;
  width: 100%;
  padding: 14px 0;
  cursor: pointer;
}
.apartments-filters .form .checkbox {
  margin: 10px 0 15px 0;
  display: flex;
  align-items: center;
}
.apartments-filters .form .input {
  margin-bottom: 15px;
}
.apartments-filters .form .input input {
  border: none;
  outline: none;
  color: #a5a5a5;
  font-size: 12px;
  width: 90%;
  box-shadow: 0px 0px 8px #0000000f;
  border-radius: 28px;
  opacity: 1;
  padding: 15px;
}
.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #000000;
  height: 25px;
}
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px #0000000f;
  opacity: 1;
}

/* .checkbox-container input:checked ~ .checkmark {
  background-color: #febb12;
} */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #febb12;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.gathern {
  padding-left: 15px;
  line-height: 1.7;
  margin-bottom: 15px;
}
.gathern h5 {
  color: #000000;
  font-size: 14px;
}
.gathern p {
  color: #000000;
  font-size: 10px;
}
.bedrooms {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.bedrooms > span {
  font-size: 14px;
  color: #000000;
}
.bedrooms .count {
  display: flex;
  align-content: center;
}
.bedrooms .count span {
  margin: 5px;
  font-size: 14px;
  color: #000000;
  font-weight: 600;
}

.bedrooms .count img {
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
}
.radio .radio-input {
  margin-bottom: 15px;
}
.radio [type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
.radio [type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #000;
  font-size: 12px;
}
.radio [type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: -3px;
  width: 20px;
  height: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  box-shadow: 0px 0px 4px #0000000f;
  background: #fff;
}
.radio [type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 5px;
  height: 10px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 7px;
  border: solid #febb12;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg) !important;
}
.radio [type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
.radio [type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
/* for side filter */
.set-langauge .location-filter .checkmark{
  left: unset;
  right:0!important;
}
.set-langauge .checkbox-container,.set-langauge label{
  /* justify-content: flex-end; */
  padding-right: 30px;
}
.set-langauge .location-filter .form{
  text-align: right!important;
}
.set-langauge h6{
  text-align: right!important;
}
.set-langauge .radio [type="radio"]:checked + label:before,
.set-langauge  [type="radio"]:not(:checked) + label:before {
  left:unset!important;
  right: 0;
}
/* .set-langauge .bedrooms{
 flex-direction: row-reverse;
} */
/* side end */
</style>
