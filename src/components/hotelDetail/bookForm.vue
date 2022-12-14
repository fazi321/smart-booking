<template>
  <section class="form-book">
    <div class="book-container">
      <div class="heading" v-if="storeState && storeState.price">
        <h6>SAR {{ storeState && storeState.price.dayPrice }}</h6>
        <p>Per Night</p>
      </div>
      <div
        :class="[
          'filter-option',
          { active: error.checkInDate && !inputDetail.checkInDate },
        ]"
        @click="showModelDate('cn')"
      >
        <img src="../../assets/images/date.svg" />
        <input
          type="text"
          v-model="inputDetail.checkInDate"
          placeholder="Check-in date"
          readonly
        />
        <input
          type="date"
          id="date"
          ref="cn"
          @change="dateChange($event, 'cn')"
        />
      </div>
      <div
        :class="[
          'filter-option',
          { active: error.checkOutDate && !inputDetail.checkOutDate },
        ]"
        @click="showModelDate('co')"
      >
        <img src="../../assets/images/date.svg" />
        <input
          type="text"
          v-model="inputDetail.checkOutDate"
          placeholder="Check-out date"
          readonly
        />
        <input
          type="date"
          id="date"
          ref="co"
          @change="dateChange($event, 'co')"
        />
      </div>
      <div
        :class="[
          'filter-option',
          { active: error.checkInTime && !inputDetail.checkInTime },
        ]"
        @click="showModelDate('cit')"
      >
        <img src="../../assets/images/time.svg" />
        <input
          type="text"
          v-model="inputDetail.checkInTime"
          placeholder="Check-in time"
        />
        <input
          type="time"
          id="date"
          ref="cit"
          @input="timeChange($event, 'cit')"
        />
      </div>
      <div
        :class="[
          'filter-option',
          { active: error.checkOutTime && !inputDetail.checkOutTime },
        ]"
        @click="showModelDate('cot')"
      >
        <img src="../../assets/images/time.svg" />
        <input
          type="text"
          v-model="inputDetail.checkOutTime"
          placeholder="Check-out time"
        />
        <input
          type="time"
          id="date"
          ref="cot"
          @input="timeChange($event, 'cot')"
        />
      </div>
      <section class="book-btn-section">
        <router-link to="/messages" class="image-container">
          <img src="../../assets/images/chaticon.svg" />
        </router-link>
        <div class="book-btn">
          <button :disabled="loading" @click="BookingModelShow">
            {{ !loading ? storeState?.bookingSetting?.bookingType == '24-Hour' ? $t('detailPage.request') : $t('detailPage.book') : "Loading..." }}
          </button>
        </div>
      </section>
    </div>
    <BookModel v-if="bookingModel" :dataApi="dataBookingApi" />
  </section>
</template>

