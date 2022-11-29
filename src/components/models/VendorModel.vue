<template>
  <section :class="['login-signup', { active: model }]">
    <!-- step one -->
    <section class="primary-login" v-if="!isSubmitted">
      <div class="main-login">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings vendor-text">
          <h1>{{ $t("becomeVendor.becomeVendor") }}</h1>
          <h4>{{ $t("becomeVendor.subTitle") }}</h4>
        </div>
        <div class="container-vendor">
          <div class="cards">
            <div
              :class="['primary-cards', { active: accountOpt == 'comp' }]"
              @click="selectedOptions('comp')"
            >
              <h5>{{ $t("becomeVendor.irep") }}</h5>
              <h6>{{ $t("becomeVendor.company") }}</h6>
            </div>
            <div
              :class="['primary-cards', { active: accountOpt == 'host' }]"
              @click="selectedOptions('host')"
            >
              <h5>{{ $t("becomeVendor.mpersonal") }}</h5>
              <h6>{{ $t("becomeVendor.host") }}</h6>
            </div>
          </div>
          <div class="form-container">
            <div class="input-div">
              <button type="submit" @click="accountSelected">
                {{ $t("AddService.next") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- step Two -->
    <section class="main-section" v-if="isSubmitted">
      <section class="primary-login company" v-if="!nextStep">
        <div class="main-login">
          <div class="logo-close">
            <div class="close-icon" @click="close">
              <img src="../../assets/images/close-icon.svg" alt="" />
            </div>
          </div>
          <div class="headings">
            <h1>{{ $t("becomeVendor.becomeVendor") }}</h1>
            <h4 v-if="accountOpt == 'comp'">
              {{ $t("becomeVendor.irep") }}
              <span>{{ $t("becomeVendor.company") }}</span>
            </h4>
            <h4 v-if="accountOpt == 'host'">
              {{ $t("becomeVendor.mpersonal") }}
              <span>{{ $t("becomeVendor.host") }}</span>
            </h4>
          </div>
          <form class="container-vendor" @submit="onSubmit">
            <div :class="['transitionBox', { transitionActive: istransition }]">
              <div class="inputs-container">
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.firstName }"
                    @input="resolveErr('firstName')"
                    placeholder="First Name"
                    v-model="vendor.firstName"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.lastName }"
                    @input="resolveErr('lastName')"
                    placeholder="Last Name"
                    v-model="vendor.lastName"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    :class="{ activeErr: errors.phone }"
                    @input="resolveErr('phone')"
                    placeholder="Mobile Number"
                    v-model="vendor.phone"
                  />
                </div>
                <div>
                  <input
                    type="Email"
                    placeholder="Email"
                    required
                    v-model="vendor.email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.address }"
                    @input="resolveErr('address')"
                    placeholder="Address"
                    v-model="vendor.address"
                  />
                </div>
                <div v-if="accountOpt == 'host'">
                  <input
                    type="text"
                    :class="{ activeErr: errors.nationality }"
                    @input="resolveErr('nationality')"
                    placeholder="Nationality"
                    v-model="vendor.nationality"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    :class="{ activeErr: errors.commId }"
                    @input="resolveErr('commId')"
                    placeholder="Commercial ID No"
                    v-model="vendor.commId"
                  />
                </div>
              </div>
              <div class="upload-file">
                <label for="inputTag">
                  Upload File
                  <input id="inputTag" type="file" @change="profileImage" />
                </label>
              </div>
            </div>
            <div class="form-container">
              <div class="input-div">
                <button type="submit" v-if="!loading">{{$t("AddService.next")}}</button>
                <button v-else>Loading...</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <!-- step Two -->
      <SuccessModel v-if="nextStep == 1" @close="close" />
    </section>
  </section>
</template>

