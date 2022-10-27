<template>
  <section id="demo2">
    <div class="ghanti" @click="opendropDown">
      <img src="../assets/images/bell.svg" />
    </div>
    <div class="drop" v-if="dropDown">
      <div class="head-title">
        <h1>Notifications</h1>
      </div>
      <div>
        <div class="primary-container">
          <div class="secondry-container">
            <img src="../assets/images/imageProfile.jpeg" />
          </div>
          <div>
            <div>
              <h4>Jhon Doe</h4>
              <p>this is test description in english</p>
            </div>
          </div>
        </div>
      </div>
      <!-- / -->
      <div>
        <div class="primary-container">
          <div class="secondry-container">
            <img src="../assets/images/imageProfile.jpeg" />
          </div>
          <div>
            <div>
              <h4>Jhon Doe</h4>
              <p>this is test description in english</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotificationsHeader",
  data() {
    return {
      notifications: [],
      dropDown: false,
    };
  },
  methods: {
    opendropDown() {
      this.dropDown = !this.dropDown;
    },
  },
  mounted() {
    var close = () => {
      this.dropDown = false;
    };
    window.addEventListener("click", function (e) {
      var doc = document.getElementById("demo2");
      if (doc) {
        var ele = doc.contains(e.target);
        if (!ele) {
          close();
        }
      }
    });
  },
};
</script>

<style scoped>
.ghanti {
  width: 23px;
  cursor: pointer;
  margin-left: 10px;
  position: relative;
  top: 4px;
}
.drop {
  box-shadow: 0px 0px 7px 0px #adadada6;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  background: #fff;
  min-width: 288px;
  left: -61%;
  right: 0;
  top: 43px;
  height: max-content;
  padding-bottom: 15px;
  overflow: hidden;
}
.head-title {
  color: #0e4763;
  background-color: #febb12;
  text-align: center;
  padding: 10px;
}
.primary-container {
  display: flex;
  width: 100%;
  padding: 0px;
  border-bottom: 1px solid #eee;
}
.primary-container > div {
  margin: 10px;
}
.primary-container h4 {
  font-size: 14px;
  text-align: left;
}
.primary-container p {
  font-size: 12px;
}
.secondry-container {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #febb12;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
