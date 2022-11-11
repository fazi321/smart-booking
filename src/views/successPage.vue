<template>
  <default-layout>
    <section class="success">
      <router-link to="/">
        <h1>Success!!!</h1>
      </router-link>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
export default {
  components: { DefaultLayout },
  mounted(){
    this.success()
  },
  methods:{
    async success(){
      // https://www.testingserver.tech/api/v1/booking/success/${req.params.id?id=''&status=''&message=''
      var {id,bookid, message ,status} = this.$route.query;
      try {
        var success = await this.$axios.post(`booking/success/${bookid}?id=${id}&status=${status}&message=${message}`);
        if(success){
          console.log(success)
        }
      } catch (error) {
        console.log(error)
      }

    }
  }
};
</script>

<style>
.success{
  height:200px;
  display:flex;
  align-items:center;
  justify-content: center;
}
.success h1 {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #febb12;
}
</style>
