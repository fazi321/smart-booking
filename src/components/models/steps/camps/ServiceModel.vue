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
          <h1>Service Description</h1>
          <h4>Rules & Safty</h4>
        </div>
        <div class="container-rules">
          <div class="rules">
            <!-- <div>
              <label class="container-input"
                >Events & Parties allowed
                <input type="checkbox" v-model="rules.EventsPartiesallowed" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <!-- <div>
              <label class="container-input"
                >Pets Allowed
                <input type="checkbox" v-model="rules.petsAllowed" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <div>
              <label class="container-input"
                >Event Parties Allowed
                <input type="checkbox" v-model="rules.eventPartiesAllowed" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Smoking Allowed
                <input type="checkbox" v-model="rules.smokingAllowed" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Pets Allowed
                <input type="checkbox" v-model="rules.petsAllowed" />
                <span class="checkmark"></span>
              </label>
            </div>
            <!-- <div>
              <label class="container-input"
                >Suitable For Childrens
                <input type="checkbox" v-model="rules.suitableForChildrens" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <div>
              <label class="container-input"
                >Suitable For Grooms
                <input type="checkbox" v-model="rules.suitableForGrooms" />
                <span class="checkmark"></span>
              </label>
            </div>
            <!-- <div>
              <label class="container-input"
                >suitable For Infants
                <input type="checkbox" v-model="rules.suitableForInfants" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <div>
              <label class="container-input"
                >Fire Alaram
                <input type="checkbox" v-model="safty.fireAlaram" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Carbon Monoxide Alarams
                <input type="checkbox" v-model="safty.carbonMonoxideAlarams" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >fire Extinguisher
                <input type="checkbox" v-model="safty.fireExtinguisher" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >first Aid Kit
                <input type="checkbox" v-model="safty.firstAidKit" />
                <span class="checkmark"></span>
              </label>
            </div>
            <!-- <div>
              <label class="container-input"
                >Suitable for Childrens (2-14)
                <input type="checkbox" v-model="rules.suitableForChildrens" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <!-- <div>
              <label class="container-input"
                >Suitable for grooms
                <input type="checkbox" v-model="rules.suitableForGrooms" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <!-- <div>
              <label class="container-input"
                >Suitable for Infants (Under 2)
                <input type="checkbox" v-model="rules.suitableForInfants" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <!-- block -->
          </div>
          <section class="price-container">
            <div class="container-price">
              <!-- block -->
              <div class="price-inputs">
                <div class="price-checkbox">
                  <label class="container-input"
                    >Suitable For Childrens
                    <input
                      type="checkbox"
                      v-model="suitableFor.suitableForChildrens"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="input-price">
                  <input
                    type="number"
                    v-model="suitablePrice.suitableForChildrens"
                  />
                </div>
              </div>
              <!-- block -->
              <div class="price-inputs">
                <div class="price-checkbox">
                  <label class="container-input"
                    >Suitable For Infants
                    <input
                      type="checkbox"
                      v-model="suitableFor.suitableForInfants"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="input-price">
                  <input
                    type="number"
                    v-model="suitablePrice.suitableForInfants"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(2)">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- kethen -->
    <div class="primary-login" v-if="step == 2">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Service Description</h1>
          <h4>kitchen</h4>
        </div>
        <div class="container-rules">
          <div class="rules">
            <div>
              <label class="container-input"
                >Kitchen Utensils
                <input type="checkbox" v-model="kitchen.kitchenUtensils" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Dining Table
                <input type="checkbox" v-model="kitchen.diningTable" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Microwave
                <input type="checkbox" v-model="kitchen.microwave" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >CoffeeMachine
                <input type="checkbox" v-model="kitchen.coffeeMachine" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Fire Place
                <input type="checkbox" v-model="kitchen.firePlace" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Kettle
                <input type="checkbox" v-model="kitchen.kettle" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >HotBeverage
                <input type="checkbox" v-model="kitchen.hotBeverage" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Oven
                <input type="checkbox" v-model="kitchen.oven" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Stove
                <input type="checkbox" v-model="kitchen.stove" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Refrigerator
                <input type="checkbox" v-model="kitchen.refrigerator" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(3)">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step one End -->
    <!-- bath Rooms -->
    <div class="primary-login" v-if="step == 3">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Service Description</h1>
          <h4>Rooms Bath</h4>
        </div>
        <div class="container-rules">
          <div class="rules">
            <div>
              <label class="container-input"
                >hanger
                <input type="checkbox" v-model="roomsbath.hanger" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >SoapTissue
                <input type="checkbox" v-model="roomsbath.soapTissue" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Shampoo
                <input type="checkbox" v-model="roomsbath.shampoo" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Towels
                <input type="checkbox" v-model="roomsbath.towels" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >MassageChair
                <input type="checkbox" v-model="roomsbath.massageChair" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Hair Dryer
                <input type="checkbox" v-model="roomsbath.hairDryer" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Extra Pillow
                <input type="checkbox" v-model="roomsbath.extraPillow" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Bed Sheet
                <input type="checkbox" v-model="roomsbath.bedSheet" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Washer
                <input type="checkbox" v-model="roomsbath.washer" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Iron
                <input type="checkbox" v-model="roomsbath.iron" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(5)">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step one End -->
    <!-- out door -->
    <div class="primary-login" v-if="step == 5">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Service Description</h1>
          <h4>Out door</h4>
        </div>
        <div class="container-rules">
          <div class="rules">
            <div>
              <label class="container-input"
                >Grill
                <input type="checkbox" v-model="outdoors.grill" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Green Yard
                <input type="checkbox" v-model="outdoors.greenYard" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >MandiPit
                <input type="checkbox" v-model="outdoors.mandiPit" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(6)">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step three -->
    <div class="primary-login" v-if="step == 6">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Service Description</h1>
          <h4>Description</h4>
        </div>
        <div class="container-vendor">
          <div>
            <div class="inputs-container">
              <div>
                <input
                  type="text"
                  placeholder="Service Name (English)"
                  v-model="description.nameInEnglish"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Service Name (Arabic)"
                  v-model="description.nameInArabic"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Secondary Phone Number"
                  v-model="description.secondryPhone"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Area"
                  v-model="description.areaSqm"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Property Description (English)"
                  v-model="description.descriptionInEnglish"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Property Description (Arabic)"
                  v-model="description.descriptionInArabic"
                />
              </div>
            </div>
          </div>
          <div class="upload-file">
            <label for="inputTag">
              Add service image
              <input
                id="inputTag"
                type="file"
                @change="handleChange"
                accept="image/png, image/gif, image/jpeg"
                multiple
              />
            </label>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(7)">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step two End -->
    <!-- step three -->
    <div class="primary-login" v-if="step == 7">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Service Description</h1>
          <h4>Address & Location</h4>
        </div>
        <div class="map-container">
          <div class="map">
            <GoogleMap @latlng="latLng" />
          </div>
          <div class="container-vendor">
            <div>
              <div class="inputs-container">
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    v-model="address.address"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Property Number"
                    v-model="address.houseNumber"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    v-model="address.city"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Area"
                    v-model="address.area"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Landmark"
                    v-model="address.landMark"
                  />
                </div>
                <!-- <div>
                  <input
                    type="text"
                    placeholder="Property Description (Arabic)"
                  />
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="submited">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step three End -->
  </section>
