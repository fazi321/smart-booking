<template>
  <section
    :class="[
      'login-signup',
      { active: model },
      { 'set-langauge': $t('lang') == 'ar' },
    ]"
  >
    <!-- step one -->
    <section v-if="step == 1" class="accountRes">
      <AddService :cached="accountOpt" :firstStep="true" />
    </section>
    <!-- categories -->
    <div class="primary-login" v-if="step == 2">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>{{ $t("AddService.basicInformation") }}</h1>
          <h4>
            <button @click="back(1)">{{ $t("AddService.back") }}</button
            >{{ $t("AddService.serviceType") }}
          </h4>
        </div>
        <!-- <div class="buttons-top">
          <button @click="accountSelected(1)">back</button>
          <button @click="saveData">Save</button>
        </div> -->
        <div class="container-service">
          <div class="cards">
            <div
              v-for="(item, index) in $store.state.details.categories"
              :key="index"
              :class="{
                active: serviceType && serviceType.category == item.category,
              }"
              @click="selectedCategory(item)"
            >
              <div v-if="item.category == 'Chalets'">
                <h6>{{ $t("AddService.chalets") }}</h6>
              </div>
              <div v-else-if="item.category == 'Resorts'">
                <h6>{{ $t("AddService.resorts") }}</h6>
              </div>
              <div v-else-if="item.category == 'Stadium'">
                <h6>{{ $t("AddService.stadium") }}</h6>
              </div>
              <div v-else-if="item.category == 'Apartment'">
                <h6>{{ $t("AddService.apartment") }}</h6>
              </div>
              <div v-else-if="item.category == 'Lounges'">
                <h6>{{ $t("AddService.lounges") }}</h6>
              </div>
              <div v-else-if="item.category == 'Camps'">
                <h6>{{ $t("AddService.camps") }}</h6>
              </div>
              <div v-else-if="item.category == 'Hotel'">
                <h6>{{ $t("AddService.hotel") }}</h6>
              </div>
              <div v-else-if="item.category == 'Wedding_Halls'">
                <h6>{{ $t("AddService.wedding") }}</h6>
                <h6>{{ $t("AddService.halls") }}</h6>
              </div>
              <div v-else-if="item.category == 'Farms'">
                <h6>{{ $t("AddService.farms") }}</h6>
              </div>
              <div v-else>
                <h6>
                  {{ item.category }}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="changeSteps">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Chalets -->
    <section v-if="serviceType && serviceType.category == 'Chalets'">
      <!-- basic information start -->
      <InfoModelChalets
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelChalets
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelChalets
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Resort -->
    <section v-if="serviceType && serviceType.category == 'Resorts'">
      <!-- basic information start -->
      <InfoModel
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModel
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModel
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- stadium  -->
    <section v-if="serviceType && serviceType.category == 'Stadium'">
      <!-- basic information start -->
      <InfoModelStadium
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelStadium
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelStadium
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Appartments -->
    <section v-if="serviceType && serviceType.category == 'Apartment'">
      <!-- basic information start -->
      <InfoModelAppartments
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelAppartments
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelAppartments
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Lounges -->
    <section v-if="serviceType && serviceType.category == 'Lounges'">
      <!-- basic information start -->
      <InfoModelLoungs
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelLoungs
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelLoungs
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Camps -->
    <section v-if="serviceType && serviceType.category == 'Camps'">
      <!-- basic information start -->
      <InfoModelCamps
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelCamps
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelCamps
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Wedding -->
    <section v-if="serviceType && serviceType.category == 'Wedding_Halls'">
      <!-- basic information start -->
      <InfoModelWeddings
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelWeddings
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelWeddings
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Farms -->
    <section v-if="serviceType && serviceType.category == 'Farms'">
      <!-- basic information start -->
      <InfoModelFarms
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelFarms
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelFarms
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
    <!-- Hotels -->
    <section v-if="serviceType && serviceType.category == 'Hotel'">
      <!-- basic information start -->
      <InfoModelHotels
        :model="isSubmitted && accountOpt == 'info'"
        @close="close"
        @basicInfo="basicData"
      />
      <!-- Description start -->
      <ServiceModelHotels
        :model="isSubmitted && accountOpt == 'service'"
        @close="close"
        @images="formData"
        @decription="decription"
      />
      <!-- price start -->
      <PriceModelHotels
        :model="isSubmitted && accountOpt == 'price'"
        @close="close"
        @price="pricing"
      />
    </section>
  </section>
</template>

