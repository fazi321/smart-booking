<template>
  <section :class="['account-container', { active: model }]">
    <!-- step one -->
    <section class="primary-login" v-if="step == 1">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{$t('pricing.priceDetails')}}</h1>
          <h4><button @click="back(2)">back</button>Pricing</h4>
        </div>
        <section class="price-container">
          <div class="container-price">
            <div class="price-primary">
              <div class="head-price">
                <h5>{{ $t("pricing.name") }}</h5>
                <h5>{{ $t("pricing.price") }}</h5>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.daysPrice") }}
                  <input type="checkbox" v-model="daySelected.dayPrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.dayPrice" :disabled="!daySelected.dayPrice"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.weekdays") }}
                  <p>({{ $t("pricing.sunWed") }})</p>
                  <input type="checkbox" v-model="daySelected.weekDaysPrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.weekDaysPrice" :disabled="!daySelected.weekDaysPrice"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.sunday") }}
                  <input type="checkbox" v-model="daySelected.sundayPrice" :disabled="daySelected.weekDaysPrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.sundayPrice" :disabled="!daySelected.sundayPrice || daySelected.weekDaysPrice" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.monday") }}
                  <input type="checkbox" v-model="daySelected.mondayPrice" :disabled="daySelected.weekDaysPrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.mondayPrice" :disabled="!daySelected.mondayPrice || daySelected.weekDaysPrice"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.tuesday") }}
                  <input type="checkbox" v-model="daySelected.tuesdayPrice" :disabled="daySelected.weekDaysPrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.tuesdayPrice" :disabled="!daySelected.tuesdayPrice || daySelected.weekDaysPrice" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.wednesday") }}
                  <input type="checkbox" v-model="daySelected.wednesdayPrice" :disabled="daySelected.weekDaysPrice"/>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.wednesdayPrice" :disabled="!daySelected.wednesdayPrice || daySelected.weekDaysPrice"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.thursday") }}
                  <input type="checkbox" v-model="daySelected.thrusdayPrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.thrusdayPrice" :disabled="!daySelected.thrusdayPrice"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.friday") }}
                  <input type="checkbox" v-model="daySelected.fridayPrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.fridayPrice" :disabled="!daySelected.fridayPrice"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.saturday") }}
                  <input type="checkbox" v-model="daySelected.saturdayPrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="number" v-model="price.saturdayPrice" :disabled="!daySelected.saturdayPrice"/>
              </div>
            </div>
            <!-- block -->
          </div>
          <div class="booking-date">
            <div class="head-booking">
             <h5>
                {{$t('pricing.howLongServiceOpen')}}
              </h5>
            </div>
            <div class="date-input">
              <div @click="showModelDate('fd')">
                <input type="text" placeholder="From Date" v-model="fromDate" />
                <input
                  type="date"
                  @change="checkDate"
                  id="date-set"
                  ref="fd"
                  v-model="fromDate"
                />
              </div>
              <div @click="showModelDate('td')">
                <input type="text" placeholder="To Date" v-model="toDate" />
                <input
                  type="date"
                  @change="checkDate"
                  id="date-set"
                  ref="td"
                  v-model="toDate"
                />
              </div>
            </div>
          </div>
          <!-- block -->
        </section>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(2)">{{$t('AddService.next')}}</button>
          </div>
        </div>
      </div>
    </section>
    <!-- step two End -->
    <section class="primary-login" v-if="step == 2">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{$t('pricing.priceDetails')}}</h1>
          <h4><button @click="goBack(1)">{{$t("AddService.back")}}</button>{{$t("pricing.bookingSettings")}}</h4>
        </div>
        <section class="booking">
          <div>
             <div class="head">
              <h1>{{$t("pricing.category")}}</h1>
            </div>
            <div class="container-service container-amenities">
              <div class="cards">
                <div
                  :class="{
                    active: bookingSetting.bookingFor == 'Families_and_Singles',
                  }"
                  @click="bookSettings('Families_and_Singles')"
                >
                  <img
                    src="../../../../assets/images/familiesSingle.svg"
                    alt=""
                  />
                  <h6>{{$t("pricing.families&")}}</h6>
                  <h6>{{$t("pricing.singles")}}</h6>
                </div>
                <div
                  :class="{
                    active: bookingSetting.bookingFor == 'families_only',
                  }"
                  @click="bookSettings('families_only')"
                >
                  <img src="../../../../assets/images/families.svg" alt="" />
                  <h6>{{$t("pricing.familiesOnly")}}</h6>
                </div>
                <div
                  :class="{
                    active: bookingSetting.bookingFor == 'ladies_only',
                  }"
                  @click="bookSettings('ladies_only')"
                >
                  <img src="../../../../assets/images/ladies.svg" alt="" />
                  <h6>{{$t("pricing.ladiesOnly")}}</h6>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="head">
              <h1>{{$t("pricing.other")}}</h1>
            </div>
            <div class="container-service container-amenities card-other">
              <div class="cards">
                <div>
                  <div class="content" @click="showBookPop('book')">
                    <h5>{{$t("pricing.bookingType")}}</h5>
                    <h6>{{$t("pricing.bookingTypeNameHere")}}</h6>
                  </div>
                </div>
                <div>
                  <div class="content" @click="showBookPop('cencel')">
                    <h5>{{$t("pricing.cancellationPolicy")}}</h5>
                    <h6>{{$t("pricing.cancellationPolicyNameHere")}}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="deposite-section">
            <div class="head">
              <h5>{{$t("pricing.securityDeposit")}}</h5>
            </div>
            <div class="toggle-btn">
              <label class="switch">
                <input
                  type="checkbox"
                  v-model="bookingSetting.securityDeposit"
                />
                <span class="slider"></span>
              </label>
            </div>
          </div>
          <div v-if="bookingSetting.securityDeposit" class="security">
            <input
              type="number"
              placeholder="security amount"
              v-model="bookingSetting.securityAmount"
            />
          </div>
          <div class="deposite-section deposite-set">
            <div class="head">
              <h5>{{ $t("pricing.lastMinuteDiscount") }}</h5>
              <div class="inputLastMinute" v-if="bookingSetting.lastMinuteDiscount">
                <div>
                  <input type="number" min="1" v-model="bookingSetting.days" placeholder="Days"/>
                  <input type="number" min="1" v-model="bookingSetting.discountPercentage" placeholder="Discount Percentage"/>
                </div>
              </div>
              <!-- <p>
                Lorem ipsum dolor sit amet, consectetur adipis<br />cing elit.
                Integer consectetur nulla at enim aliqu<br />et, lobortis ipsum
                molestie.
              </p> -->
            </div>
            <div class="toggle-btn">
              <label class="switch">
                <input
                  type="checkbox"
                  v-model="bookingSetting.lastMinuteDiscount"
                />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </section>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(5)">{{$t('AddService.next')}}</button>
          </div>
        </div>
      </div>
    </section>
    <!-- step three -->
    <section class="primary-login" v-if="showPopUp == 'book'">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{$t('pricing.priceDetails')}}</h1>
          <h4>{{ $t("pricing.bookingType") }}</h4>
        </div>
        <section class="booking-type">
          <div class="booking-card book-instant">
            <div class="cards">
              <div
                :class="[
                  'primary-cards',
                  { active: bookingSetting.bookingType == 'instant' },
                ]"
                @click="bookInstant('instant')"
              >
                <!-- <div class="rounded-btn"></div> -->
                <div class="card-container">
                  <div class="category-img">
                    <img src="../../../../assets/images/instant.svg" alt="" />
                  </div>
                </div>
                <div :class="['content']">
                  <h5>{{ $t("pricing.instantBooking") }}</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Fusce ac odio at urna curs <br />us
                    lacinia.
                  </h6>
                </div>
              </div>
              <div
                :class="[
                  'primary-cards',
                  { active: bookingSetting.bookingType == '24-Hour request' },
                ]"
                @click="bookInstant('24-Hour request')"
              >
                <!-- <div class="rounded-btn"></div> -->
                <div class="card-container">
                  <div class="category-img">
                    <img src="../../../../assets/images/request.svg" alt="" />
                  </div>
                </div>
                <div :class="['content']">
                  <h5>{{ $t("pricing.24-HourRequest") }}</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Fusce ac odio at urna curs <br />us
                    lacinia.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(2)">{{$t('AddService.next')}}</button>
          </div>
        </div>
      </div>
    </section>
    <!-- step 4 -->
    <section class="primary-login cancelation" v-if="showPopUp == 'cencel'">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{$t('pricing.priceDetails')}}</h1>
          <h4>{{ $t("pricing.cancellationPolicy") }}</h4>
        </div>
        <section class="booking-type">
          <div class="booking-card">
            <div class="cards">
              <div
                :class="[
                  'primary-cards',
                  { active: bookingSetting.canellationPolicy == 'Flexible' },
                ]"
                @click="cancelation('Flexible')"
              >
                <!-- <div class="rounded-btn"></div> -->
                <div class="content">
                  <h5>{{ $t("pricing.flexible") }}</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ac odio at urna curs us lacinia.
                  </h6>
                </div>
              </div>
              <div
                :class="[
                  'primary-cards',
                  { active: bookingSetting.canellationPolicy == 'Moderate' },
                ]"
                @click="cancelation('Moderate')"
              >
                <!-- <div class="rounded-btn"></div> -->
                <div class="content">
                  <h5> {{ $t("pricing.moderate") }}</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ac odio at urna curs us lacinia.
                  </h6>
                </div>
              </div>
              <div
                :class="[
                  'primary-cards',
                  { active: bookingSetting.canellationPolicy == 'Strict' },
                ]"
                @click="cancelation('Strict')"
              >
                <!-- <div class="rounded-btn"></div> -->
                <div class="content">
                  <h5> {{ $t("pricing.strict") }}</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ac odio at urna curs us lacinia.
                  </h6>
                </div>
              </div>
              <div
                :class="[
                  'primary-cards',
                  {
                    active:
                      bookingSetting.canellationPolicy == 'Non-Refundable',
                  },
                ]"
                @click="cancelation('Non-Refundable')"
              >
                <!-- <div class="rounded-btn"></div> -->
                <div class="content">
                  <h5> {{ $t("pricing.nonRefundable") }}</h5>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ac odio at urna curs us lacinia.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(2)">{{$t('AddService.next')}}</button>
          </div>
        </div>
      </div>
    </section>
    <!-- step five -->
    <section class="primary-login cancelation" v-if="step == 5">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{$t('pricing.priceDetails')}}</h1>
          <h4><button @click="goBack(2)">{{ $t("AddService.back") }}</button>{{ $t("pricing.addOns") }}</h4>
        </div>
        <section class="price-unset">
          <div class="container-price">
            <div class="price-primary">
              <div class="head-price">
               <h5>{{$t('pricing.name')}}</h5>
                <h5>{{$t('pricing.price')}}</h5>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.namePrice") }}
                  <input type="checkbox" v-model="addOnsCheck.namePrice" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" v-model="addOnsPrice.namePrice" :disabled="!addOnsCheck.namePrice"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.sleepover") }}
                  <input type="checkbox" v-model="addOnsCheck.sleepover" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" v-model="addOnsPrice.sleepover" :disabled="!addOnsCheck.sleepover"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{$t('pricing.birthdayArrangements')}}
                  <input
                    type="checkbox"
                    v-model="addOnsCheck.brithdayArrangements"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" v-model="addOnsPrice.brithdayArrangements" :disabled="!addOnsCheck.brithdayArrangements"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.weddingArrangements") }}
                  <input
                    type="checkbox"
                    v-model="addOnsCheck.weddingArrangements"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" v-model="addOnsPrice.weddingArrangements" :disabled="!addOnsCheck.weddingArrangements"/>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.buffet") }}
                  <input type="checkbox" v-model="addOnsCheck.buffet" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" v-model="addOnsPrice.buffet" :disabled="!addOnsCheck.buffet" />
              </div>
            </div>
            <!-- <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.birthdayArrangements") }}
                  <input
                    type="checkbox"
                    v-model="addOnsCheck.birthdayArrangements"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" v-model="addOnsPrice.birthdayArrangements" :disabled="!addOnsCheck.birthdayArrangements"/>
              </div>
            </div> -->
            <!-- block -->
            <!-- <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >{{ $t("pricing.buffet") }}
                  <input type="checkbox" v-model="addOnsCheck.buffet" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" v-model="addOnsPrice.buffet" :disabled="!addOnsCheck.buffet" />
              </div>
            </div>
            <div class="rules">
              <label class="container-input"
                >{{ $t("pricing.photographer") }}
                <input type="checkbox" v-model="addOnsPrice.Photographer" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="rules">
              <label class="container-input"
                >{{ $t("pricing.weddingCake") }}
                <input type="checkbox" v-model="addOnsPrice.weddingCake" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <!-- block -->
            <!-- <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Buffets
                  <input type="checkbox" v-model="addOnsCheck.Buffets" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" v-model="addOnsPrice.Buffets" :disabled="!addOnsCheck.Buffets"/>
              </div>
            </div> -->
          </div>
        </section>
        <div class="form-container">
          <div class="input-div" v-if="!$store.state.details.btnLastLoading">
            <button type="submit" @click="submitedData">{{$t('AddService.next')}}</button>
          </div>
          <div class="input-div" v-else>
            <button type="submit">Loading...</button>
          </div>
        </div>
      </div>
    </section>
    <SuccessModel v-if="step == 6" @close="close" />
  </section>
