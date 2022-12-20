<template>
  <div class="selected-lang">
    <select
      :class="['select', { 'set-lang': $t('lang') == 'ar' }]"
      @change="language"
    >
      <option value="ar" :selected="$t('lang') == 'ar'">
        {{ $t("language.ar") }}
      </option>
      <option value="en" :selected="$t('lang') == 'en'">
        {{ $t("language.eng") }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "langDrop",
  methods: {
    language(e) {
      this.$i18n.locale = e.target.value;
    },
  },
};
</script>

<style scoped>
.select-wrapper {
  position: relative;
  width: 350px;
}
.select-wrapper::after {
  color: black;
  content: "▾";
  margin-right: 10px;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 14px;
}
.select {
  /* -moz-appearance: none;
  -webkit-appearance: none; */
  background: white;
  border: none;
  border-radius: 0;
  cursor: pointer;
  /* padding: 12px; */
  width: 100%;
  font-size: 14px;
  outline: none;
  color: gray;
}
.select:focus {
  color: black;
}
/* option:hover {
  background-color: yellow;
} */
.selected-lang {
  margin-left: 5px;
}
.set-lang.select {
  direction: rtl;
  text-align: right;
}
/* .select::-ms-expand {
  display: none;
} */
</style>
