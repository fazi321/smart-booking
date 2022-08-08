<template>
  <section class="dropdown">
    <ul>
      <li>
        <router-link to="#demo">
          <span>My Profile</span><span>new</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown {
  position: absolute;
  bottom: -45px;
  background: #fff;
  box-shadow: 0px 0px 7px 0px #adadada6;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-radius: 7px;
  z-index: 2;
  right: 27px;
}
.dropdown ul li a {
  color: #000;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.dropdown ul li a span:nth-child(2) {
  color: #febb12;
}
</style>