<script>
import BookModel from "@/components/models/BookModel.vue";
export default {
  components: {
    BookModel,
  },
  data() {
    return {
      bookingModel: false,
      inputDetail: {},
      dataBookingApi: null,
      loading: false,
      error: {},
    };
  },
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
    user: function () {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    dateChange(e, val) {
      var getDate = convertDateToUTC(new Date(e.target.value));
      function convertDateToUTC(date) {
        return new Date(
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate()
        );
      }
      if (val == "cn") {
        if (!e.target.value) {
          this.inputDetail.checkInDate = null;
          return;
        }
        this.inputDetail.checkInDate = getDate.toLocaleDateString("en-GB");
      }
      if (val == "co") {
        if (!e.target.value) {
          this.inputDetail.checkOutDate = null;
          return;
        }
        this.inputDetail.checkOutDate = getDate.toLocaleDateString("en-GB");
      }
    },
    timeChange(e, val) {
      if (val == "cit") {
        this.inputDetail.checkInTime = this.timeFormate(e.target.value);
        this.inputDetail.timeIn = e.target.value;
      }
      if (val == "cot") {
        this.inputDetail.checkOutTime = this.timeFormate(e.target.value);
        this.inputDetail.timeOut = e.target.value;
      }
    },
    timeFormate(time) {
      var timeSplit = time.split(":"),
        hours,
        minutes,
        meridian;
      hours = timeSplit[0];
      minutes = timeSplit[1];
      if (hours > 12) {
        meridian = "PM";
        hours -= 12;
      } else if (hours < 12) {
        meridian = "AM";
        if (hours == 0) {
          hours = 12;
        }
      } else {
        meridian = "PM";
      }
      var timeIs = hours + ":" + minutes + ":" + meridian;
      return timeIs;
    },
    isoString(val) {
      const dateStr = val;
      const [dateComponents, timeComponents] = dateStr.split(" ");
      const [year, month, day] = dateComponents.split("-");
      const [hours, minutes, seconds] = timeComponents.split(":");
      const date = new Date(
        +year,
        +month - 1,
        +day,
        +hours,
        +minutes,
        +seconds
      );
      return date.toISOString();
      // console.log(date.toLocaleString());
      // console.log(date.getDate());
    },
    formateDate(date, time) {
      const [day, month, year] = date.split("/");
      const result = [day, month, year].reverse().join("-");
      var dateString = result.toString() + " " + time + ":00";
      //  converting date to iso string
      return this.isoString(dateString);
    },
    async BookingModelShow() {
      if (!this.user) {
        this.$store.commit("auth/MODEL_OPEN", true);
        return;
      }
      var {
        checkInDate,
        checkOutDate,
        checkInTime,
        checkOutTime,
        timeIn,
        timeOut,
      } = this.inputDetail;
      if (!checkInDate) {
        return (this.error.checkInDate = true);
      }
      if (!checkOutDate) {
        return (this.error.checkOutDate = true);
      }
      if (!checkInTime) {
        return (this.error.checkInTime = true);
      }
      if (!checkOutTime) {
        return (this.error.checkOutTime = true);
      }
      var checkIn = this.formateDate(checkInDate, timeIn);
      var checkOut = this.formateDate(checkOutDate, timeOut);
      // var amount = this.storeState?.price?.dayPrice;
      var payload = {
        // amount,
        // nights,
        paymentMethod: "online",
        checkIn,
        checkOut,
      };
      try {
        this.loading = true;
        const res = await this.$axios.post(
          `booking/${this.$route.params.id}`,
          payload
        );
        if (res) {
          // this.id = res.data.booking._id;
          // this.bookingModel = false;
          // this.paymentModel = true;
          this.loading = false;
          this.dataBookingApi = res.data;
          this.bookingModel = true;
        }
      } catch (error) {
        this.loading = false;
        this.$swal({
          icon: "error",
          title: `${error.response.data.error}!`,
          showConfirmButton: false,
          timer: 3000,
        });
        console.log(error);
      }
    },
    showModelDate(val) {
      var isShow = this.$refs[val];
      try {
        isShow.showPicker();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.book-btn-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.book-btn-section .image-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #febb12;
  overflow: hidden;
  cursor: pointer;
}
.book-btn-section .image-container img {
  width: 50%;
}
#date {
  visibility: hidden;
}
.form-book {
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 20px;
  opacity: 1;
  min-height: 500px;
}
.book-container {
  padding: 15px 30px;
}
.book-container .heading {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 20px 0;
}
.book-container .heading h6 {
  font-size: 18px;
  text-align: center;
  letter-spacing: 2.04px;
  color: #febb12;
  opacity: 1;
  font-weight: 600;
  margin-right: 10px;
}
.book-container .heading p {
  letter-spacing: 1.18px;
  color: #000000;
  opacity: 0.4;
  font-size: 14px;
}
.book-container .filter-option {
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 53px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  cursor: pointer;
  margin-top: 20px;
  position: relative;
  border: 1px solid transparent;
}
.book-container .filter-option.active {
  border: 1px solid red;
}
.filter-option #date {
  position: absolute;
  left: 20px;
}
.book-container .filter-option img {
  width: 18px;
  height: 18px;
  margin-right: 15px;
}
.book-container .filter-option input {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 100%;
  padding: 16px 0;
}
.book-btn {
  margin: 30px 15px;
}
.book-btn button {
  border: none;
  outline: none;
  padding: 15px 0;
  text-align: center;
  letter-spacing: 0px;
  color: #04304b;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 53px;
  opacity: 1;
  background: #febb12;
  cursor: pointer;
  width: 135px;
}
@media (max-width: 479px) and (min-width: 320px) {
}
</style>