</template>

<script>
import GoogleMap from "../../../GoogleMap.vue";
export default {
  name: "AddServiceModel",
  props: ["model"],
  components: {
    GoogleMap,
  },
  data() {
    return {
      nextStep: null,
      rules: {},
      safty: {},
      kitchen: {},
      roomsbath: {},
      description: {},
      address: {},
      location: {},
      suitableFor: {},
      suitablePrice: {},
      outdoors:{},
      step: 1,
    };
  },
  methods: {
    latLng({ lat, lng }) {
      this.location = { location: { coordinates: [lat, lng] } };
    },
    handleChange(e) {
      let formData = new FormData();
      for (let i = 0; i < e.target.files.length; i++) {
        formData.append("image", e.target.files[i]);
      }
      this.$emit("images", formData);
    },
    submited() {
      // sutable childcheck
      const newObjC = {};
      for (const [key, value] of Object.entries(this.suitableFor)) {
        if (value) {
          for (const [pkey, pValue] of Object.entries(this.suitablePrice)) {
            if (key == pkey) {
              newObjC[key] = pValue;
            }
          }
        }
      }
      // price
      const newObj = {};
      for (const [key, value] of Object.entries(this.rules)) {
        if (value) {
          newObj[key] = value;
        }
      }
      var { location } = this.location;
      var outdoors = this.outdoors;
      var finalDetail = {
        description: {
          rules: { ...newObj, ...newObjC },
          safty: { ...this.safty },
          ...this.description,
        },
        kitchen: { ...this.kitchen },
        address: { ...this.address },
        location,
        outdoors,
        roomsbath: { ...this.roomsbath },
      };
      console.log(finalDetail);
      this.$emit("decription", finalDetail);
      this.$parent.accountOpt = "price";
    },
    changeStep(step) {
      // if (!this.serviceType) return;
      this.step = step;
    },
    close() {
      this.$emit("close");
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
.container-rules {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
/* step one */
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
  border: none;
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
.map-container {
  height: 350px;
  overflow-y: scroll;
  margin-bottom: 30px;
}
.map-container .inputs-container input {
  min-width: 220px;
}
.map {
  margin-bottom: 30px;
  padding: 0 28px;
}
/* step two end */
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
.price-container {
  width: 85%;
}
</style>
