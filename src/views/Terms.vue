<template>
  <default-layout>
    <section class="container">
      <div class="privacy">
        <h1>TERMS OF USE</h1>
      </div>
      <div class="content" v-for="(f, index) in terms" :key="index">
        <h3>{{f.title}}</h3>
        <p>{{f.text}}</p>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout
  },
  data(){
    return{
      terms:[],
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
   async getData(){
      try {
        var res = await this.$axios.get(`user/terms`);
        if(res.data){
          this.terms = res.data.termsOfUse;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
.privacy {
  padding: 30px 0;
}
.privacy h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.content {
  padding: 20px 0;
  line-height: 1.8;
}
.content h3 {
  text-align: left;
  letter-spacing: 0.6px;
  color: #febb12;
  opacity: 1;
  font-size: 16px;
}
.content p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 14px;
  padding: 10px 0 20px 0;
}
</style>