</template>

<script>
import SuccessModel from "@/components/models/SuccessModel.vue";
export default {
  name: "AddServiceModel",
  props: ["model"],
  components: {
    SuccessModel,
  },
  data() {
    return {
      nextStep: null,
      step: 1,
      //  data picker
      fromDate: null,
      toDate: null,
      // checkIn: null,
      // checkOut: null,
      serviceType: null,
      showPopUp: null,
      // date picker
      price: {},
      daySelected: {},
      bookingSetting: {},
      addOnsCheck: {},
      addOnsPrice: {},
    };
  },
  methods: {
    formatedDate(val){
      var arr = val.split("-")
      var s = `${arr[2]}-${arr[1]}-${arr[0]}` 
      console.log(s)
      return s
    },
    back(step) {
      this.$parent.backServiceModel(step, "service");
    },
    goBack(step) {
      this.step = step;
    },
    submitedData() {
      // price
      const newObj = {};
      for (const [key, value] of Object.entries(this.daySelected)) {
        if (value) {
          for (const [pkey, pValue] of Object.entries(this.price)) {
            if (key == pkey) {
              newObj[key] = pValue;
            }
          }
        }
      }
      if(this.fromDate){
        newObj.openFrom = this.formatedDate(this.fromDate)
      }
      if(this.toDate){
        newObj.openTo = this.formatedDate(this.toDate)
      }
      //  time check in out
      // var check = {};
      // if (this.checkIn && this.checkOut) {
      //   check.checkInTime = this.timeFormate(this.checkIn);
      //   check.checkOutTime = this.timeFormate(this.checkOut);
      // }
      // addon's
      const newAddon = {};
      for (const [key, value] of Object.entries(this.addOnsCheck)) {
        if (value) {
          for (const [pkey, pValue] of Object.entries(this.addOnsPrice)) {
            if (key == pkey) {
              newAddon[key] = pValue;
            }
          }
        }
      }
      if (!this.bookingSetting.securityDeposit) {
        delete this.bookingSetting.securityAmount;
      }
      if(!this.bookingSetting.lastMinuteDiscount){
        delete this.bookingSetting.days;
        delete this.bookingSetting.discountPercentage;
      }
      var finalData = {
        addOns: { ...newAddon },
        price: { ...newObj },
        // check: { ...check },
        bookingSetting: { ...this.bookingSetting },
      };
      this.$emit("price", finalData);
    },
    bookInstant(val) {
      this.bookingSetting.bookingType = val;
    },
    cancelation(val) {
      this.bookingSetting.canellationPolicy = val;
    },
    showModelDate(val) {
      var isShow = this.$refs[val];
      try {
        isShow.showPicker();
      } catch (error) {
        console.log(error);
      }
    },
    showBookPop(val) {
      (this.step = ""), (this.showPopUp = val);
    },
    timeFormate(time) {
      var timeSplit = time.split(":"),
        hours,
        minutes,
        meridian;
      hours = timeSplit[0];
      minutes = timeSplit[1];
      if (hours > 12) {
        meridian = "PM";
        hours -= 12;
      } else if (hours < 12) {
        meridian = "AM";
        if (hours == 0) {
          hours = 12;
        }
      } else {
        meridian = "PM";
      }
      var timeIs = hours + ":" + minutes + ":" + meridian;
      return timeIs;
    },
    changeStep(step) {
      // if (!this.serviceType) return;
      this.step = step;
      this.showPopUp = null;
    },
    selectedOptions(opt) {
      this.serviceType = opt;
    },
    bookSettings(val) {
      this.bookingSetting.bookingFor = val;
    },
    close() {
      this.$emit("close");
    },
  },
  watch: {
    'daySelected.weekDaysPrice': {
      handler(newValue) {
        if(newValue){
          this.daySelected.sundayPrice = true;
          this.daySelected.mondayPrice = true;
          this.daySelected.tuesdayPrice = true;
          this.daySelected.wednesdayPrice = true;
          
          this.price.sundayPrice = this.price.weekDaysPrice;
          this.price.mondayPrice = this.price.weekDaysPrice;
          this.price.tuesdayPrice = this.price.weekDaysPrice;
          this.price.wednesdayPrice = this.price.weekDaysPrice;
        }else{
          this.daySelected.sundayPrice = false;
          this.daySelected.mondayPrice = false;
          this.daySelected.tuesdayPrice = false;
          this.daySelected.wednesdayPrice = false;
          this.price.weekDaysPrice = null;
          this.price.sundayPrice = null;
          this.price.mondayPrice = null;
          this.price.tuesdayPrice = null;
          this.price.wednesdayPrice = null;
        }
      },
      deep: true
    },
    'price.weekDaysPrice': {
      handler(newValue) {
        if(newValue){
          this.price.sundayPrice = newValue;
          this.price.mondayPrice = newValue;
          this.price.tuesdayPrice = newValue;
          this.price.wednesdayPrice = newValue;
        }else{
          this.price.weekDaysPrice = null;
          this.price.sundayPrice = null;
          this.price.mondayPrice = null;
          this.price.tuesdayPrice = null;
          this.price.wednesdayPrice = null;
        }
      },
      deep: true
    }
  }
};
</script>

