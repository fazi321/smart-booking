<template>
  <section :class="['account-container', { active: model }]">
    <!-- step one -->
    <div class="primary-login" v-if="step == 1">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Price Details</h1>
          <h4>Pricing</h4>
        </div>
        <section class="price">
          <div class="container-price">
            <div class="price-primary">
              <div class="head-price">
                <h5>Name</h5>
                <h5>Price</h5>
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Weekdays
                  <p>(Sun-Wed)</p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Sunday
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Monday
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Tuesday
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Wednesday
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Thursday
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Friday
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" />
              </div>
            </div>
            <!-- block -->
            <div class="price-inputs">
              <div class="price-checkbox">
                <label class="container-input"
                  >Saturday
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-price">
                <input type="text" />
              </div>
            </div>
            <!-- block -->
          </div>
          <div class="booking-date">
            <div class="head-booking">
              <h5>How long the service will be open for booking?</h5>
            </div>
            <div class="date-input">
              <div @click="showModelDate('fd')">
                <input type="text" placeholder="From Date" v-model="fromDate"/>
                <input type="date" @change="checkDate" id="date" ref="fd" v-model="fromDate" />
              </div>
              <div @click="showModelDate('td')">
                <input type="text" placeholder="To Date" v-model="toDate" />
                <input type="date" @change="checkDate" id="date" ref="td" v-model="toDate" />
              </div>
            </div>
          </div>
          <!-- block -->
          <div class="booking-date">
            <div class="head-booking">
              <h5>Select Check-in & Check-out times</h5>
            </div>
            <div class="date-input">
              <div @click="showModelDate('cn')">
                <input type="text" placeholder="Check in" v-model="checkIn" />
                <input type="date" @change="checkDate" id="date" ref="cn" v-model="checkIn"/>
              </div>
              <div @click="showModelDate('co')">
                <input type="text" placeholder="Check out" v-model="checkOut"/>
                <input type="date" @change="checkDate" id="date" ref="co" v-model="checkOut" />
              </div>
            </div>
          </div>
        </section>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(2)">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step one End -->
  </section>
</template>

<script>
export default {
  name: "AddServiceModel",
  props: ["model"],
  data() {
    return {
      nextStep: null,
      step: 1,
    //  data picker
      fromDate: null,
      toDate: null,
      checkIn: null,
      checkOut: null
      // date picker
    };
  },
  methods: {
    showModelDate(val) {
      var isShow = this.$refs[val];
      try {
        isShow.showPicker();
      } catch (error) {
        console.log(error);
      }
    },
    changeStep(step) {
      // if (!this.serviceType) return;
      this.step = step;
    },
    close() {
      this.$parent.vendorModel = false;
    },
  },
};
</script>

<style scoped>
#date {
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
  width: 46%;
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
.price {
  height: 350px;
  overflow-y: scroll;
}
</style>