<script>
import SuccessModel from "@/components/models/SuccessModel.vue";
export default {
  name: "vendorModel",
  props: ["model"],
  components: {
    SuccessModel,
  },
  data() {
    return {
      phoneNumber: null,
      accountOpt: null,
      isSubmitted: false,
      nextStep: null,
      istransition: false,
      // model
      formData: null,
      vendor: {},
      loading: false,
      // errers
      errors: {},
    };
  },
  methods: {
    resolveErr(input) {
      this.errors[input] = false;
    },
    profileImage(event) {
      // this.url = URL.createObjectURL(event.target.files[0]);
      let formData = new FormData();
      formData.append("image", event.target.files[0]);
      this.formData = formData;
    },
    selectedOptions(opt) {
      this.accountOpt = opt;
    },
    accountSelected() {
      if (!this.accountOpt) return;
      this.isSubmitted = true;
      setTimeout(() => {
        this.istransition = true;
      }, 100);
    },
    stepTwo() {
      this.nextStep = 1;
    },
    async uploadFiles() {
      try {
        const imagesData = await this.$axios.post(
          "user/upload",
          this.formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return imagesData.data.url;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    validateInputs() {
      // if (this.accountOpt == "host") {}
      if (!this.vendor.firstName) {
        this.errors.firstName = true;
        return;
      }
      if (!this.vendor.lastName) {
        this.errors.lastName = true;
        return;
      }
      if (!this.vendor.phone) {
        this.errors.phone = true;
        return;
      }
      if (!this.vendor.address) {
        this.errors.address = true;
        return;
      }
      if (!this.vendor.nationality && this.accountOpt == "host") {
        this.errors.nationality = true;
        return;
      }
      if (!this.vendor.commId) {
        this.errors.commId = true;
        return;
      }
      return true;
    },
    async onSubmit(e) {
      e.preventDefault();
      if (!this.validateInputs()) return;
      this.loading = true;
      if (this.formData) {
        var uploadedImages = await this.uploadFiles();
        this.vendor.file = uploadedImages;
        this.uploadData();
      } else {
        this.uploadData();
      }
    },
    async uploadData() {
      try {
        var res = {};
        if (this.accountOpt == "host") {
          res = await this.$axios.put("user/upgrade-vender-host", this.vendor);
        } else {
          res = await this.$axios.put(
            "user/upgrade-vender-company",
            this.vendor
          );
        }
        if (res) {
          this.stepTwo();
          this.loading = false;
        }
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    close() {
      this.vendor = {};
      this.errors = {};
      this.$parent.vendorModel = false;
      this.accountOpt = null;
      this.isSubmitted = false;
      this.nextStep = null;
      this.istransition = false;
      this.$store.commit("details/SET_V_MODEL", false);
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
.error {
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: red;
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
.container-input {
  width: 90%;
}
.login-form input {
  width: 100%;
  /* height: 42px; */
  border: none;
  outline: none;
  user-select: none;
  margin-left: 10px;
}
.login-form input::placeholder {
  color: #b0b0b0;
}
.form-container {
  display: flex;
  justify-content: center;
}
.form-container form {
  width: 100%;
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
.input-div .flag {
  display: flex;
  align-items: center;
}
.input-div .flag span {
  color: #b0b0b0;
  font-size: 14px;
}
.input-div .flag .flag-img {
  width: 20px;
  position: relative;
  top: 2px;
  right: 3px;
}
.buttom-text {
  text-align: center;
  font-size: 14px;
}
.buttom-text span {
  text-align: center;
  color: #febb12;
  cursor: pointer;
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
  width: 58%;
  margin: 20px 0px 40px 0px;
}
.container-vendor .primary-cards {
  width: 150px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 1px 11px -5px #0000006b;
  cursor: pointer;
  border: 1px solid transparent;
}
.container-vendor .primary-cards.active {
  border: 1px solid #febb12;
}
.container-vendor .primary-cards h6 {
  color: #febb12;
  margin-top: 3px;
}
.container-vendor .primary-cards h6,
h5 {
  font-size: 14px;
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
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
  .headings h1 {
    font-size: 20px;
  }
  .container-vendor .cards {
    width: 100%;
  }
  .container-vendor .primary-cards {
    margin: 0 10px;
  }
}
</style>
