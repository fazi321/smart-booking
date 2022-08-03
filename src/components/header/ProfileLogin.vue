<template>
  <section class="btns">
    <button class="btn btn-transparent">Become Vendor</button>
    <button class="btn btn-filled">Login</button>
  </section>
</template>

<script>
export default {
  name: "webProfile",
};
</script>

<style scoped>
.btns {
  display: flex;
}
.btn {
  border-radius: 50px;
  border: 1px solid #febb12;
  padding: 12px 25px;
}
.btn-transparent {
  background: transparent;
  color:#febb12;
  margin-right: 10px;
}
.btn-filled {
  background: #febb12;
  color:#000;
}
</style>