<style scoped>
#date-set {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
/* transition */
.transitionBox {
  transition: 0.3s;
  transform: translateX(100%);
}
.transitionActive {
  transform: translateX(0);
}
/* transition */

.main-section {
  display: flex;
  justify-content: center;
  width: 100%;
}
.account-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  visibility: hidden;
}
.account-container.active {
  visibility: visible;
}
.primary-login {
  width: 623px;
  background: #fff;
  height: fit-content;
  padding: 25px;
  border-radius: 20px;
  transition: 0.2s linear;
  transform: translateY(-100%);
}
.account-container.active .primary-login {
  transform: translateY(0);
}
.logo-close {
  display: flex;
  justify-content: center;
  position: relative;
}
.logo-close .logo {
  width: 120px;
}
img {
  width: 100%;
  height: 100%;
}
.close-icon {
  cursor: pointer;
  top: -10px;
  position: absolute;
  right: 0;
  width: 35px;
  height: 35px;
}
.headings {
  text-align: center;
  padding: 0 24px 24px 24px;
  margin: 15px 0;
}
.headings h1 {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 26px;
}
.headings h4 {
  font-weight: 500;
  font-size: 16px;
}
.headings h4 span {
  color: #febb12;
}
.add-services .headings {
  padding-bottom: 5px;
}
.input-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 18px;
}
.input-div button {
  background: #febb12;
  color: #000;
  font-size: 18px;
  border: none;
  padding: 14px 30px;
  border-radius: 50px;
  outline: none;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
  min-width: 263px;
  cursor: pointer;
}
.step-btn {
  margin-top: 10px;
  margin-bottom: 5px;
}
/* step one */
.container-price {
  padding: 0 30px;
}
.container-price .price-primary .head-price {
  display: flex;
  justify-content: space-between;
  margin: 20px 33px;
}
.container-price .price-primary .head-price h5 {
  font-weight: bold;
}
.price-inputs {
  display: flex;
  justify-content: space-between;
}
.price-inputs .price-checkbox .container-input p {
  font-size: 12px;
  display: inline-block;
}
.price-inputs .price-checkbox .container-input {
  margin: 16px 0;
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}
/* Hide the browser's default checkbox */
.price-inputs .price-checkbox .container-input input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.price-inputs .price-checkbox .checkmark {
  position: absolute;
  top: -5px;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 20px;
  box-shadow: 0px 1px 12px -2px #00000040;
}
/* Create the checkmark/indicator (hidden when not checked) */
.price-inputs .price-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.price-inputs
  .price-checkbox
  .container-input
  input:checked
  ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.price-inputs .price-checkbox .container-input .checkmark:after {
  left: 5px;
  top: 5px;
  width: 15px;
  height: 15px;
  background: #febb12;
  border-radius: 35px;
}
.input-price input {
  outline: none;
  border-radius: 20px;
  border: unset;
  box-shadow: 0px 1px 12px -2px #00000040;
  padding: 8px;
  width: 82px;
}
.booking-date .head-booking h5 {
  text-align: left;
  padding-bottom: 20px;
  font-size: 16px;
}
.booking-date {
  padding: 0px 30px;
  margin: 20px 0;
}
.booking-date .date-input {
  display: flex;
  justify-content: space-between;
}
.booking-date .date-input > div {
  position: relative;
}
.booking-date .date-input input {
  outline: none;
  font-size: 12px;
  padding: 18px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  min-width: 220px;
  margin: 8px 0;
}
.price-container {
  height: 350px;
  overflow-y: scroll;
}
/* step two */
.head {
  text-align: left;
  width: 92%;
  margin: 18px auto 20px auto;
}
.head {
  text-align: left;
  width: 92%;
  margin: 18px auto 20px auto;
}
.container-service .cards img {
  width: 40px;
  height: 42px;
  /* margin: 0px 0 15px 0; */
}
.container-amenities .cards > div {
  height: 90px;
  margin: 10px 36px 14px 0px;
}
.container-amenities .cards > div h6 {
  font-size: 12px;
}
.container-amenities .cards > div:nth-child(4n + 0) {
  margin-right: 0;
}
.container-service .cards {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 14px;
}
.container-service .cards > div {
  box-shadow: 0px 1px 12px -2px #00000040;
  width: 106px;
  height: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10px 30px 14px 10px;
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid transparent;
}
.container-service .cards .active {
  border: 1px solid #febb12;
}
.card-other .cards {
  justify-content: flex-start;
  display: flex;
}
.card-other .cards > div {
  width: 226px;
  align-items: flex-start;
  text-align: left;
  padding: 0px 19px;
  height: 80px;
  margin: 10px 16px 14px 10px;
}
.card-other .content {
  line-height: 2;
}
.card-other .content h5 {
  font-size: 16px;
}
.card-other .content h6 {
  font-size: 12px;
}
.deposite-section {
  display: flex;
  justify-content: space-between;
  padding: 0px 45px 0 25px;
}
.deposite-section .toggle-btn {
  display: flex;
  align-items: center;
}
.deposite-set .toggle-btn {
  display: unset;
  margin-top: 10px;
}
.deposite-set .head {
  margin-top: 16px;
}
/* toggle btn */
.toggle-btn .switch {
  position: relative;
  display: inline-block;
  width: 58px;
  height: 24px;
}

