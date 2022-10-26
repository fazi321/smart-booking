<template>
  <section class="form-book">
    <div class="book-container">
      <section class="detail-container">
        <div class="content-head">
          <h1>Booking Details</h1>
        </div>
        <div class="contianer-list">
          <ul>
            <li>
              <span>Name</span
              ><span>{{ detail.service?.name.description.nameInEnglish }}</span>
            </li>
            <li>
              <span>Location</span
              ><span>{{ detail.service?.name.address.address }}</span>
            </li>
            <li><span>Booking ID</span><span>54321</span></li>
            <li>
              <span>Nights</span><span>{{ detail.nights }}</span>
            </li>
            <li><span>Room</span><span>Lorem Ipsum</span></li>
            <li>
              <span>Check-In</span
              ><span>{{ fromateData(detail.checkIn) }}</span>
            </li>
            <li>
              <span>Check-Out</span
              ><span>{{ fromateData(detail.checkOut) }}</span>
            </li>
          </ul>
        </div>
      </section>
      <div class="heading" v-if="storeState && storeState.price">
        <h6>SAR {{ storeState && storeState.price.dayPrice }}</h6>
        <p>Per Night</p>
      </div>
      <section class="book-btn-section">
        <router-link to="/messages" class="image-container">
          <img src="../assets/images/chaticon.svg" />
        </router-link>
        <div class="book-btn" @click="bookingCancel">
          <button>Cancel Booking</button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: ["detail"],
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
    user: function () {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    bookingCancel() {
      const imagePath = require("../assets/images/cancelicon.png");
      this.$swal({
        title: "Cancel Booking?",
        text: "Are you sure you want to cancel the booking?",
        imageUrl: imagePath,
        imageWidth: 100,
        imageHeight: 100,
        showCancelButton: true,
        confirmButtonColor: "#FEBB12",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.cancelConfirmed(this.$route.params.id);
        }
      });
    },
    async cancelConfirmed(id) {
      try {
        var res = await this.$axios.delete(`booking/cancel/${id}`);
        if (res) {
          const imagePath = require("../assets/images/icontick.png");
          this.$swal({
            title: "Booking Cancelled",
            text: "Your booking has been cancelled successfully.",
            imageUrl: imagePath,
            imageWidth: 100,
            imageHeight: 100,
            showCancelButton: false,
            confirmButtonColor: "#FEBB12",
            confirmButtonText: "Done",
            reverseButtons: true,
          });
        }
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Some Thing Went Wrong!",
          showConfirmButton: false,
          timer: 3000,
        });
        console.log(error);
      }
    },
    fromateData(val) {
      const date = new Date(val);
      return date.toLocaleDateString("en-GB");
    },
  },
};
</script>

<style scoped>
.detail-container .content-head {
  text-align: center;
  color: #000000;
}
.book-btn-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contianer-list ul li {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #000000;
  padding: 15px 0px;
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
  padding: 30px 30px;
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
@media (max-width: 479px) and (min-width: 320px) {
}
</style>
