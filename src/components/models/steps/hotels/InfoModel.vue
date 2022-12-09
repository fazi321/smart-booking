<template>
  <section :class="['account-container', { active: model }]">
    <!-- step one -->
    <div class="primary-login" v-if="step == 1">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("AddService.basicInformation") }}</h1>
          <h4>
            <button @click="back(2)">{{ $t("AddService.back") }}</button
            >{{ $t("AddService.room&guest") }}
          </h4>
        </div>
        <div class="container-vendor">
          <div>
            <div class="inputs-container">
              <div>
                <input
                  type="number"
                  :class="{ activeErr: errors.numRooms }"
                  @input="resolveErr('numRooms')"
                  placeholder="Number of Rooms"
                  v-model="unitsAndGuest.numRooms"
                />
              </div>
              <!-- <div>
                <input
                  type="text"
                  placeholder="Bedrooms"
                  v-model="unitsAndGuest.bedrooms"
                />
              </div> -->
              <div>
                <input
                  type="test"
                  :class="{ activeErr: errors.roomType }"
                  @input="resolveErr('roomType')"
                  placeholder="Room Type"
                  v-model="unitsAndGuest.roomType"
                />
              </div>
              <div>
                <input
                  type="number"
                  :class="{ activeErr: errors.numberUnits }"
                  @input="resolveErr('numberUnits')"
                  placeholder="Number Units"
                  v-model="unitsAndGuest.numberUnits"
                />
              </div>
              <div>
                <input
                  type="number"
                  :class="{ activeErr: errors.numberChildren }"
                  @input="resolveErr('numberChildren')"
                  placeholder="Number Children"
                  v-model="unitsAndGuest.numberChildren"
                />
              </div>
              <div>
                <input
                  type="number"
                  :class="{ activeErr: errors.singleBeds }"
                  @input="resolveErr('singleBeds')"
                  placeholder="SingleBeds"
                  v-model="unitsAndGuest.singleBeds"
                />
              </div>
              <div>
                <input
                  type="number"
                  :class="{ activeErr: errors.bathrooms }"
                  @input="resolveErr('bathrooms')"
                  placeholder="bathrooms"
                  v-model="unitsAndGuest.bathrooms"
                />
              </div>
              <!-- <div>
                <input
                  type="number"
                  placeholder="NumOf Majles Tents"
                  v-model="roomsGuest.numOfMajlesTents"
                />
              </div> -->
              <!-- <div>
                <input
                  type="number"
                  placeholder="living Room"
                  v-model="unitsAndGuest.livingRoom"
                />
              </div> -->
              <div class="rules">
                <label class="container-input"
                  >Living Room
                  <input type="checkbox" v-model="unitsAndGuest.livingRoom" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <!-- <div class="rules">
                <label class="container-input"
                  >Outdoor Seating
                  <input type="checkbox" v-model="unitsAndGuest.outdoorSeating" />
                  <span class="checkmark"></span>
                </label>
              </div> -->
              <!-- <div class="rules">
                <label class="container-input"
                  >Addition Seating
                  <input type="checkbox" v-model="roomsGuest.additionSeating" />
                  <span class="checkmark"></span>
                </label>
              </div> -->
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="changeStep(2)">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- step two End -->
    <!-- step three -->
    <div class="primary-login" v-if="step == 2">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("AddService.basicInformation") }}</h1>
          <h4>
            <button @click="goBack(1)">{{ $t("AddService.back") }}</button
            >{{ $t("AddService.amenities") }}
          </h4>
        </div>
        <section class="over-follow">
          <div>
            <div class="head">
              <h1>{{ $t("AddService.sports") }}</h1>
            </div>
            <div class="container-service container-amenities">
              <div class="cards">
                <div
                  :class="{ active: isExist('gym') }"
                  @click="selectedAmenities('gym')"
                >
                  <img src="../../../../assets/images/fitness.png" alt="" />
                  <h6>{{ $t("AddService.gym") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('billard') }"
                  @click="selectedAmenities('billard')"
                >
                  <img src="../../../../assets/images/billiards.png" alt="" />
                  <h6>{{ $t("AddService.billiard") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('tennisCourt') }"
                  @click="selectedAmenities('tennisCourt')"
                >
                  <img src="../../../../assets/images/court.png" alt="" />
                  <h6>{{ $t("AddService.tennisCourt") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('airHockeyTable') }"
                  @click="selectedAmenities('airHockeyTable')"
                >
                  <img src="../../../../assets/images/hockey.png" alt="" />
                  <h6>{{ $t("AddService.airHockey") }}</h6>
                </div>
                <!-- <div
                  :class="{ active: isExist('soccerField') }"
                  @click="selectedAmenities('soccerField')"
                >
                  <img src="../../../../assets/images/air-conditioner.png" alt="" />
                  <h6>Soccer Field</h6>
                </div> -->
                <!-- <div
                  :class="{ active: isExist('volleyBall') }"
                  @click="selectedAmenities('volleyBall')"
                >
                  <img src="../../../../assets/images/air-conditioner.png" alt="" />
                  <h6>Volley Ball</h6>
                </div> -->
                <!-- <div
                  :class="{ active: isExist('trambolin') }"
                  @click="selectedAmenities('trambolin')"
                >
                  <img src="../../../../assets/images/air-conditioner.png" alt="" />
                  <h6>Trambolin</h6>
                </div> -->
                <!-- <div
                  :class="{ active: isExist('airSlider') }"
                  @click="selectedAmenities('airSlider')"
                >
                  <img src="../../../../assets/images/hotTub.png" alt="" />
                  <h6>Air Slider</h6>
                </div> -->
                <!-- <div
                  :class="{ active: isExist('sandGames') }"
                  @click="selectedAmenities('sandGames')"
                >
                  <img src="../../../../assets/images/hotTub.png" alt="" />
                  <h6>Sand Games</h6>
                </div>
                <div
                  :class="{ active: isExist('waterGames') }"
                  @click="selectedAmenities('waterGames')"
                >
                  <img src="../../../../assets/images/hotTub.png" alt="" />
                  <h6>Water Games</h6>
                </div> -->
                <div
                  :class="{ active: isExist('hotTub') }"
                  @click="selectedAmenities('hotTub')"
                >
                  <img src="../../../../assets/images/hotTub.png" alt="" />
                  <h6>{{ $t("AddService.hotTub") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('steamBath') }"
                  @click="selectedAmenities('steamBath')"
                >
                  <img src="../../../../assets/images/hot-bath.png" alt="" />
                  <h6>{{ $t("AddService.steamBath") }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="head">
              <h1>{{ $t("AddService.sports") }}</h1>
            </div>
            <div class="container-service container-amenities">
              <div class="cards">
                <div
                  :class="{ active: isExist('indoorSwimmingPool') }"
                  @click="selectedAmenities('indoorSwimmingPool')"
                >
                  <img src="../../../../assets/images/swimming-pool.png" alt="" />
                  <h6>{{ $t("AddService.indoor") }}</h6>
                  <h6>{{ $t("AddService.swimmingPool") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('outdoorSwimmingPool') }"
                  @click="selectedAmenities('outdoorSwimmingPool')"
                >
                  <img src="../../../../assets/images/swimming-pool.png" alt="" />
                  <h6>{{ $t("AddService.outDoor") }}</h6>
                  <h6>{{ $t("AddService.swimmingPool") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('playground') }"
                  @click="selectedAmenities('playground')"
                >
                  <img src="../../../../assets/images/playground.png" alt="" />
                  <h6>{{ $t("AddService.playground") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('hairStylist') }"
                  @click="selectedAmenities('hairStylist')"
                >
                  <img src="../../../../assets/images/hairstylist.png" alt="" />
                  <h6>{{ $t("AddService.hairStylist") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('spa') }"
                  @click="selectedAmenities('spa')"
                >
                  <img src="../../../../assets/images/playground.png" alt="" />
                  <h6>Spa</h6>
                </div>
                <div
                  :class="{ active: isExist('accessInHours') }"
                  @click="selectedAmenities('accessInHours')"
                >
                  <img src="../../../../assets/images/24-hours.png" alt="" />
                  <h6>{{ $t("AddService.24hours") }}</h6>
                  <h6>{{ $t("AddService.access") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('weelChaireAccess') }"
                  @click="selectedAmenities('weelChaireAccess')"
                >
                  <img src="../../../../assets/images/wheelchair.png" alt="" />
                  <h6>{{ $t("AddService.wheelChair") }}</h6>
                  <h6>{{ $t("AddService.access") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('privateEntrance') }"
                  @click="selectedAmenities('privateEntrance')"
                >
                  <img src="../../../../assets/images/entrance.png" alt="" />
                  <h6>{{ $t("AddService.private") }}</h6>
                  <h6>{{ $t("AddService.entrance") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('doorman') }"
                  @click="selectedAmenities('doorman')"
                >
                  <img src="../../../../assets/images/doorman.png" alt="" />
                  <h6>{{ $t("AddService.doorman") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('parking') }"
                  @click="selectedAmenities('parking')"
                >
                  <img src="../../../../assets/images/parking.png" alt="" />
                  <h6>{{ $t("AddService.parking") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('elevator') }"
                  @click="selectedAmenities('elevator')"
                >
                  <img src="../../../../assets/images/elevator.png" alt="" />
                  <h6>{{ $t("AddService.elevator") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('saftyBox') }"
                  @click="selectedAmenities('saftyBox')"
                >
                  <img src="../../../../assets/images/saftyBox.png" alt="" />
                  <h6>{{ $t("AddService.saftyBox") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('airConditioning') }"
                  @click="selectedAmenities('airConditioning')"
                >
                  <img src="../../../../assets/images/air-conditioner.png" alt="" />
                  <h6 v-if="$t('AddService.conditioning') == 'Conditioning'">
                    Air
                  </h6>
                  <h6>{{ $t("AddService.conditioning") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('tv') }"
                  @click="selectedAmenities('tv')"
                >
                  <img src="../../../../assets/images/tv.png" alt="" />
                  <h6>{{ $t("AddService.tv") }}</h6>
                </div>
                <div
                  :class="{ active: isExist('wifi') }"
                  @click="selectedAmenities('wifi')"
                >
                  <img src="../../../../assets/images/wifi.png" alt="" />
                  <h6>{{ $t("AddService.wifi") }}</h6>
                </div>
                <!-- <div
                  :class="{ active: isExist('stage') }"
                  @click="selectedAmenities('stage')"
                >
                  <img src="../../../../assets/images/beach-volleyball.png" alt="" />
                  <h6>stage</h6>
                </div> -->
                <div
                  :class="{ active: isExist('speakers') }"
                  @click="selectedAmenities('speakers')"
                >
                  <img src="../../../../assets/images/speakers.png" alt="" />
                  <h6>{{ $t("AddService.speakers") }}</h6>
                </div>
                <!-- <div
                  :class="{ active: isExist('laserLights') }"
                  @click="selectedAmenities('laserLights')"
                >
                  <img src="../../../../assets/images/beach-volleyball.png" alt="" />
                  <h6>laserLights</h6>
                </div> -->
              </div>
            </div>
          </div>
          <section class="price-container">
            <div class="container-price">
              <!-- block -->
              <!-- <div class="price-inputs">
                <div class="price-checkbox">
                  <label class="container-input"
                    >24 Hours Access
                    <input type="checkbox" v-model="accessCheck" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="input-price">
                  <input type="number" v-model="accessInHoursCheck" />
                </div>
              </div> -->
            </div>
          </section>
        </section>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="lastStepClicked">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- // -->
    <section v-if="step == 3">
      <AddService
        @close="close"
        :cached="'service'"
        :backTo="2"
        @lastStep="lastStep"
      />
    </section>
    <!-- step three end -->
  </section>
</template>

<script>
import AddService from "../../AddService.vue";
export default {
  name: "AddServiceModel",
  components: {
    AddService,
  },
  props: ["model"],
  data() {
    return {
      phoneNumber: null,
      serviceType: null,
      isSubmitted: false,
      nextStep: null,
      step: 1,
      // istransition: false,
      AmenitieSelected: [],
      unitsAndGuest: {},
      // roomsGuest: {},
      leisure: {},
      accessCheck: false,
      accessInHoursCheck: null,
      // errors
      errors: {},
    };
  },
  methods: {
    back(step) {
      this.$parent.accountSelected(step);
    },
    goBack(step) {
      this.step = step;
    },
    resolveErr(input) {
      this.errors[input] = false;
    },
    isExist(val) {
      return this.AmenitieSelected.indexOf(val) !== -1;
    },
    selectedAmenities(val) {
      if (!this.isExist(val)) {
        this.AmenitieSelected.push(val);
        this.leisure[val] = true;
      } else {
        this.AmenitieSelected = this.AmenitieSelected.filter(function (value) {
          return value != val;
        });
        delete this.leisure[val];
      }
    },
    focusInput() {
      var input = document.getElementsByClassName("activeErr");
      setTimeout(() => {
        input[0].focus();
      }, 100);
    },
    changeStep(step) {
      var verifyInputs = this.unitsAndGuest;
      if (step == 2) {
        if (!verifyInputs.numRooms) {
          this.errors.numRooms = true;
          this.focusInput();
          return;
        }
        if (!verifyInputs.roomType) {
          this.errors.roomType = true;
          this.focusInput();
          return;
        }
        if (!verifyInputs.numberUnits) {
          this.errors.numberUnits = true;
          this.focusInput();
          return;
        }
        if (!verifyInputs.numberChildren) {
          this.errors.numberChildren = true;
          this.focusInput();
          return;
        }
        if (!verifyInputs.singleBeds) {
          this.errors.singleBeds = true;
          this.focusInput();
          return;
        }
        if (!verifyInputs.bathrooms) {
          this.errors.bathrooms = true;
          this.focusInput();
          return;
        }
        this.step = step;
      }
      // this.isSubmitted = true;
    },
    close() {
      this.$emit("close");
    },
    lastStep() {
      this.$parent.accountOpt = "service";
    },
    lastStepClicked() {
      var basicInfo = {};
      if (this.leisure.accessInHours) {
        this.leisure.accessInHours = 12;
      }
      // if (this.accessCheck) {
      //   this.leisure.accessInHours = this.accessInHoursCheck;
      // } else {
      //   delete this.leisure.accessInHours;
      // }
      basicInfo.unitsAndGuest = this.unitsAndGuest;
      basicInfo.leisure = this.leisure;
      this.step = 3;
      //  this.$parent.accountOpt = "service";
      this.$emit("basicInfo", basicInfo);
    },
  },
};
</script>

<style scoped>
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
.login-form .input-primary {
  display: flex;
  height: 42px;
  padding: 6px 30px;
  border-radius: 50px;
  box-shadow: 0px 0px 3px 1px #f1f1f1;
  margin-bottom: 35px;
  align-items: center;
  width: 62%;
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
.container-service {
  display: flex;
  overflow: hidden;
  justify-content: center;
}
.container-service .cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
}
.container-service .cards > div {
  box-shadow: 0px 1px 12px -2px #00000040;
  width: 106px;
  height: 76px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10px 10px 14px 10px;
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid transparent;
}
.container-service .cards .active {
  border: 1px solid #febb12;
}
/* step one end */

/* step two start */
.company {
  padding: 25px 25px 10px 25px;
}
.company .headings {
  padding: 0 24px 9px 24px;
}
.inputs-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 30px;
}
.inputs-container input {
  outline: none;
  font-size: 12px;
  padding: 18px 20px;
  border-radius: 50px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  min-width: 230px;
  margin: 8px 0;
}
.inputs-container input::placeholder {
  color: #c4c4c4;
}
.upload-file input {
  display: none;
}
.upload-file {
  margin: 30px 10px 10px 10px;
}
.upload-file label {
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 24px;
  color: #febb12;
  font-size: 12px;
}
/* step two end */
/* step three */
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
.container-amenities .cards {
  width: 92%;
  justify-content: flex-start;
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
.over-follow {
  overflow-y: scroll;
  height: 350px;
}
/* step three end */
</style>
