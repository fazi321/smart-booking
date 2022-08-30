<template>
  <section class="form-book">
    <div class="book-container">
      <div class="heading" v-if="storeState && storeState.price">
        <h6>SAR {{ storeState && storeState.price.dayPrice }}</h6>
        <p>Per Night</p>
      </div>
      <div :class="['filter-option', {'active': error.checkInDate && !inputDetail.checkInDate}]" @click="showModelDate('cn')">
        <img src="../../assets/images/date.svg" />
        <input type="text" v-model="inputDetail.checkInDate" placeholder="Check-in date" />
        <input
          type="date"
          v-model="inputDetail.checkInDate"
          id="date"
          ref="cn"
          @change="dateChange($event, 'cn')"
        />
      </div>
      <div :class="['filter-option', {'active': error.checkOutDate && !inputDetail.checkOutDate }]" @click="showModelDate('co')">
        <img src="../../assets/images/date.svg" />
        <input type="text" v-model="inputDetail.checkOutDate" placeholder="Check-in date" />
        <input
          type="date"
          v-model="inputDetail.checkOutDate"
          id="date"
          ref="co"
          @change="dateChange($event, 'co')"
        />
      </div>
      <div :class="['filter-option', {'active': error.checkInTime && !inputDetail.checkInTime}]" @click="showModelDate('cit')">
        <img src="../../assets/images/time.svg" />
        <input type="text" v-model="inputDetail.checkInTime" placeholder="Check-in time" />
        <input
          type="time"
          id="date"
          ref="cit"
          @change="timeChange($event, 'cit')"
        />
      </div>
      <div :class="['filter-option', {'active': error.checkOutTime && !inputDetail.checkOutTime}]" @click="showModelDate('cot')">
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
          @change="timeChange($event, 'cot')"
        />
      </div>
      <div class="book-btn" @click="BookingModelShow">
        <button>Book</button>
      </div>
    </div>
    <BookModel v-if="bookingModel" :checkIn="inputDetail"/>
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
      inputDetail:{},
      error:{},
      // checkInDate: null,
      // checkOutDate: null,
      // checkInTime: null,
      // checkOutTime: null,
    };
  },
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
  },
  methods: {
    dateChange(e, val) {
      const today = new Date('08-08-2022 14:48 UTC');
      console.log(today.toISOString())
      var getDate = convertDateToUTC(new Date(e.target.value));
      function convertDateToUTC(date) {
        return new Date(
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate()
        );
      }
      if (val == "cn") {
        this.inputDetail.checkInDate = getDate.toLocaleDateString("en-GB");
      }
      if (val == "co") {
        this.inputDetail.checkOutDate = getDate.toLocaleDateString("en-GB");
      }
    },
    timeChange(e, val) {
      if (val == "cit") {
        this.inputDetail.checkInTime = this.timeFormate(e.target.value);
      }
      if (val == "cot") {
        this.inputDetail.checkOutTime = this.timeFormate(e.target.value);
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
    BookingModelShow() {
      var { checkInDate, checkOutDate, checkInTime, checkOutTime } = this.inputDetail;
      if(!checkInDate){
       return this.error.checkInDate = true;
      }
      if(!checkOutDate){
       return this.error.checkOutDate = true;
      }
      if(!checkInTime){
       return this.error.checkInTime = true;
      }
      if(!checkOutTime){
       return this.error.checkOutTime = true;
      }
      this.bookingModel = !this.bookingModel;
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
  font-size: 24px;
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
  border:1px solid transparent;
}
.book-container .filter-option.active {
  border:1px solid red;
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
  padding: 20px 0;
}
.book-btn {
  margin: 30px;
}
.book-btn button {
  border: none;
  outline: none;
  padding: 15px 50px;
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
}
</style>
