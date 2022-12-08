<template>
  <section class="primary-contianer-des">
    <section class="description">
      <h3>{{$t('detailPage.description')}}</h3>
      <p v-if="storeState && storeState.description">
        {{ storeState.description.descriptionInEnglish }}
      </p>
      <p v-else>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat
        turpis, bibendum eu tortor ut, sagittis scelerisque ante. Maecenas
        pretium justo id orci lacinia, eget dictum magna dapibus. Nunc
        condimentum nunc quis mi lobortis, in euismod lorem tincidunt. Quisque
        finibus congue condimentum. Quisque euismod, nisl non malesuada
        accumsan, ex mauris porta arcu, nec tempus lorem massa quis orci.
        Suspendisse non tellus sem. Aliquam eu elit velit.
      </p>
    </section>
    <section class="btn-review">
      <button class="btn" @click="openVendor">{{$t('detailPage.vendorProfile')}}</button>
    </section>
  </section>
</template>

<script>
export default {
  name: "DetailDescription",
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
  },
  methods: {
    openVendor() {
      this.$emit('show')
    },
  },
};
</script>

<style scoped>
.description {
  padding-bottom: 20px;
}
.description h3 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 18px;
  padding-bottom: 15px;
}
.description p {
  font-size: 14px;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  line-height: 2.2;
}
.primary-contianer-des {
  display: flex;
  justify-content: space-between;
}
.btn-review .btn {
  width:140px;
  background: #febb12;
  color: #000;
  box-shadow: 0 10px 10px -5px #00000038;
  border-radius: 50px;
  border: 1px solid #febb12;
  padding: 10px 20px;
}
@media (max-width: 479px) and (min-width: 320px) {
}
</style>
