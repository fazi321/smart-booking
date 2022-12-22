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
          <h1>{{ $t("serviceDescription.serviceDescription") }}</h1>
          <h4>
            <button @click="back(2)">{{ $t("AddService.back") }}</button
            >{{ $t("serviceDescription.rules&Safty") }}
          </h4>
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
                >{{ $t("serviceDescription.pets") }}
                <input type="checkbox" v-model="rules.petsAllowed" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.parties") }}
                <input type="checkbox" v-model="rules.eventPartiesAllowed" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.smoking") }}
                <input type="checkbox" v-model="rules.smokingAllowed" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.pets") }}
                <input type="checkbox" v-model="rules.petsAllowed" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.suitableGrooms") }}
                <input type="checkbox" v-model="rules.suitableForGrooms" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.carbonMonoxideAlarams") }}
                <input type="checkbox" v-model="safty.carbonMonoxideAlarams" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.fireAlaram") }}
                <input type="checkbox" v-model="safty.fireAlaram" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.fireExtinguisher") }}
                <input type="checkbox" v-model="safty.fireExtinguisher" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.firstAidKit") }}
                <input type="checkbox" v-model="safty.firstAidKit" />
                <span class="checkmark"></span>
              </label>
            </div>
            <!-- <div>
              <label class="container-input"
                >{{ $t("serviceDescription.suitableForChildrens") }} (2-14)
                <input type="checkbox" v-model="rules.suitableForChildrens" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <!-- <div>
              <label class="container-input"
                >{{ $t("serviceDescription.suitableGrooms") }}
                <input type="checkbox" v-model="rules.suitableForGrooms" />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <!-- <div>
              <label class="container-input"
                >{{ $t("serviceDescription.suitableForInfants") }} (Under 2)
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
                    >{{ $t("serviceDescription.suitableForChildrens") }}
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
                    min="1"
                    v-model="suitablePrice.suitableForChildrens"
                    :disabled="!suitableFor.suitableForChildrens"
                  />
                </div>
              </div>
              <!-- block -->
              <div class="price-inputs">
                <div class="price-checkbox">
                  <label class="container-input"
                    >{{ $t("serviceDescription.additionalRules") }}
                    <input
                      type="checkbox"
                      v-model="suitableFor.additionalRules"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="input-price">
                  <input
                    type="text"
                    v-model="suitablePrice.additionalRules"
                    :disabled="!suitableFor.additionalRules"
                  />
                </div>
              </div>
              <!-- block -->
              <div class="price-inputs">
                <div class="price-checkbox">
                  <label class="container-input"
                    >{{ $t("serviceDescription.suitableForInfants") }}
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
                    min="1"
                    v-model="suitablePrice.suitableForInfants"
                    :disabled="!suitableFor.suitableForInfants"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(2)">
              {{ $t("AddService.next") }}
            </button>
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
          <h1>{{ $t("serviceDescription.serviceDescription") }}</h1>
          <h4>
            <button @click="goBack(1)">{{ $t("AddService.back") }}</button
            >{{ $t("serviceDescription.kitchen") }}
          </h4>
        </div>
        <div class="container-rules">
          <div class="rules">
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.kitchenUtensils") }}
                <input type="checkbox" v-model="kitchen.kitchenUtensils" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.diningTable") }}
                <input type="checkbox" v-model="kitchen.diningTable" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.microwave") }}
                <input type="checkbox" v-model="kitchen.microwave" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.coffeeMachine") }}
                <input type="checkbox" v-model="kitchen.coffeeMachine" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.kettle") }}
                <input type="checkbox" v-model="kitchen.kettle" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.hotBeverage") }}
                <input type="checkbox" v-model="kitchen.hotBeverage" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.oven") }}
                <input type="checkbox" v-model="kitchen.oven" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.stove") }}
                <input type="checkbox" v-model="kitchen.stove" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.refrigerator") }}
                <input type="checkbox" v-model="kitchen.refrigerator" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(3)">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- step one End -->
    <!-- outDoors -->
    <div class="primary-login" v-if="step == 3">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("serviceDescription.serviceDescription") }}</h1>
          <h4>
            <button @click="goBack(2)">{{ $t("AddService.back") }}</button
            >{{ $t("serviceDescription.outdoor") }}
          </h4>
        </div>
        <div class="container-rules">
          <div class="rules">
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.grill") }}
                <input type="checkbox" v-model="outdoors.grill" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.greenYard") }}
                <input type="checkbox" v-model="outdoors.greenYard" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.mandiPit") }}
                <input type="checkbox" v-model="outdoors.mandiPit" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.barbequeCorner") }}
                <input type="checkbox" v-model="outdoors.barbequeCorner" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(4)">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- bath Rooms -->
    <div class="primary-login" v-if="step == 4">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("serviceDescription.serviceDescription") }}</h1>
          <h4>
            <button @click="goBack(3)">{{ $t("AddService.back") }}</button
            >{{ $t("serviceDescription.roomsBath") }}
          </h4>
        </div>
        <div class="container-rules">
          <div class="rules">
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.hanger") }}
                <input type="checkbox" v-model="roomsbath.hanger" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.soapTissue") }}
                <input type="checkbox" v-model="roomsbath.soapTissue" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.shampoo") }}
                <input type="checkbox" v-model="roomsbath.shampoo" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.towels") }}
                <input type="checkbox" v-model="roomsbath.towels" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.massageChair") }}
                <input type="checkbox" v-model="roomsbath.massageChair" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.hairDryer") }}
                <input type="checkbox" v-model="roomsbath.hairDryer" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.extraPillow") }}
                <input type="checkbox" v-model="roomsbath.extraPillow" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.bedSheet") }}
                <input type="checkbox" v-model="roomsbath.bedSheet" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.washer") }}
                <input type="checkbox" v-model="roomsbath.washer" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.iron") }}
                <input type="checkbox" v-model="roomsbath.iron" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >{{ $t("serviceDescription.balcony") }}
                <input type="checkbox" v-model="roomsbath.balcony" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
            <button type="submit" @click="changeStep(5)">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- step one End -->
    <!-- step three -->
    <div class="primary-login" v-if="step == 5">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("serviceDescription.serviceDescription") }}</h1>
          <h4>
            <button @click="goBack(4)">{{ $t("AddService.back") }}</button
            >{{ $t("serviceDescription.description") }}
          </h4>
        </div>
        <div class="container-vendor">
          <div>
            <div class="inputs-container">
              <div>
                <input
                  type="text"
                  :class="{ activeErr: errors.nameInEnglish }"
                  @input="resolveErr('nameInEnglish')"
                  :placeholder="$t('placeholders.serviceNameEn')"
                  v-model="description.nameInEnglish"
                />
              </div>
              <div>
                <input
                  type="text "
                  :class="['arabic', { activeErr: errors.nameInArabic }]"
                  @input="resolveErr('nameInArabic')"
                  :placeholder="$t('placeholders.serviceNameAr')"
                  v-model="description.nameInArabic"
                />
              </div>
              <div>
                <input
                  type="text"
                  :class="{ activeErr: errors.secondryPhone }"
                  @input="resolveErr('secondryPhone')"
                  :placeholder="$t('placeholders.secondaryPhone')"
                  v-model="description.secondryPhone"
                />
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  :class="{ activeErr: errors.areaSqm }"
                  @input="resolveErr('areaSqm')"
                  :placeholder="$t('placeholders.area')"
                  v-model="description.areaSqm"
                />
              </div>
              <div>
                <input
                  type="text"
                  :class="{ activeErr: errors.descriptionInEnglish }"
                  @input="resolveErr('descriptionInEnglish')"
                  :placeholder="$t('placeholders.PropertyDescriptionEn')"
                  v-model="description.descriptionInEnglish"
                />
              </div>
              <div>
                <input
                  type="text"
                  :class="['arabic', { activeErr: errors.descriptionInArabic }]"
                  @input="resolveErr('descriptionInArabic')"
                  :placeholder="$t('placeholders.PropertyDescriptionAr')"
                  v-model="description.descriptionInArabic"
                />
              </div>
            </div>
          </div>
          <div class="media-img">
            <div
              class="primary-img"
              v-for="(img, key) in previewImage"
              :key="key"
            >
              <img class="img-pre" :src="img" />
              <button v-show="previewImage" @click="removeImage(key)">X</button>
            </div>
          </div>
          <div class="upload-file">
            <label for="inputTag" :class="{ activeErr: verifyImages > 5 }">
              {{ $t("placeholders.addserviceimage") }}
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
            <button type="submit" @click="changeStep(6)">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- step two End -->
    <!-- step three -->
    <div class="primary-login" v-if="step == 6">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("serviceDescription.serviceDescription") }}</h1>
          <h4>
            <button @click="goBack(5)">{{ $t("AddService.back") }}</button
            >{{ $t("serviceDescription.serviceDescription") }}
          </h4>
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
                    :class="{ activeErr: errors.address }"
                    @input="resolveErr('address')"
                    :placeholder="$t('placeholders.address')"
                    v-model="address.address"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.houseNumber }"
                    @input="resolveErr('houseNumber')"
                    :placeholder="$t('placeholders.propertyNumber')"
                    v-model="address.houseNumber"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.city }"
                    @input="resolveErr('city')"
                    :placeholder="$t('placeholders.city')"
                    v-model="address.city"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.area }"
                    @input="resolveErr('area')"
                    :placeholder="$t('placeholders.area')"
                    v-model="address.area"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.landMark }"
                    @input="resolveErr('landMark')"
                    :placeholder="$t('placeholders.landMark')"
                    v-model="address.landMark"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.destination }"
                    @input="resolveErr('destination')"
                    :placeholder="$t('placeholders.destination')"
                    v-model="address.destination"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.district }"
                    @input="resolveErr('district')"
                    :placeholder="$t('placeholders.district')"
                    v-model="address.district"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.direction }"
                    @input="resolveErr('direction')"
                    :placeholder="$t('placeholders.direction')"
                    v-model="address.direction"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.siteInfo }"
                    @input="resolveErr('siteInfo')"
                    :placeholder="$t('placeholders.siteInfo')"
                    v-model="address.siteInfo"
                  />
                </div>
                <!-- <div>
                  <input
                    type="text"
                    :placeholder="$t('placeholders.PropertyDescriptionAr')"
                  />
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="submited">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- // -->
    <section v-if="step == 7">
      <AddService
        @close="close"
        :cached="'price'"
        :backTo="6"
        @lastStep="lastStep"
      />
    </section>
    <!-- step three End -->
  </section>
