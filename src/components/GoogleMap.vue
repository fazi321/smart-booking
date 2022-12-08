<template>
  <div class="location-set">
    <GMapMap
      ref="myMap"
      :center="center"
      :zoom="zoom"
      :onClick="clicked"
      :disableDefaultUI="true"
      :options="mapOptions"
      @center_changed="updateCenter"
      map-type-id="terrain"
      style="width: 100%; height: 20rem"
    >
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="center = m.position"
      />
      <!-- :icon="'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'" -->
      <!-- <GMapAutocomplete
        class="auto-input"
        placeholder="e.g: Bahria Town"
        @place_changed="setPlace"
      >
      </GMapAutocomplete> -->
      <!-- <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster> -->
    </GMapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      address: {},
      map: null,
      zoom: 7,
      center: { lat: 24.9582, lng: 46.7008 },
      currentRepo: {
        lat: "",
        lng: "",
      },
      mapOptions: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        clickableIcons: false,
      },
      markers: [
        {
          position: {
            lat: 24.7135517,
            lng: 46.6752957,
          },
        },
      ],
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    clicked() {
      this.markers[0].position.lat = this.currentRepo.lat;
      this.markers[0].position.lng = this.currentRepo.lng;
    },
    showPosition(position) {
      (this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }),
        // this.$emit("latlng", this.center);
        // mark
        (this.markers[0].position.lat = position.coords.latitude);
      this.markers[0].position.lng = position.coords.longitude;
      this.getStreetAddressFrom(
        position.coords.latitude,
        position.coords.longitude
      );
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    async getStreetAddressFrom(lat, lng) {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyB0BScCFIxNxzp_Ao7b4iwhaRx5ZnKvGCE`
        );
        const data = await response.json();
        const address = data.results[4];
        const addressCity = data.results[0];
        this.address.address = address.formatted_address;
        this.address.city = addressCity.address_components[3].long_name;
        this.currentRepo = {
          lat: lat,
          lng: lng,
        };
        this.currentRepo.address = this.address;
        this.markers[0].position.lat = lat;
        this.markers[0].position.lng = lng;
        this.$emit("latlng", this.currentRepo);
      } catch (error) {
        console.log(error.message);
      }
    },
    updateCenter(latLng) {
      this.currentRepo = {
        lat: latLng.lat(),
        lng: latLng.lng(),
      };
      this.getStreetAddressFrom(latLng.lat(), latLng.lng());
      this.currentRepo.address = this.address;
      this.markers[0].position.lat = latLng.lat();
      this.markers[0].position.lng = latLng.lng();
      this.$emit("latlng", this.currentRepo);
    },
    setPlace(place) {
      this.zoom = 8;
      this.center.lat = place.geometry.location.lat();
      this.center.lng = place.geometry.location.lng();
      this.currentRepo = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
    },
    // submit() {
    //   if (!this.currentRepo.lat && !this.currentRepo.lng) return;
    //   this.$emit("latlng", this.currentRepo);
    // },
  },
};
</script>

<style>
.location-set {
  position: relative;
}
.location-set .auto-input {
  position: absolute;
  top: 10px;
  padding: 10px;
  left: 20%;
  min-width: 274px;
  border: none;
  font-size: 16px;
  outline: none;
}
.location-set .submit-btn {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.location-set .submit-btn button {
  padding: 16px 0px;
  color: #000;
  border-radius: 40px;
  background-image: linear-gradient(90deg, #dbe9df, #99c7a5);
  font-size: 14px;
  min-width: 331px;
}
.location-set .vue-map {
  height: 14rem !important;
  border-radius: 20px !important;
}
</style>
