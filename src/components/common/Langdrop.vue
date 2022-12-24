<template>
  <div class="selected-lang" id="clickbox">
    <div :class="['main-div', { 'set-lang': $t('lang') == 'ar' }]">
      <div class="main-drop" @click="dropDownShow">
        <p>{{ $t("lang") == "en" ? $t("language.eng") : $t("language.ar") }}</p>
      </div>
      <div class="dropdown-menu" v-if="show">
        <p @click="language('en')" v-if="$t('lang') == 'ar'">
          {{ $t("language.eng") }}
        </p>
        <p @click="language('ar')" v-if="$t('lang') == 'en'">
          {{ $t("language.ar") }}
        </p>
      </div>
    </div>
    <!-- <select
      :class="['select', { 'set-lang': $t('lang') == 'ar' }]"
      @input="language"
    >
      <option value="ar" :selected="$t('lang') == 'ar'" @click="language">
        {{ $t("language.ar") }}
      </option>
      <option value="en" :selected="$t('lang') == 'en'">
        {{ $t("language.eng") }}
      </option>
    </select> -->
  </div>
</template>

<script>
export default {
  name: "langDrop",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    var _this = this;
    window.addEventListener("click", function (e) {
      var ele = document.getElementById("clickbox");
      if (!ele.contains(e.target)) {
        _this.show = false;
      }
    });
  },
  methods: {
    handleFocusOut() {
      console.log("working");
    },
    dropDownShow() {
      this.show = !this.show;
    },
    language(e) {
      this.$i18n.locale = e;
      this.show = false;
    },
  },
};
</script>

<style scoped>
.main-div {
  text-align: left;
  position: relative;
}
.main-drop p {
  font-size: 14px;
  color: gray;
  min-width: 45px;
  margin-left: 6px;
}
.main-drop p::after {
  background-color: white;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
  width: 5px;
  display: inline-block;
  height: 5px;
  transform: rotate(45deg);
  -webkit-transform: scale(1) rotate(45deg) translate(0px, 0px);
  -moz-transform: rotate(45deg) scale(1);
  -o-transform: rotate(45deg) scale(1);
  content: "";
  margin-left: 5px;
  top: 5px;
  position: absolute;
  right: 8px;
}
.dropdown-menu {
  position: absolute;
  width: 44px;
  box-shadow: 0px 0px 6px 2px #cfcfcf6b;
  border: 1px solid #bbbbbb;
  margin-top: 3px;
  margin-left: 7px;
}
.dropdown-menu p:hover {
  background: #febb12;
  color: #0e4763;
}
.dropdown-menu p {
  color: gray;
  padding: 2px 5px;
  cursor: pointer;
}
.set-lang p {
  text-align: right;
  margin-left: 0;
}
.set-lang .main-drop p {
  margin-right:10px;
}
.set-lang .main-drop p::after {
  right: unset;
  left: 0;
}
.set-lang .dropdown-menu {
  margin-left: 0;
}
</style>
