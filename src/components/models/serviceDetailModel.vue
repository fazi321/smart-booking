<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Details</h2>
      </div>
      <div class="service-details">
        <div>
          <p>Customer Name</p>
          <p>{{ modelData.user && modelData.user.firstName }}</p>
        </div>
        <div>
          <p>Booking ID</p>
          <p>{{modelData.bookingId}}</p>
        </div>
        <div>
          <p>Customer ID</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Vendor ID</p>
          <p>{{modelData.user && modelData.user.userId}}</p>
        </div>
        <div>
          <p>Booking Date</p>
          <p>{{ getDate(modelData.checkIn) }}</p>
        </div>
        <div>
          <p>Booking Time</p>
          <p>{{ modelData.bookingTime }}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{{ modelData.user && modelData.user.email }}</p>
        </div>
        <div>
          <p>Mobile Number</p>
          <p>{{ modelData.user && modelData.user.phone }}</p>
        </div>
        <div>
          <p>Service Name</p>
          <p>{{ modelData.service && modelData.service.name }}</p>
        </div>
        <div>
          <p>Location</p>
          <p>{{modelData.user && modelData.user.address}}</p>
        </div>
        <div>
          <p>Nights</p>
          <p>{{ modelData.nights }}</p>
        </div>
        <div>
          <p>Check-in Date</p>
          <p>{{ getDate(modelData.checkIn) }}</p>
        </div>
        <div>
          <p>Check-out Date</p>
          <p>{{ getDate(modelData.checkOut) }}</p>
        </div>
        <div>
          <p>Check-in Time</p>
          <!-- <p>11:00 AM</p> -->
          <p>{{ getTime(modelData.checkIn) }}</p>
        </div>
        <div>
          <p>Check-out Time</p>
          <!-- <p>12:00 PM</p> -->
          <p>{{ getTime(modelData.checkOut) }}</p>
        </div>
        <div>
          <p>Total Price</p>
          <p>SAR {{ modelData.totalPrice }}</p>
        </div>
      </div>
      <div class="btn-container">
        <button
          class="btn yellow-btn"
          v-if="modelData.status == 'pending'"
          @click="modelOpen('checkin')"
          :disabled="loading"
        >
          {{ !loading ? "Check In" : "Loading..." }}
        </button>
        <button
          class="btn gray-btn"
          @click="modelOpen('checkout')"
          v-if="modelData.status == 'current'"
          :disabled="loading"
        >
          {{ !loading ? "Check Out" : "Loading..." }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceDetailModel",
  props: ["modelData"],
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    modelOpen(model) {
      const imagePath = require("../../assets/images/cancelicon.png");
      this.$swal({
        title: `${model == "checkin" ? "Check In?" : "Check Out?"}`,
        text: `Are you sure you want to ${
          model == "checkin" ? "Check in" : "Check out"
        } the user?`,
        imageUrl: imagePath,
        imageWidth: 100,
        imageHeight: 100,
        showCancelButton: true,
        confirmButtonColor: "#FEBB12",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
      }).then((res) => {
        if (res.isConfirmed) {
          if (model == "checkin") {
            this.confirmedCheckIn();
          } else if (model == "checkout") {
            this.confirmedCheckOut();
          }
        }
      });
    },
    async confirmedCheckIn() {
      this.loading = true;
      try {
        var result = await this.$axios.get(
          `booking/checkin/${this.modelData._id}`
        );
        if (result) {
          this.$swal({
            icon: "success",
            title: "success!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit("check");
          this.loading = false;
        }
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async confirmedCheckOut() {
      this.loading = true;
      try {
        var result = await this.$axios.get(
          `booking/checkout/${this.modelData._id}`
        );
        if (result) {
          this.$swal({
            icon: "success",
            title: "success!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit("check");
          this.loading = false;
        }
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    getDate(val) {
      var d = new Date(val);
      return d.toLocaleDateString("en-GB");
    },
    getTime(val) {
      var d = new Date(val);
      return d.toLocaleTimeString("en-GB");
    },
    closeSlide() {
      this.$parent.$parent.serviceModel = false;
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
  z-index: 99;
}
.primary-login {
  width: 623px;
  background: #fff;
  /* overflow: scroll;
  height: 550px; */
  padding: 25px;
  border-radius: 20px;
  position: relative;
}
.primary-login::-webkit-scrollbar {
  display: none;
}
.primary-login {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.close-icon {
  cursor: pointer;
  top: 15px;
  position: absolute;
  right: 20px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 99;
}
.service-heading h2 {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 20px;
}
.service-details {
  padding: 25px;
  overflow-y: scroll;
  height: 450px;
  margin-top: 25px;
}
.service-details div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.service-details div p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 14px;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn-container .btn {
  border-radius: 50px;
  min-width: 210px;
  border: none;
  font-weight: bold;
}
.yellow-btn {
  background: #febb12;
}
.gray-btn {
  background: #d4d4d4;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>