</template>

<script>
import AddService from "../../AddService.vue";
import GoogleMap from "../../../GoogleMap.vue";
export default {
  name: "AddServiceModel",
  props: ["model"],
  components: {
    AddService,
    GoogleMap,
  },
  data() {
    return {
      previewImage: [],
      forRemove: [],
      nextStep: null,
      rules: {},
      safty: {},
      kitchen: {},
      roomsbath: {},
      description: {},
      address: {},
      location: {},
      outdoors: {},
      suitableFor: {},
      suitablePrice: {},
      step: 1,
      // errors
      errors: {},
      verifyImages: 0,
    };
  },
  methods: {
    back(step) {
      this.$parent.backServiceModel(step, "info");
    },
    goBack(step) {
      this.step = step;
    },
    resolveErr(input) {
      this.errors[input] = false;
    },
    latLng({ lat, lng, address }) {
      this.address.address = address.address;
      this.address.city = address.city;
      this.location = { location: { coordinates: [lat, lng] } };
    },
    removeImage(key) {
      this.previewImage.splice(key, 1);
      this.forRemove.splice(key, 1);
      let formData = new FormData();
      for (let i = 0; i < this.forRemove.length; i++) {
        formData.append("images", this.forRemove[i]);
      }
      this.$emit("images", formData);
    },
    handleChange(e) {
      this.previewImage = [];
      this.verifyImages = e.target.files.length;
      if (this.verifyImages > 5) {
        this.$swal({
          icon: "error",
          title: "only five images allowed!",
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }
      let formData = new FormData();
      for (let i = 0; i < e.target.files.length; i++) {
        this.forRemove.push(e.target.files[i]);
        formData.append("images", e.target.files[i]);
        var reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage.push(e.target.result);
        };
        reader.readAsDataURL(e.target.files[i]);
      }
      this.$emit("images", formData);
      e.target.value = "";
    },
    lastStep() {
      this.$parent.accountOpt = "price";
    },
    submited() {
      if (!this.vInputsLocation()) return;
      // sutable childcheck
      const newObjC = {};
      for (const [key, value] of Object.entries(this.suitableFor)) {
        if (value) {
          for (const [pkey, pValue] of Object.entries(this.suitablePrice)) {
            if (key == pkey) {
              if (key == "additionalRules") {
                newObjC[key] = [pValue];
              } else {
                newObjC[key] = pValue;
              }
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
      this.step = 7;
      // this.$parent.accountOpt = "price";
    },
    changeStep(step) {
      // if (!this.serviceType) return;
      if (step == 6) {
        if (this.vInputsDescription()) {
          this.step = step;
        }
      } else {
        this.step = step;
      }
    },
    vInputsDescription() {
      var verifyInputs = this.description;
      if (!verifyInputs.nameInEnglish) {
        this.errors.nameInEnglish = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.nameInArabic) {
        this.errors.nameInArabic = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.secondryPhone) {
        this.errors.secondryPhone = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.areaSqm) {
        this.errors.areaSqm = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.descriptionInEnglish) {
        this.errors.descriptionInEnglish = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.descriptionInArabic) {
        this.errors.descriptionInArabic = true;
        this.focusInput();
        return;
      }
      if (!this.verifyImages) {
        this.verifyImages = 6; // for button border temp
        this.$swal({
          icon: "error",
          title: "images required!",
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }
      if (this.verifyImages > 5) {
        this.$swal({
          icon: "error",
          title: "only five images allowed!",
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }
      return true;
    },
    vInputsLocation() {
      var verifyInputs = this.address;
      /* eslint-disable */
      if (
        !this.location.location &&
        !this.location.hasOwnProperty("coordinates")
      ) {
        // this.errors.location = true;
        this.$swal({
          icon: "error",
          title: "Add location from map!",
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }
      if (!verifyInputs.address) {
        this.errors.address = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.houseNumber) {
        this.errors.houseNumber = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.city) {
        this.errors.city = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.area) {
        this.errors.area = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.area) {
        this.errors.area = true;
        this.focusInput();
        return;
      }
      if (!verifyInputs.landMark) {
        this.errors.landMark = true;
        this.focusInput();
        return;
      }
      return true;
    },
    focusInput() {
      var input = document.getElementsByClassName("activeErr");
      setTimeout(() => {
        input[0].focus();
      }, 100);
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
