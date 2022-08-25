<template>
  <section :class="['login-signup', { active: model }]">
    <!-- step one -->
    <div class="primary-login" v-if="step == 1">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Add Service</h1>
          <h4>Please add details for new service</h4>
        </div>
        <div class="container-vendor">
          <div class="cards">
            <div
              :class="['primary-cards', { active: accountOpt == 'info' }]"
              @click="selectedOptions('info')"
            >
              <div class="category-img">
                <img src="../../assets/images/basic.svg" alt="" />
              </div>
              <div class="content">
                <h5>Basic Information</h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Fusce ac odio at urna curs <br />us lacinia.
                </h6>
              </div>
            </div>
            <div
              :class="['primary-cards', { active: accountOpt == 'service' }]"
              @click="selectedOptions('service')"
            >
              <div class="category-img">
                <img src="../../assets/images/servies.svg" alt="" />
              </div>
              <div class="content">
                <h5>Service Description</h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Fusce ac odio at urna curs <br />us lacinia.
                </h6>
              </div>
            </div>
            <div
              :class="['primary-cards', { active: accountOpt == 'price' }]"
              @click="selectedOptions('price')"
            >
              <div class="category-img">
                <img src="../../assets/images/price.svg" alt="" />
              </div>
              <div class="content">
                <h5>Price Details</h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Fusce ac odio at urna curs <br />us lacinia.
                </h6>
              </div>
            </div>
          </div>
          <div class="form-container">
            <div class="input-div step-btn">
              <button type="submit" @click="accountSelected">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- categories -->
    <div class="primary-login" v-if="step == 2">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Basic Information</h1>
          <h4>Service type</h4>
        </div>
        <div class="container-service">
          <div class="cards">
            <div
              v-for="(item, index) in categories"
              :key="index"
              :class="{
                active: serviceType && serviceType.category == item.category,
              }"
              @click="selectedCategory(item)"
            >
              <h6 v-if="item.category != 'Wedding_Halls'">
                {{ item.category }}
              </h6>
              <div v-if="item.category == 'Wedding_Halls'">
                <h6>Wedding</h6>
                <h6>Halls</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="changeSteps">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Resort -->
    <section v-if="serviceType && serviceType.category == 'Resorts'">
      <!-- basic information start -->
      <InfoModel
        v-if="isSubmitted && accountOpt == 'info'"
        :model="true"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModel
        v-if="isSubmitted && accountOpt == 'service'"
        :model="true"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModel
        v-if="isSubmitted && accountOpt == 'price'"
        :model="true"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- stadium  -->
    <section v-if="serviceType && serviceType.category == 'Stadium'">
      <!-- basic information start -->
      <InfoModelStadium
        v-if="isSubmitted && accountOpt == 'info'"
        :model="true"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelStadium
        v-if="isSubmitted && accountOpt == 'service'"
        :model="true"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelStadium
        v-if="isSubmitted && accountOpt == 'price'"
        :model="true"
        @close="close"
        @price="pricing"
      />
    </section>
     <!-- Appartments -->
    <section v-if="serviceType && serviceType.category == 'Apartment'">
      <!-- basic information start -->
      <InfoModelAppartments
        v-if="isSubmitted && accountOpt == 'info'"
        :model="true"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelAppartments
        v-if="isSubmitted && accountOpt == 'service'"
        :model="true"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelAppartments
        v-if="isSubmitted && accountOpt == 'price'"
        :model="true"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Lounges -->
    <section v-if="serviceType && serviceType.category == 'Lounges'">
      <!-- basic information start -->
      <InfoModelLoungs
        v-if="isSubmitted && accountOpt == 'info'"
        :model="true"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelLoungs
        v-if="isSubmitted && accountOpt == 'service'"
        :model="true"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelLoungs
        v-if="isSubmitted && accountOpt == 'price'"
        :model="true"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Camps -->
    <section v-if="serviceType && serviceType.category == 'Camps'">
      <!-- basic information start -->
      <InfoModelCamps
        v-if="isSubmitted && accountOpt == 'info'"
        :model="true"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelCamps
        v-if="isSubmitted && accountOpt == 'service'"
        :model="true"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelCamps
        v-if="isSubmitted && accountOpt == 'price'"
        :model="true"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Wedding -->
    <section v-if="serviceType && serviceType.category == 'Wedding_Halls'">
      <!-- basic information start -->
      <InfoModelWeddings
        v-if="isSubmitted && accountOpt == 'info'"
        :model="true"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelWeddings
        v-if="isSubmitted && accountOpt == 'service'"
        :model="true"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelWeddings
        v-if="isSubmitted && accountOpt == 'price'"
        :model="true"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Farms -->
    <section v-if="serviceType && serviceType.category == 'Farms'">
      <!-- basic information start -->
      <InfoModelFarms
        v-if="isSubmitted && accountOpt == 'info'"
        :model="true"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelFarms
        v-if="isSubmitted && accountOpt == 'service'"
        :model="true"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelFarms
        v-if="isSubmitted && accountOpt == 'price'"
        :model="true"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Hotels -->
    <section v-if="serviceType && serviceType.category == 'Hotel'">
      <!-- basic information start -->
      <InfoModelHotels
        v-if="isSubmitted && accountOpt == 'info'"
        :model="true"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelHotels
        v-if="isSubmitted && accountOpt == 'service'"
        :model="true"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelHotels
        v-if="isSubmitted && accountOpt == 'price'"
        :model="true"
        @close="close"
        @price="pricing"
      />
    </section>
  </section>
