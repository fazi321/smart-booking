<template>
  <div class="smart-card">
    <div class="image"></div>
    <div class="detail">
      <h5></h5>
      <p></p>
      <h5></h5>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonCard",
};
</script>

<style scoped>
.smart-card {
  width: 100%;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 17px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 185px;
}
.smart-card .image {
  border-radius: 17px;
  width: 23%;
  background: #eee;
}
.service-skeleton .smart-card .image {
  border-radius: 17px;
  width: 30%;
  background: #eee;
}
.service-skeleton .smart-card .detail{
  width: 64%;
}
.service-skeleton .smart-card{
  height: 172px;
}
.smart-card .detail {
  padding: 20px;
  width: 72%;
  display: flex;
  flex-direction: column;
}
.smart-card .detail h5 {
  height: 20px;
  background: #eee;
  width: 50%;
  margin-bottom: 20px;
}
.smart-card .detail p {
  height: 20px;
  background: #eee;
  width: 70%;
  margin-bottom: 20px;
}
</style>