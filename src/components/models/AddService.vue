<template>
  <div class="primary-login">
    <div class="main-login add-services">
      <div class="logo-close">
        <div class="close-icon" @click="close">
          <img src="../../assets/images/close-icon.svg" alt="" />
        </div>
      </div>
      <div class="headings">
        <h1>{{ $t("AddService.addService") }}</h1>
        <h4>
          <button @click="back" v-if="!firstStep">{{ $t("AddService.back") }}</button
          >{{ $t("AddService.subAddService") }}
        </h4>
      </div>
      <div class="container-vendor">
        <div :class="['cards', { 'set-langauge': $t('lang') == 'ar' }]">
          <div
            :class="['primary-cards', { active: cached == 'info' }]"
            @click="selectedOptions('info')"
          >
            <div class="category-img">
              <img src="../../assets/images/basic.svg" alt="" />
            </div>
            <div class="content">
              <h5>
                {{ $t("AddService.basicInformation") }}
                <img src="../../assets/tick.png" v-if="cached == 'service' || cached == 'price'" />
              </h5>
              <h6>
               {{ $t("AddService.fewQuestion") }}
              </h6>
            </div>
          </div>
          <div
            :class="['primary-cards', { active: cached == 'service' }]"
            @click="selectedOptions('info')"
          >
            <div class="category-img">
              <img src="../../assets/images/servies.svg" alt="" />
            </div>
            <div class="content">
              <h5>
                {{ $t("AddService.serviceDescription") }}
                <img src="../../assets/tick.png" v-if="cached == 'price'" />
              </h5>
              <h6>
                {{ $t("AddService.Settherules") }}
              </h6>
            </div>
          </div>
          <div
            :class="['primary-cards', { active: cached == 'price' }]"
            @click="selectedOptions('info')"
          >
            <div class="category-img">
              <img src="../../assets/images/price.svg" alt="" />
            </div>
            <div class="content">
              <h5>{{ $t("AddService.priceDetails") }}</h5>
              <h6>{{ $t("AddService.SetPrice") }}</h6>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="accountSelected(2)">
              {{ $t("AddService.next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cached", "firstStep","backTo"],
  methods: {
    selectedOptions(op) {
      if (this.firstStep) {
        this.$parent.selectedOptions(op);
      }
    },
    accountSelected() {
      if (this.firstStep) {
        this.$parent.accountSelected(2);
      }else{
        this.$emit('lastStep')
      }
    },
    close() {
      this.$parent.close();
    },
    back() {
      this.$parent.goBack(this.backTo);
    },
  },
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
  width: 205px;
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
.set-langauge .content{
  text-align: right!important;
}
.set-langauge .primary-cards{
  flex-direction: row-reverse!important;
}
.set-langauge .category-img{
  left: 0 !important;
}
.set-langauge .primary-cards .content h5 img{
  right:unset!important;
  left:0!important;
}
@media ((max-width: 700px)) and (min-width: 320px) {
  .container-vendor .primary-cards {
    width: 87%;
  }
  .container-vendor .cards {
    justify-content: center;
  }
  .primary-login {
    width: 82%;
  }
}
</style>
