<template>
  <section class="search">
    <div :class="['primary-search', { shadowFull: $route.path == '/' }]">
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/locationsearch.svg" alt="search" />
          </div>
          <div>
            <span>Location</span>
          </div>
        </div>
        <div class="location" id="input">
          <input
            type="text"
            :placeholder="'City'"
            v-model="search.city"
            @focus="openDropdown"
          />
          <div class="dropdown" v-if="dropdownCities">
            <div class="city-search">
              <input
                type="text"
                v-model="searchCities"
                placeholder="Search Location"
              />
            </div>
            <div class="city-list" v-if="!searchCities">
              <ul>
                <li class="head">Cities</li>
                <li
                  v-for="(city, c) in cities"
                  @click="selectedCity(city)"
                  :key="c"
                >
                  {{ city }}
                </li>
              </ul>
            </div>
            <div class="city-list" v-else>
              <ul>
                <li class="head">Cities</li>
                <li
                  v-for="(city, s) in citiesFilter"
                  @click="selectedCity(city)"
                  :key="s"
                >
                  {{ city }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- block -->
      <!-- <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/house.svg" alt="search" />
          </div>
          <div>
            <span>Type</span>
          </div>
        </div>
        <div>
          <input type="text" :placeholder="'Farms'" v-model="search.type" />
        </div>
      </div> -->
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/bed.svg" alt="search" />
          </div>
          <div>
            <span>Rooms</span>
          </div>
        </div>
        <div>
          <input type="number" :placeholder="'1'" v-model="search.rooms" />
        </div>
      </div>
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/checkin.svg" alt="search" />
          </div>
          <div>
            <span>Check-in</span>
          </div>
        </div>
        <div>
          <input
            type="date"
            v-model="search.checkIn"
          />
        </div>
      </div>
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/checkin.svg" alt="search" />
          </div>
          <div>
            <span>Check-out</span>
          </div>
        </div>
        <div>
          <input
            type="date"
            placeholder="dd-mm-yyyy"
            v-model="search.checkOut"
          />
        </div>
      </div>
      <!-- block -->
      <div class="search-block search-btn" @click="showModel">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/icon-search.svg" alt="search" />
          </div>
          <div>
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
    <SearchModel :model="searchModel" :city="search.city" @search="searchNow" />
  </section>
</template>

<script>
import SearchModel from "./models/searchModel.vue";

export default {
  data() {
    return {
      search: {},
      searchModel: false,
      dropdownCities: false,
      // dropdown
      searchCities: "",
      cities: ["test", "demo"],
    };
  },
  computed: {
    citiesFilter() {
      var searchCities = this.cities;
      return searchCities.filter((city) =>
        city.toLowerCase().startsWith(this.searchCities.toLowerCase())
      );
    },
  },
  components: {
    SearchModel,
  },
  methods: {
    openDropdown() {
      this.dropdownCities = true;
    },
    selectedCity(city){
      this.search.city = city;
      console.log(city)
    },
    // formateDate(val) {
    //   const index = val.indexOf("-");
    //   const last = val.lastIndexOf("-");
    //   let year = val.substring(0, index);
    //   let month = val.substring(index + 1, last);
    //   let day = val.substring(last + 1);
    //   var myDate = day + "/" + month + "/" + year;
    //   return myDate;
    // },
    searchNow(id) {
      var data = { ...this.search, ...id };
      // if (data.checkIn) {
      //   data.checkIn = this.formateDate(data.checkIn);
      // }
      // if (data.checkOut) {
      //   data.checkOut = this.formateDate(data.checkOut);
      // }
      if (data.rooms) {
        data.rooms = data.rooms.toString();
      }
      var url = this.constructURL("/", "search", data) + "page=1";
      this.$router.push(url);
    },
    constructURL(url, category, fl) {
      if (category) url += category + "?";
      Object.keys(fl).forEach((e) => {
        if (fl[e] && fl[e] !== "undefined" && fl[e].length > 0)
          url += `${e}=${fl[e]}&`;
      });
      return url;
    },
    showModel() {
      this.searchModel = !this.searchModel;
    },
  },
  mounted() {
    const clickAway = () => {
      this.dropdownCities = false;
    };
    var el = document.getElementById("input");
    document.addEventListener("click", function (event) {
      if (el) {
        var isClickInsideElement = el.contains(event.target);
        if (!isClickInsideElement) {
          clickAway();
        }
      }
    });

    var route = this.$route;
    // console.log(route);
    if (route.name == "search") {
      var { city, checkIn, checkOut, rooms } = route.query;
      this.search.city = city;
      this.search.checkIn = checkIn;
      this.search.checkOut = checkOut;
      this.search.rooms = rooms;
    }
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
}

.search .primary-search {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 6px 2px #cfcfcf6b;
  border-radius: 5px;
  padding-left: 18px;
  position: relative;
  background: #fff;
}
.shadowFull {
  box-shadow: 0px 2px 4px 0px #cfcfcf6b !important;
}
.search .head-category {
  display: flex;
  align-items: center;
  min-height: 23px;
}
.search .head-category span {
  color: #c5c5c5;
  font-size: 12px;
}
.search .head-category .img {
  width: 16px;
  margin-right: 10px;
}
.search-block .location input {
  margin-top: 17px;
}
.search-block input {
  border: none;
  outline: none;
  color: gray;
  font-weight: bold;
  margin-top: 20px;
  width: 100%;
}
.search-block input::placeholder {
  color: gray;
  font-weight: bold;
}
.search-block {
  width: 100px;
  padding: 20px;
}
.search-btn {
  background: #0e4763;
  /* box-shadow: 0px 0px 6px 2px #cfcfcf6b; */
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.search-btn span {
  font-size: 16px !important;
}
.search-btn .img {
  width: 18px !important;
}
.dropdown {
  position: absolute;
  background: #fff;
  padding: 0;
  z-index: 2;
  border: 1px solid #eee;
  min-width: 218px;
  left: 7px;
  top: 88%;
  padding: 12px 5px;
  border-radius: 5px;
}
.city-list ul li.head {
  font-weight: bold;
  font-size: 14px;
  color: #0e4763;
}
.city-list ul li {
  text-align: left;
  margin: 8px 3px;
}
.dropdown .city-search input {
  margin-top: unset;
  padding: 7px 5px;
  border-radius: 25px;
  border: 1px solid #0e4763;
  width: 95%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .search .primary-search {
    flex-wrap: wrap;
    width: 100% !important;
    padding-left: 0px;
    margin: 20px 10px;
  }
  .search-block {
    width: 42% !important;
    padding: 20px 10px;
  }
  .search-btn {
    width: 100% !important;
  }
  .search-block input {
    width: 65%;
    margin-top: 10px !important;
  }
}
</style>
