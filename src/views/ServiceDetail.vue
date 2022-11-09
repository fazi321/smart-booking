<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>SERVICE BOOKINGS</h1>
      </div>
      <div class="detail-tabs">
        <div class="tabs">
          <p
            :class="{ active: tab == 'Upcoming' }"
            @click="selected('Upcoming')"
          >
            Upcoming
          </p>
          <p :class="{ active: tab == 'current' }" @click="selected('current')">
            Current
          </p>
          <p
            :class="{ active: tab == 'Completed' }"
            @click="selected('Completed')"
          >
            Completed
          </p>
          <p
            :class="{ active: tab == 'Cancelled' }"
            @click="selected('Cancelled')"
          >
            Cancelled
          </p>
        </div>
        <!-- inputs -->
        <section class="booking-search">
          <div class="primary">
            <div><input type="text" placeholder="Search here..." /></div>
            <div>
              <img src="../assets/images/searchI.svg" />
            </div>
          </div>
        </section>
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
            <!-- {{filteredData && filteredData[0] && filteredData[0].booking}} -->
            <tr v-for="(item, index) in filteredData" :key="index">
              <td>
                <div class="profile-image">
                  <img src="../assets/images/user-icon.svg" />
                </div>
              </td>
              <td>
                {{ item.user && item.user.firstName }}
              </td>
              <td>Lorem Ipsum</td>
              <td>{{ getDate(item.checkIn) }}</td>
              <td>{{ item.bookingTime }}</td>
              <td>{{ item.nights }}</td>
              <td>{{ item.totalPrice }}</td>
              <td>{{ item.user && item.user.phone }}</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow(item)">
                  <button>View</button>
                </div>
              </td>
            </tr>
          </table>
          <div class="bottom-container">
            <div>
              <p>
                Showing
                {{ pageSelected > 1 ? (pageSelected - 1) * 10 : pageSelected }}
                to {{ pageSelected * 10 }} of {{ total }} entries
              </p>
            </div>
            <div class="service-pagination">
              <paginate
                v-model="pageSelected"
                :page-range="3"
                :margin-pages="2"
                :page-count="pageCount"
                :click-handler="clickCallback"
                :prev-text="'<'"
                :next-text="'>'"
                :container-class="'pagination'"
                :page-class="'page-item'"
              ></paginate>
            </div>
          </div>
        </div>
      </div>
      <ServiceDetailModel v-if="serviceModel" :modelData="modelData" />
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
      dataCard: [],
      filteredData: [],
      tab: "Upcoming",
      //
      total: 0,
      pageSelected: 1,
      pageCount: 6,
      modelData: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getDate(val) {
      var d = new Date(val);
      return d.toLocaleDateString("en-GB");
    },
    async getData() {
      const { booking } = this.$route.query;
      console.log(booking);
      try {
        // var res = await this.$axios.get(
        //   `http://13.229.167.135:5000/api/v1/vender/service-booking-list/${booking}`
        // );
        // console.log(res.data, "-->");
        // this.dataCard = res.data.result;
        var res = {
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
                  checkIn: "2022-10-31T20:00:00.000Z",
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
                    firstName: "test Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                    firstName: "tes Doeee",
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
                  checkIn: "2022-10-31T20:00:00.000Z",
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
        this.total = res.totalBookings;
        this.dataCard = res.result;
        this.pageSelected = 1;
        this.clickCallback(1);
      } catch (error) {
        console.log(error);
      }
    },
    selected(val) {
      this.tab = val;
      this.pageSelected = 1;
      this.clickCallback(1);
    },
    clickCallback(num) {
      var copyFrom = num * 10 - 10;
      var copyTo = num * 10;
      var filtereByTabs = this.dataCard.filter((e) => {
        var val =
          this.tab.toLowerCase() != "upcoming"
            ? this.tab.toLowerCase()
            : "pending";
        return e.status == val;
      });
      this.pageCount = Math.ceil(filtereByTabs[0].booking.length / 10);
      this.total = filtereByTabs[0].booking.length;
      this.filteredData = filtereByTabs[0].booking.slice(copyFrom, copyTo);
    },
    ServiceModelShow(data) {
      this.modelData = data;
      this.serviceModel = !this.serviceModel;
    },
  },
};
</script>
<style scoped>
.service-booking {
  padding: 30px 0 15px 0;
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
/* // tabs */
.detail-tabs {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
}
.detail-tabs .tabs {
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 11px;
  opacity: 1;
  width: 35%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail-tabs .tabs p {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.4;
  font-size: 12px;
  padding: 15px 25px;
  cursor: pointer;
}
.detail-tabs .tabs .active {
  color: #000000;
  background-color: #febb12;
  border-radius: 12px;
  opacity: 1;
}
.detail-tabs .tabs p:hover,
.detail-tabs .tabs p:active {
  color: #000000;
  background-color: #febb12;
  border-radius: 12px;
  opacity: 1;
}
.booking-search {
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 11px;
  padding:10px 15px;
  margin: 0 20px;
  width: 28%;
}
.booking-search .primary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.booking-search .primary input {
  border: none;
  color: #a9a9a9;
  outline: none;
}
.booking-search .primary input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a9a9a9;
}
.booking-search .primary img {
  width: 20px;
  cursor:pointer;
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
