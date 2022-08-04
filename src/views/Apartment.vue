<template>
   <div>
    <Header/>
    <Apartment/>
   </div>
</template>

<script>
import Header from "@/components/header/index.vue";
import Apartment from "@/components/apartment/index.vue";


export default {
  name: "AparmentView",
  components: {
    Header,
    Apartment,
   
  }
};
</script>
