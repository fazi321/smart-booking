<template>
  <section :class="['login-signup', { active: model }]">
    <div class="primary-login">
      <div class="main-login">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Add Review</h1>
        </div>
        <section class="profile-container">
          <form @submit="send">
            <div class="heading-name">
              <h1>You can add your review here</h1>
            </div>
            <div class="rating-main">
              <div class="rating">
                <span
                  :class="['star', { yellow: rating >= 1 }]"
                  @click="rattingFun(1)"
                  >&starf;</span
                >
                <span
                  :class="['star', { yellow: rating >= 2 }]"
                  @click="rattingFun(2)"
                  >&starf;</span
                >
                <span
                  :class="['star', { yellow: rating >= 3 }]"
                  @click="rattingFun(3)"
                  >&starf;</span
                >
                <span
                  :class="['star', { yellow: rating >= 4 }]"
                  @click="rattingFun(4)"
                  >&starf;</span
                >
                <span
                  :class="['star', { yellow: rating >= 5 }]"
                  @click="rattingFun(5)"
                  >&starf;</span
                >
                <span class="rating-counter">({{rating}})</span>
              </div>
            </div>
            <div class="text-area">
              <textarea
                v-model="text"
                cols="30"
                rows="8"
                placeholder="Write Review..."
              ></textarea>
            </div>
            <div class="btn-container">
              <button :disabled="loading" type="submit" class="btn">
                {{ !loading ? "Submit" : "Loading..." }}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "vendorProfileModel",
  props: ["model"],
  data() {
    return {
      text: "",
      rating: 5,
      loading: false,
    };
  },
  methods: {
    rattingFun(val) {
      this.rating = val;
    },
    async send(event) {
      event.preventDefault();
      this.loading = true;
      if (!this.text) false;
      try {
        var res = await this.$axios.post(
          `services/${this.$route.params.id}/review`,
          {
            rating: this.rating,
            comment: this.text,
          }
        );
        if (res.data) {
          if (res.data.message) {
            this.$swal({
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 3000,
            });
            this.loading = false;
            this.close();
          }
        }
      } catch (error) {
        this.$swal({
          icon: "error",
          title: error.response.data.error,
          showConfirmButton: false,
          timer: 3000,
        });
        this.loading = false;
        console.log(error);
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.login-signup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 80;
  visibility: hidden;
}
.login-signup.active {
  visibility: visible;
}
.primary-login {
  width: 623px;
  background: #fff;
  height: fit-content;
  padding: 25px 25px;
  border-radius: 20px;
  transition: 0.2s linear;
  transform: translateY(-100%);
}
.login-signup.active .primary-login {
  transform: translateY(0);
}
.logo-close {
  display: flex;
  justify-content: center;
  position: relative;
}
.logo-close .logo {
  width: 110px;
  overflow: hidden;
  border-radius: 50%;
  height: 110px;
}
img {
  width: 100%;
  height: 100%;
}
.close-icon {
  cursor: pointer;
  top: -10px;
  position: absolute;
  right: 0;
  width: 35px;
  height: 35px;
}
.headings {
  text-align: center;
  padding: 5px;
  margin: 0;
}
.headings h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 18px;
}
.headings h4 {
  font-weight: 500;
  font-size: 16px;
}
.profile-container {
  display: flex;
}
.profile-container form {
  width: 100%;
}
.profile-container textarea {
  outline: none;
  border: none;
  width: 100%;
}
.text-area {
  border-radius: 20px;
  border: 1px solid #dedede;
  overflow: hidden;
  padding: 10px;
}
.heading-name h1 {
  text-align: left;
  margin: 0 0 18px 0;
}
.btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.btn-container .btn {
  border-radius: 50px;
  background: #febb12;
  color: #000;
  box-shadow: 0 10px 10px -5px #00000038;
  border: none;
  font-size: 18px;
  min-width: 200px;
  margin-top: 20px;
  padding: 10px;
}
.rating-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.rating {
  text-align: left;
  padding: 15px 0;
  display: flex;
  align-items: center;
}
.rating .star {
  font-size: 24px;
  color: #efefef;
  margin-right: 5px;
  cursor: pointer;
  line-height: 1;
}
.rating .yellow {
  color: #fdc350 !important;
}
.rating .rating-counter {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  font-size: 10px;
  top: -2px;
  position: relative;
}
/* responsive */
@media (max-width: 700px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
  .headings h1 {
    font-size: 20px;
  }
}
</style>