</template>

<script>
// RESORTS
import InfoModel from "./steps/InfoModel.vue";
import ServiceModel from "./steps/ServiceModel.vue";
import PriceModel from "./steps/PriceModel.vue";
// STADIUM
import InfoModelStadium from "./steps/stepsStadium/InfoModel.vue";
import ServiceModelStadium from "./steps/stepsStadium//ServiceModel.vue";
import PriceModelStadium from "./steps/stepsStadium/PriceModel.vue";
// APPARTMENTS
import InfoModelAppartments from "./steps/stepsAppartments/InfoModel.vue";
import ServiceModelAppartments from "./steps/stepsAppartments//ServiceModel.vue";
import PriceModelAppartments from "./steps/stepsAppartments/PriceModel.vue";
// Loungs
import InfoModelLoungs from "./steps/loungs/InfoModel.vue";
import ServiceModelLoungs from "./steps/loungs//ServiceModel.vue";
import PriceModelLoungs from "./steps/loungs/PriceModel.vue";
// Camps
import InfoModelCamps from "./steps/camps/InfoModel.vue";
import ServiceModelCamps from "./steps/camps//ServiceModel.vue";
import PriceModelCamps from "./steps/camps/PriceModel.vue";
// Weddings
import InfoModelWeddings from "./steps/weddings/InfoModel.vue";
import ServiceModelWeddings from "./steps/weddings//ServiceModel.vue";
import PriceModelWeddings from "./steps/weddings/PriceModel.vue";
// Farms
import InfoModelFarms from "./steps/farms/InfoModel.vue";
import ServiceModelFarms from "./steps/farms//ServiceModel.vue";
import PriceModelFarms from "./steps/farms/PriceModel.vue";
// Hotels
import InfoModelHotels from "./steps/hotels/InfoModel.vue";
import ServiceModelHotels from "./steps/hotels//ServiceModel.vue";
import PriceModelHotels from "./steps/hotels/PriceModel.vue";
export default {
  name: "AddServiceModel",
  props: ["model"],
  components: {
    InfoModel,
    ServiceModel,
    PriceModel,
    //stadium
    InfoModelStadium,
    ServiceModelStadium,
    PriceModelStadium,
    // appartments
    InfoModelAppartments,
    ServiceModelAppartments,
    PriceModelAppartments,
    // Loungs
    InfoModelLoungs,
    ServiceModelLoungs,
    PriceModelLoungs,
    // Camps
    InfoModelCamps,
    ServiceModelCamps,
    PriceModelCamps,
    // Wedding
    InfoModelWeddings,
    ServiceModelWeddings,
    PriceModelWeddings,
    // Farms
    InfoModelFarms,
    ServiceModelFarms,
    PriceModelFarms,
    // Hotels
    InfoModelHotels,
    ServiceModelHotels,
    PriceModelHotels,
  },
  data() {
    return {
      accountOpt: null,
      isSubmitted: false,
      nextStep: null,
      step: 1,
      categories: [],
      //  detail
      serviceType: {},
      basicD: {},
      dataDec: {},
      dataP: {},
      finalData: {},
      myImages: {},
    };
  },
  methods: {
    selectedCategory(opt) {
      this.serviceType = opt;
    },
    basicData(val) {
      this.basicD = val;
    },
    decription(val) {
      this.dataDec = val;
    },
    async pricing(val) {
      this.dataP = val;
      var dataPayload = {
        ...this.basicD,
        ...this.dataDec,
        ...this.dataP,
        categoryId: this.serviceType._id,
      };
      this.finalData = this.dataPayload;
      var uploadedImages = await this.uploadFiles();
      if (uploadedImages) {
        var imagesArr = Object.values(uploadedImages);
        dataPayload.description.images = imagesArr;
        this.submit(dataPayload);
      }
    },
    async submit(payload) {
      var cate = this.serviceType.category.toLowerCase();
      if(cate == 'lounges'){
        cate = 'lounge'
      }
      if(cate == 'wedding_halls'){
        cate = 'weddinghalls'
      }
      try {
        const res = await this.$axios.post(cate, payload);
        if (res) {
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async uploadFiles() {
      try {
        const imagesData = await this.$axios.post(
          "user/upload",
          this.myImages,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return imagesData.data;
      } catch (error) {
        console.log(error);
      }
    },
    formData(formImage) {
      this.myImages = formImage;
    },
    changeSteps() {
      this.isSubmitted = true;
    },
    selectedOptions(opt) {
      this.accountOpt = opt;
    },
    accountSelected() {
      if (!this.accountOpt) return;
      this.step = 2;
      // this.isSubmitted = true;
    },
    async getCategories() {
      try {
        var res = await this.$axios.get("services/categories");
        this.categories = res.data;
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    },
    close() {
      (this.accountOpt = null),
        (this.isSubmitted = false),
        (this.nextStep = null),
        (this.serviceType = null),
        (this.isSubmitted = false);
      this.step = 1;
      this.basicD = {};
      this.dataDec = {};
      this.dataP = {};
      this.$parent.serviceModel = false;
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
.main-section {
  display: flex;
  justify-content: center;
  width: 100%;
}
.login-signup {
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
.login-signup.active {
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
.login-signup.active .primary-login {
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
.container-vendor {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
}
.container-vendor .cards {
  display: flex;
  justify-content: space-between;
  width: 98%;
  flex-wrap: wrap;
  padding: 10px;
}
.container-vendor .primary-cards {
  width: 45%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 1px 11px -5px #0000006b;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0 8px;
  margin-bottom: 22px;
}
.container-vendor .primary-cards .category-img {
  width: 36px;
  position: relative;
  left: 14px;
}
.container-vendor .primary-cards .content {
  text-align: left;
  line-height: 1.5;
}
.container-vendor .primary-cards.active {
  border: 1px solid #febb12;
}
.container-vendor .primary-cards h6 {
  color: #393f45;
  margin-top: 3px;
  font-size: 10px;
}
.container-vendor .primary-cards h5 {
  font-size: 14px;
}
/* categories */
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
  box-shadow: 0 1px 12px -2px #00000040;
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
/* categories */
</style>
