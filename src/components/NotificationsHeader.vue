<template>
  <section id="demo2" :class="{ 'set-lang': $t('lang') == 'ar' }">
    <div class="ghanti" @click="opendropDown">
      <sup>1</sup>
      <img src="../assets/images/bell.svg" />
    </div>
    <div class="drop" v-if="dropDown">
      <div class="head-title">
        <h1>{{ $t("header.notifications") }}</h1>
      </div>
      <section class="message-section" v-if="!loading">
        <div v-if="notifications && notifications.length">
          <div v-for="(message, index) in notifications" :key="index">
            <div class="primary-container">
              <div class="secondry-container">
                <img src="../assets/images/imageProfile.png" />
              </div>
              <div>
                <div>
                  <h4>{{ message.title }}</h4>
                  <p>{{ message.descripton }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="not-found">
          <h1>{{ $t("error.notFound") }}</h1>
        </div>
      </section>
      <section v-else class="loading">
        <h1>Loading...</h1>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotificationsHeader",
  props: ["RemOutClick"],
  data() {
    return {
      notifications: [],
      dropDown: false,
      //
      loading: false,
    };
  },
  methods: {
    opendropDown() {
      this.dropDown = !this.dropDown;
    },
    async getNotifications() {
      this.loading = true;
      try {
        var response = await this.$axios.get("vender/notification");
        if (response) {
          this.notifications = response.data;
          this.loading = false;
        }
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
  mounted() {
    this.getNotifications();
    if (!this.RemOutClick) {
      var close = () => {
        this.dropDown = false;
      };
      window.addEventListener("click", function (e) {
        var doc = document.getElementById("demo2");
        if (doc) {
          var ele = doc.contains(e.target);
          // console.log(ele, 'target')
          if (!ele) {
            close();
          }
        }
      });
    }
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
.ghanti sup{
  position: absolute;
  width:16px;
  height: 16px;
  overflow: hidden;
  top: -3px;
  left: -4px;
  border-radius: 50px;
  background:#febb12;
  color:#0e4763;
  font-size:8px;
  font-weight: bold;
  display: flex;
  align-items:center;
  justify-content: center;
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
  top: 51px;
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
.message-section {
  height: 300px;
  overflow-y: scroll;
}
.loading,
.not-found {
  padding: 10px;
}
.set-lang .drop {
  min-width: 346px;
  left: 25%;
  right: 61%;
}
.set-lang .ghanti{
  margin-left:0px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .ghanti {
    width: 19px;
    margin-top: -4px;
  }
  .drop {
    min-width: 220px;
  }
}
</style>
