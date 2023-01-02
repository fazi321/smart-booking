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
        <div class="head">Service Information</div>
        <div>
          <p>Service Name</p>
          <p>{{ modelData?.service?.vender?.firstName }} {{ modelData?.service?.vender?.lastName }}</p>
        </div>
        <div>
          <p>Service ID</p>
          <p>{{modelData._id}}</p>
        </div>
        <div>
          <p>Check in Date</p>
          <p>{{ getDate(modelData.checkIn) }}</p>
        </div>
        <div>
          <p>Check in Time</p>
          <!-- <p>11:00 AM</p> -->
          <p>{{ getTime(modelData.checkIn) }}</p>
        </div>
        <div>
          <p>Check Out Date</p>
          <p>{{ getDate(modelData.checkOut) }}</p>
        </div>
        <div>
          <p>Check Out Time</p>
          <!-- <p>12:00 PM</p> -->
          <p>{{ getTime(modelData.checkOut) }}</p>
        </div>
        <div>
          <p>Total Price</p>
          <p>SAR {{ modelData.totalPrice }}</p>
        </div>
        <div class="head">Customer Information</div>
        <div>
          <p>Service Name</p>
          <p>{{modelData?.service?.name?.description?.nameInEnglish}}</p>
        </div>
        <div>
          <p>Service ID</p>
          <p>{{modelData._id}}</p>
        </div>
        <div>
          <p>Check in Date</p>
          <p>{{ getDate(modelData.checkIn) }}</p>
        </div>
      </div>
      <div class="btn-container">
        <button
          class="btn transparent-btn"
          @click="approveModel('reject')"
          :disabled="loadingR"
        >
          {{ !loadingR ? "Reject" : "loading..." }}
        </button>
        <button
          class="btn yellow-btn"
          @click="approveModel('approve')"
          :disabled="loading"
        >
          {{ !loading ? "Approve" : "loading..." }}
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
      loadingR: false,
    };
  },
  methods: {
    approveModel(model) {
      const imagePath = require("../../assets/images/cancelicon.png");
      const imageTick = require("../../assets/images/icontick.png");
      this.$swal({
        title: `${model == "approve" ? "Approve?" : "Reject?"}`,
        text: `Are you sure you want to ${
          model == "approve" ? "Approve?" : "Reject?"
        }`,
        imageUrl: model == "approve" ? imageTick : imagePath,
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
          if (model == "approve") {
            this.confirmedApproved();
          } else if (model == "reject") {
            this.confirmedReject();
          }
        }
      });
    },
    async confirmedApproved() {
      var id = this.modelData?._id
      this.loading = true;
      try {
        var result = await this.$axios.get(
          `vender/service-booking-request/${id}?type=Approve`
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
    async confirmedReject() {
      this.loadingR = true;
      var id = this.modelData?._id
      try {
        var result = await this.$axios.get(
          `vender/service-booking-request/${id}?type=reject`
        );
        if (result) {
          this.$swal({
            icon: "success",
            title: "success!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit("check");
          this.loadingR = false;
        }
      } catch (error) {
        this.loadingR = false;
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
  margin-top: 10px;
}
.service-details .head {
  font-weight: bold;
  color: #000000;
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
  padding: 0 26px;
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.btn-container .btn {
  border-radius: 50px;
  min-width: 210px;
  font-weight: bold;
}
.transparent-btn {
  background: #fff;
  color: #04304b;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
  border: 1px solid #04304b1f;
}
.yellow-btn {
  border: 1px solid #febb12;
  background: #febb12;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
  color: #04304b;
}
.gray-btn {
  background: #d4d4d4;
}
/* responsive */
@media (max-width: 700px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>