.toggle-btn .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-btn .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e7e7e7;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.toggle-btn .slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: #b2b2b2;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  top: 3px;
}

.toggle-btn input:checked + .slider {
  background-color: #febb12;
}

.toggle-btn input:focus + .slider {
  box-shadow: 0 0 1px #b2b2b2;
}

.toggle-btn input:checked + .slider:before {
  -webkit-transform: translateX(33px);
  -ms-transform: translateX(33px);
  transform: translateX(33px);
}
.head p {
  font-size: 12px;
  margin-top: 10px;
  line-height: 1.5;
}
.booking {
  height: 350px;
  overflow-y: scroll;
}
.booking .head h1 {
  font-size: 14px;
}
/* step three */
.booking-type .cards {
  display: flex;
  justify-content: space-between;
  width: 98%;
  flex-wrap: wrap;
  padding: 10px;
}
.booking-type .primary-cards {
  width: 46%;
  height: 100px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 1px 11px -5px #0000006b;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0;
  margin-bottom: 22px;
  position: relative;
}
.book-instant .primary-cards {
  width: 47% !important;
}
.booking-type .primary-cards .category-img {
  width: 50px;
  height: 50px;
  position: relative;
  left: 14px;
  border-radius: 50%;
  box-shadow: 0px 1px 11px -5px #0000006b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.booking-type .primary-cards .category-img img {
  width: 60%;
  height: 60%;
}
.booking-type .primary-cards .content {
  text-align: left;
  line-height: 1.5;
}
.booking-type .primary-cards.active {
  border: 1px solid #febb12;
}
.booking-type .primary-cards h6 {
  color: #393f45;
  margin-top: 3px;
  font-size: 8px;
}
.booking-type .primary-cards h5 {
  font-size: 14px;
}
.booking-type .card-container {
  width: 28%;
}
.primary-cards .rounded-btn {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  box-shadow: 0px 1px 12px -2px #00000040;
  position: absolute;
  right: 10px;
}
/* step 4 */
.cancelation .booking-type .cards {
  padding: 10px 0;
}
.cancelation .booking-type .primary-cards {
  padding-left: 10px;
  height: 80px;
}
.cancelation .booking-type .primary-cards .content {
  width: 83%;
}
/* step 5 */
.price-unset {
  height: unset;
  overflow-y: unset;
}
.rules {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 85%;
}
.rules > div {
  width: 42%;
}
.rules .container-input {
  margin: 20px 0;
  display: block;
  color: #c4c9d5;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}
/* Hide the browser's default checkbox */
.rules .container-input input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.rules .checkmark {
  position: absolute;
  top: -5px;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  box-shadow: 0px 1px 12px -2px #00000040;
}
/* Create the checkmark/indicator (hidden when not checked) */
.rules .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.rules .container-input input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.rules .container-input .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #febb12;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
