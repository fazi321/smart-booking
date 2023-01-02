<template>
  <default-layout>
    <section class="container">
      <div class="my-profile">
        <h1>{{$t('inputs.myProfile')}}</h1>
        <div class="profile-container">
          <div class="profile-image">
            <img :src="url" alt="avatar" v-if="url" />
            <img
              src="../assets/images/profile-image.svg"
              alt="avatar"
              v-else-if="
                !$store.state.auth.user || !$store.state.auth.user.file
              "
            />
            <img :src="$store.state.auth.user.file" alt="avatar" v-else />
            <div class="camera">
              <label for="inputTag">
                <img src="../assets/images/camera.svg" alt />
                <input id="inputTag" type="file" @change="profileImage" />
              </label>
            </div>
          </div>
        </div>
        <div class="profile-form">
          <h6>{{$t('inputs.personalInformation')}}</h6>
          <form class="form" @submit="onSubmit">
            <div :class="{'set-language': $t('lang') == 'ar'}">
              <input
                type="text"
                :placeholder="$t('inputs.firstName')"
                v-model="userProfile.firstName"
              />
              <input
                type="text"
                :placeholder="$t('inputs.lastName')"
                v-model="userProfile.lastName"
              />
              <input
                type="number"
                min="1"
                :placeholder="$t('inputs.mobileNumber')"
                v-model="userProfile.phone"
              />
              <input
                type="email"
                :placeholder="$t('inputs.email')"
                v-model="userProfile.email"
              />
              <input
                type="text"
                :placeholder="$t('inputs.nationality')"
                v-model="userProfile.nationality"
              />
              <input
                type="number"
                min="1"
                :placeholder="$t('inputs.IDNumber')"
                v-model="userProfile.commId"
              />
              <input
                type="text"
                :placeholder="$t('placeholders.address')"
                v-model="userProfile.address"
              />
              <input
                type="text"
                :placeholder="$t('inputs.dateOfBirth')"
                v-model="userProfile.dob"
              />
              <input
                type="text"
                style="visibility: hidden"
                placeholder="Gender"
              />
            </div>
            <input
              :disabled="loading"
              class="submit"
              type="submit"
              :value="!loading ? $t('inputs.update') : 'loading'"
            />
          </form>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import Cookies from "js-cookie";

export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout,
  },
  data() {
    return {
      userProfile: {},
      loading: false,
      url: "",
      formData: null,
    };
  },
  mounted() {
    let auth = Cookies.get("Authorization");
    if (!auth) {
      this.$router.push("/");
    }
  },
  methods: {
    profileImage(event) {
      this.url = URL.createObjectURL(event.target.files[0]);
      let formData = new FormData();
      formData.append("image", event.target.files[0]);
      this.formData = formData;
    },
    async onSubmit(e) {
      e.preventDefault();
      try {
        this.loading = true;
        if (this.formData) {
          var uploadedImages = await this.uploadFiles();
          this.userProfile.file = uploadedImages;
          this.uploadData();
        } else {
          this.uploadData();
        }
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async uploadData() {
      this.loading = true;
      try {
        var res = await this.$axios.put(
          "user/profile/update",
          this.userProfile
        );
        if (res) {
          this.$swal({
            icon: "success",
            title: "Success!",
            showConfirmButton: false,
            timer: 3000,
          });
          this.loading = false;
        }
        this.$store.dispatch('auth/setProfile', res.data)
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async uploadFiles() {
      try {
        const imagesData = await this.$axios.post(
          "user/upload",
          this.formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return imagesData.data.url;
      } catch (error) {
        console.log(error);
      }
    },
    getProfile() {
      // if not user
      // const user = this.$store.state.auth.user;
      // if (!user) {
      //   this.$store.dispatch("auth/profile");
      // }
      // Set user data
      if (this.$store.state.auth.user) {
        var {
          firstName,
          lastName,
          phone,
          email,
          nationality,
          commId,
          address,
          dob,
        } = this.$store.state.auth.user;
        this.userProfile.firstName = firstName;
        this.userProfile.lastName = lastName;
        this.userProfile.phone = phone;
        this.userProfile.email = email;
        this.userProfile.nationality = nationality;
        this.userProfile.commId = commId;
        this.userProfile.address = address;
        this.userProfile.dob = this.formatDated(dob);
      }
    },
    formatDated(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      if (year && month && day) {
        return [year, month, day].join("-");
      } else {
        return;
      }
    },
  },
  watch: {
    "$store.state.auth.user": {
      immediate: true,
      handler() {
        this.getProfile();
      },
    },
  },
};
</script>
<style scoped>
.set-language input{
  text-align: right!important;
  direction: rtl!important;
}
.my-profile {
  padding: 30px 0;
}
.my-profile h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.profile-container {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
.profile-container .profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
}
.profile-container .profile-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.profile-container .profile-image .camera {
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
.profile-container .profile-image .camera input {
  display: none;
}
.profile-container .profile-image .camera {
  width: 30px;
  height: 30px;
}
.profile-form {
  padding: 15px 0;
  margin-bottom: 50px;
}
.profile-form h6 {
  text-align: left;
  letter-spacing: 0.75px;
  color: #000000;
  opacity: 0.8;
  font-size: 16px;
  padding: 15px 0;
}
.profile-form .form > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.profile-form .form input {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 23%;
  padding: 20px 25px;
  border-radius: 46px;
  opacity: 1;
  box-shadow: 0px 0px 10px #00000012;
  margin: 20px 0;
}
.profile-form .form .submit {
  text-align: center;
  letter-spacing: 0px;
  color: #04304b;
  opacity: 1;
  font-size: 18px;
  background: #febb12;
  padding: 17px 25px;
  width: 29%;
  font-weight: 600;
  margin-top: 40px;
  cursor: pointer;
}
@media ((max-width: 700px)) and (min-width: 320px) {
  .profile-form {
    margin: 0 10px;
  }
  .profile-form .form input {
    width: 85%;
  }
}
</style>
