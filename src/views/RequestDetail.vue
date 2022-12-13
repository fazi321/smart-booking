<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>Booking Requests</h1>
      </div>
      <div class="detail-tabs">
        <!-- <div class="tabs">
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
        </div> -->
        <!-- inputs -->
        <section class="booking-search">
          <form @submit="submitSearch">
            <div class="primary">
              <div>
                <input
                  type="text"
                  v-model="search"
                  placeholder="Search here..."
                />
              </div>
              <div>
                <img
                  type="submit"
                  @click="submitSearch"
                  src="../assets/images/searchI.svg"
                />
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="service-container">
        <!-- <h3>You can the service booking details here</h3> -->
        <div class="service-detail">
          <table>
            <tr>
              <th></th>
              <th>Customer name</th>
              <th>Service name</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <!-- <th>Nights</th> -->
              <th>Price</th>
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
                {{ item[0]?.user?.firstName }}
              </td>
              <td>{{ item[0]?.service?.name?.description?.nameInEnglish }}</td>
              <td>{{ getDate(item[0].checkIn) }}</td>
              <td>{{ item[0].bookingTime }}</td>
              <!-- <td>{{ item.nights }}</td> -->
              <td>{{ item[0]?.totalPrice }}</td>
              <td>{{ item[0]?.user && item[0]?.user?.phone }}</td>
              <td>
                <div class="view-btn" @click="ServiceModelShow(item)">
                  <button>View</button>
                </div>
              </td>
            </tr>
          </table>
          <div
            class="bottom-container"
            v-if="filteredData && filteredData.length"
          >
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
      <RequestBookingModel
        v-if="serviceModel"
        :modelData="modelData[0]"
        @check="checked"
      />
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import RequestBookingModel from "@/components/models/RequestBookingModel.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "ServiceDetailView",
  components: {
    DefaultLayout,
    Paginate,
    RequestBookingModel,
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
      //
      search: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    submitSearch(e) {
      e.preventDefault();
      this.pageSelected = 1;
      this.clickCallback(1);
    },
    getDate(val) {
      var d = new Date(val);
      return d.toLocaleDateString("en-GB");
    },
    async getData() {
      const { booking } = this.$route.query;
      try {
        var res = await this.$axios.get(
          `vender/service-booking-requests-list/${booking}`
        );
        this.dataCard = res.data;
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
      var filtereByTabs = this.dataCard;
      if (filtereByTabs) {
        if (!this.search) {
          var dataNew = [];
          filtereByTabs.filter((e) => {
            if (e.status == "waiting") {
              dataNew.push(e.booking);
            }
          });
          this.pageCount = Math.ceil(dataNew.length / 10);
          this.total = dataNew.length;
          this.filteredData = dataNew.slice(copyFrom, copyTo);
        } else {
          var search = filtereByTabs[0].booking.filter((e) => {
            return (
              e.user &&
              e.user.firstName
                .toLowerCase()
                .startsWith(this.search.toLowerCase())
            );
          });
          this.pageCount = Math.ceil(search.length / 10);
          this.total = search.length;

          this.filteredData = search.slice(copyFrom, copyTo);
        }
      } else {
        this.filteredData = [];
      }
    },
    ServiceModelShow(data) {
      this.modelData = data;
      this.serviceModel = !this.serviceModel;
    },
    //
    checked() {
      this.getData();
      this.serviceModel = false;
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
  padding: 0 0 40px 0;
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
  background: #febb12;
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
  padding: 10px 15px;
  margin: 0 20px;
  width: 28%;
}
.booking-search form {
  width: 100%;
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
.booking-search .primary input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a9a9a9;
}
.booking-search .primary img {
  width: 20px;
  cursor: pointer;
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
