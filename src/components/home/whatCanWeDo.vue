<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>WHAT CAN WE DO FOR YOU?</h1>
    </div>
    <div class="card-container">
      <WhatWeDo />
      <WhatWeDo />
      <WhatWeDo />
      <WhatWeDo />
      <WhatWeDo />
      <WhatWeDo />
    </div>
  </div>
</template>

<script>
import WhatWeDo from "@/components/common/WeDo.vue";
export default {
  name: "WhatCanWeDo",
  components: {
    WhatWeDo
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
}
.smart-booking {
  padding: 10px 0;
}

</style>