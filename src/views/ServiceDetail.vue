<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>SERVICE BOOKINGS</h1>
      </div>
      <div class="service-container">
        <h3>You can the service booking details here</h3>
        <div class="service-detail">
          <table>
            <tr>
              <th></th>
              <th>Customer name</th>
              <th>Booking ID</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Nights</th>
              <th>Total Price</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
            <tr v-for="(item , index) in dataCard.result" :key="index">
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>{{item.booking[0].user && item.booking[0].user.firstName}}</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <!-- <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow">
                  <button>View</button>
                </div>
              </td>
            </tr> -->
          </table>
          <div class="bottom-container">
            <div>
              <p>Showing 1 to 10 of 30 entries</p>
            </div>
            <div class="service-pagination">
              <paginate
                :page-range="3"
                :margin-pages="2"
                :page-count="3"
                :click-handler="clickCallback"
                :prev-text="'Previous'"
                :next-text="''"
                :container-class="'pagination'"
                :page-class="'page-item'"
              ></paginate>
            </div>
          </div>
        </div>
      </div>
      <ServiceDetailModel v-if="serviceModel" />
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import ServiceDetailModel from "@/components/models/serviceDetailModel.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "ServiceDetailView",
  components: {
    DefaultLayout,
    Paginate,
    ServiceDetailModel,
  },
  data() {
    return {
      serviceModel: false,
      dataCard: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { booking } = this.$route.query;
      console.log(booking);
      try {
        // var res = await this.$axios.get(
        //   `http://13.229.167.135:5000/api/v1/vender/service-booking-list/${booking}`
        // );
        // console.log(res.data, "-->");
        // this.dataCard = res.data;
        this.dataCard = {
          totalBookings: 5,
          result: [
            {
              status: "completed",
              total: 1,
              booking: [
                {
                  service: {
                    name: "63496ee6b82c79927ea7d80a",
                    image: "test image1",
                    vender: "63314b0d55462303bafc7cdf",
                  },
                  _id: "63611cf378a46e8be4126c8a",
                  moyasarPaymentId: "6c029cea-b5be-48d5-a1a8-235f335e4364",
                  user: null,
                  amount: 45232,
                  paymentMethod: "Online",
                  isPaid: true,
                  nights: 0,
                  totalPrice: 452320,
                  paidAt: "2022-11-01T13:19:47.727Z",
                  vender: "63314b0d55462303bafc7cdf",
                  bookingDates: [],
                  checkIn: "2022-10-31T19:00:00.000Z",
                  checkOut: "2022-11-10T19:00:00.000Z",
                  bookingTime: "6:19 PM",
                  createdAt: "2022-11-01T13:18:05.191Z",
                  status: "completed",
                  updatedAt: "2022-11-02T07:01:20.378Z",
                  __v: 1,
                  cancelRequest: true,
                  checkOutTime: "12:01 PM",
                },
              ],
            },
            {
              status: "cancelled",
              total: 2,
              booking: [
                {
                  service: {
                    name: "63496ee6b82c79927ea7d80a",
                    image: "test image1",
                    vender: "63314b0d55462303bafc7cdf",
                  },
                  _id: "6361202ef7e0eff0c793d188",
                  moyasarPaymentId: "fadade05-bb16-4719-aee1-55ee9f8009f8",
                  user: {
                    _id: "63314c0055462303bafc7ceb",
                    phone: 3338888888,
                    email: "johndoe3ewer@smartbookings.com",
                    host: true,
                    company: false,
                    role: "Vender",
                    otp: 6746,
                    verify: true,
                    status: "Accept",
                    block: false,
                    numberOfservices: 0,
                    __v: 0,
                    address: "133st, downtown london",
                    commId: "'22asdfadf3234kljslfjsl'",
                    firstName: "John Doeee",
                    lastName: "Jeneeee",
                    nationality: "Pakistanidd",
                    balance: 453077,
                    dob: "1996-08-21T07:00:00.000Z",
                    file: "hi",
                    deviceToken: null,
                    requestedAt: "2022-09-30T10:21:46.381Z",
                  },
                  amount: 45232,
                  paymentMethod: "Online",
                  isPaid: true,
                  nights: 0,
                  totalPrice: 452320,
                  paidAt: "2022-11-01T13:33:34.511Z",
                  vender: "63314b0d55462303bafc7cdf",
                  bookingDates: [],
                  checkIn: "2022-10-31T19:00:00.000Z",
                  checkOut: "2022-11-10T19:00:00.000Z",
                  bookingTime: "6:33 PM",
                  createdAt: "2022-11-01T13:31:00.532Z",
                  status: "cancelled",
                  updatedAt: "2022-11-01T13:34:31.927Z",
                  __v: 1,
                  cancelRequest: true,
                  refundType: "User cccount calance",
                },
                {
                  service: {
                    name: "63496ee6b82c79927ea7d80a",
                    image: "test image1",
                    vender: "63314b0d55462303bafc7cdf",
                  },
                  _id: "636121cfd9637489471513f0",
                  moyasarPaymentId: "a7c9620f-839b-490f-a3c5-481a09123d8a",
                  user: {
                    _id: "63314c0055462303bafc7ceb",
                    phone: 3338888888,
                    email: "johndoe3ewer@smartbookings.com",
                    host: true,
                    company: false,
                    role: "Vender",
                    otp: 6746,
                    verify: true,
                    status: "Accept",
                    block: false,
                    numberOfservices: 0,
                    __v: 0,
                    address: "133st, downtown london",
                    commId: "'22asdfadf3234kljslfjsl'",
                    firstName: "John Doeee",
                    lastName: "Jeneeee",
                    nationality: "Pakistanidd",
                    balance: 453077,
                    dob: "1996-08-21T07:00:00.000Z",
                    file: "hi",
                    deviceToken: null,
                    requestedAt: "2022-09-30T10:21:46.381Z",
                  },
                  amount: 45232,
                  paymentMethod: "Online",
                  isPaid: true,
                  nights: 0,
                  totalPrice: 452320,
                  paidAt: "2022-11-01T13:40:31.575Z",
                  vender: "63314b0d55462303bafc7cdf",
                  bookingDates: [],
                  checkIn: "2022-10-31T19:00:00.000Z",
                  checkOut: "2022-11-10T19:00:00.000Z",
                  bookingTime: "6:37 PM",
                  createdAt: "2022-11-01T13:39:26.917Z",
                  status: "cancelled",
                  updatedAt: "2022-11-01T13:41:14.515Z",
                  __v: 1,
                  cancelRequest: true,
                  refundType: "Direct bank transfer",
                },
              ],
            },
            {
              status: "pending",
              total: 1,
              booking: [
                {
                  service: {
                    name: "63496ee6b82c79927ea7d80a",
                    image: "test image1",
                    vender: "63314b0d55462303bafc7cdf",
                  },
                  _id: "636213be68ba6a4f8b7c6f5f",
                  moyasarPaymentId: "7a86660f-0063-4c26-af17-7da282b432e0",
                  user: {
                    _id: "63314c0055462303bafc7ceb",
                    phone: 3338888888,
                    email: "johndoe3ewer@smartbookings.com",
                    host: true,
                    company: false,
                    role: "Vender",
                    otp: 6746,
                    verify: true,
                    status: "Accept",
                    block: false,
                    numberOfservices: 0,
                    __v: 0,
                    address: "133st, downtown london",
                    commId: "'22asdfadf3234kljslfjsl'",
                    firstName: "John Doeee",
                    lastName: "Jeneeee",
                    nationality: "Pakistanidd",
                    balance: 453077,
                    dob: "1996-08-21T07:00:00.000Z",
                    file: "hi",
                    deviceToken: null,
                    requestedAt: "2022-09-30T10:21:46.381Z",
                  },
                  amount: 45232,
                  paymentMethod: "Online",
                  isPaid: true,
                  nights: 10,
                  totalPrice: 452320,
                  paidAt: "2022-11-02T06:52:46.629Z",
                  vender: "63314b0d55462303bafc7cdf",
                  bookingDates: [
                    "2022-10-31T19:00:00.000Z",
                    "2022-11-01T19:00:00.000Z",
                    "2022-11-02T19:00:00.000Z",
                    "2022-11-03T19:00:00.000Z",
                    "2022-11-04T19:00:00.000Z",
                    "2022-11-05T19:00:00.000Z",
                    "2022-11-06T19:00:00.000Z",
                    "2022-11-07T19:00:00.000Z",
                    "2022-11-08T19:00:00.000Z",
                    "2022-11-09T19:00:00.000Z",
                  ],
                  checkIn: "2022-10-31T19:00:00.000Z",
                  checkOut: "2022-11-10T19:00:00.000Z",
                  bookingTime: "11:52 AM",
                  createdAt: "2022-11-02T06:45:22.982Z",
                  status: "pending",
                  updatedAt: "2022-11-02T06:45:22.982Z",
                  __v: 0,
                },
              ],
            },
            {
              status: "current",
              total: 1,
              booking: [
                {
                  service: {
                    name: "63496ee6b82c79927ea7d80a",
                    image: "test image1",
                    vender: "63314b0d55462303bafc7cdf",
                  },
                  _id: "636217312be2f111c2eed985",
                  moyasarPaymentId: "a8a8d654-9ec9-4f09-964c-fd55fc02cfd8",
                  user: {
                    _id: "63314c0055462303bafc7ceb",
                    phone: 3338888888,
                    email: "johndoe3ewer@smartbookings.com",
                    host: true,
                    company: false,
                    role: "Vender",
                    otp: 6746,
                    verify: true,
                    status: "Accept",
                    block: false,
                    numberOfservices: 0,
                    __v: 0,
                    address: "133st, downtown london",
                    commId: "'22asdfadf3234kljslfjsl'",
                    firstName: "John Doeee",
                    lastName: "Jeneeee",
                    nationality: "Pakistanidd",
                    balance: 453077,
                    dob: "1996-08-21T07:00:00.000Z",
                    file: "hi",
                    deviceToken: null,
                    requestedAt: "2022-09-30T10:21:46.381Z",
                  },
                  amount: 45232,
                  paymentMethod: "Online",
                  isPaid: true,
                  nights: 3,
                  totalPrice: 452320,
                  paidAt: "2022-11-02T07:07:29.925Z",
                  vender: "63314b0d55462303bafc7cdf",
                  bookingDates: [
                    "2022-11-01T19:00:00.000Z",
                    "2022-11-02T19:00:00.000Z",
                    "2022-11-03T19:00:00.000Z",
                  ],
                  checkIn: "2022-11-01T19:00:00.000Z",
                  checkOut: "2022-11-04T19:00:00.000Z",
                  bookingTime: "12:06 PM",
                  createdAt: "2022-11-02T07:06:08.111Z",
                  status: "current",
                  updatedAt: "2022-11-02T07:07:48.916Z",
                  __v: 0,
                  checkOutTime: "12:07 PM",
                },
              ],
            },
          ],
        };
        this.total = this.dataCard.totalBookings;
        console.log(this.dataCard, "-==>");
      } catch (error) {
        console.log(error);
      }
    },
    ServiceModelShow() {
      this.serviceModel = !this.serviceModel;
    },
    clickCallback(num) {
      this.$refs.slider.slideTo(num);
    },
  },
};
</script>
<style scoped>
.service-booking {
  padding: 30px 0;
}
.service-booking h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.service-container h3 {
  text-align: left;
  letter-spacing: 0.5px;
  color: #231f20;
  opacity: 0.8;
  font-size: 16px;
  padding: 15px 0;
}
.service-detail {
  padding: 20px 0 40px 0;
}
.service-detail table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0px 0px 39px #00000012;
  border-radius: 17px;
  opacity: 1;
}

.service-detail table th {
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  padding: 15px;
}
.service-detail table td {
  padding: 15px;
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  font-weight: normal;
  color: #9a9a9a;
  /* opacity: 0.7; */
  font-size: 12px;
}
.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.profile-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.view-btn button {
  border: none;
  outline: none;
  border-radius: 7px;
  opacity: 1;
  background: #fc9501;
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  font-size: 12px;
  padding: 10px 50px;
  cursor: pointer;
}
.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom-container div p {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 12px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .service-detail {
    overflow: scroll;
  }
  .service-container {
    margin: 0 10px;
  }
}
</style>