<script>
import AddService from "./AddService.vue";
// CHALETS
import InfoModelChalets from "./steps/chalets/InfoModel.vue";
import ServiceModelChalets from "./steps/chalets/ServiceModel.vue";
import PriceModelChalets from "./steps/chalets/PriceModel.vue";
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
    AddService,
    // chalets
    InfoModelChalets,
    ServiceModelChalets,
    PriceModelChalets,
    // resorts
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
      //show popUp
      isSubmittedInfo: false,
      isSubmittedDes: false,
    };
  },
  methods: {
    back(step) {
      this.step = step;
    },
    backServiceModel(step, accountType) {
      // info, service and pric
      this.accountOpt = accountType;
      this.isSubmitted = true;
      this.step = step;
    },
    // saveData() {
    //   localStorage.setItem(
    //     "savedData",
    //     JSON.stringify({
    //       type: "info",
    //       step: this.step,
    //       category: this.serviceType.category,
    //     })
    //   );
    //   // category
    // },
    selectedCategory(opt) {
      if (opt.category == "Wedding_Halls" || opt.category == "Stadium ") {
        this.finalData.totalEntities = "1200";
      } else {
        if (this.finalData && this.finalData.totalEntities) {
          delete this.finalData.totalEntities;
        }
      }
      this.myImages = {};
      this.serviceType = opt;
      this.isSubmitted = false;
    },
    basicData(val) {
      this.basicD = val;
      // this.isSubmittedInfo = true;
      // this.step = 1;
      // (this.accountOpt = "service"), (this.isSubmitted = false);
    },
    decription(val) {
      this.dataDec = val;
      // this.isSubmittedDes = true;
      // this.step = 1;
      // (this.accountOpt = "price"), (this.isSubmitted = false);
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
      if (this.myImages) {
        if (uploadedImages) {
          var imagesArr = Object.values(uploadedImages);
          dataPayload.description.images = imagesArr;
          this.submit(dataPayload);
        }
      } else {
        this.submit(dataPayload);
      }
    },
    async submit(payload) {
      var cate = this.serviceType.category.toLowerCase();

      if (cate == "lounges") {
        cate = "lounge";
      }
      if (cate == "wedding_halls") {
        cate = "weddinghalls";
      }
      if (cate == "chalets") {
        cate = "chalet";
      }
      if (cate == "camps") {
        cate = "camp";
      }
      try {
        const res = await this.$axios.post(cate, payload);
        if (res) {
          // console.log(res);
          // this.$swal({
          //   icon: "success",
          //   title: "Success!",
          //   showConfirmButton: false,
          //   timer: 3000,
          // });
          this.$store.dispatch("details/setLoading", false);
          setTimeout(() => {
            this.$router.push("/my-services");
            if (this.$route.path == "/my-services") {
              location.reload();
            }
          }, 3000);
        }
      } catch (error) {
        this.$store.dispatch("details/setLoading", false);
        console.log(error);
      }
    },
    async uploadFiles() {
      this.$store.dispatch("details/setLoading", true);
      try {
        const imagesData = await this.$axios.post(
          "user/upload-multiple",
          this.myImages,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return imagesData.data;
      } catch (error) {
        this.$store.dispatch("details/setLoading", false);
        console.log(error);
      }
    },
    formData(formImage) {
      this.myImages = formImage;
      // this.uploadFiles();
      // console.log(this.myImages)
    },
    changeSteps() {
      if (this.serviceType) {
        this.isSubmitted = true;
      }
    },
    selectedOptions(opt) {
      this.accountOpt = opt;
    },
    accountSelected(step) {
      if (!this.accountOpt) return;
      this.step = step;
      this.isSubmitted = false;
    },
    close() {
      this.accountOpt = null;
      this.isSubmitted = false;
      this.nextStep = null;
      this.step = 1;
      this.serviceType = {};
      this.basicD = {};
      this.dataDec = {};
      this.dataP = {};
      this.finalData = {};
      this.myImages = {};
      this.$parent.serviceModel = false;
    },
  },
  // watch: {
  //   // whenever question changes, this function will run
  //   model() {
  //     var localData = localStorage.getItem("savedData");
  //     if (localData) {
  //       var { type, category, step } = JSON.parse(localData);
  //       this.accountOpt = type;
  //       this.step = step;
  //       this.serviceType.category = category;
  //       console.log(category);
  //     }
  //   },
  // },
};
</script>

<style scoped>
.buttons-top {
  display: flex;
  justify-content: space-between;
}
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
  position: relative;
}
.container-vendor .primary-cards .content h5 img {
  width: 20px;
  height: 20px;
  right: 0;
  position: absolute;
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
@media (max-width: 700px) and (min-width: 320px) {
  .container-vendor .primary-cards {
    width: 87%;
  }
  .container-vendor .cards {
    justify-content: center;
  }
  .primary-login {
    width: 82%;
  }
  .container-service .cards > div {
    margin: 5px 5px 5px 5px;
    width: 79px;
    font-size: 18px;
  }
}
</style>
