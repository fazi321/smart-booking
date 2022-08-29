<template>
  <div class="location-set">
    <GMapMap
      :center="center"
      :zoom="zoom"
      :disableDefaultUI="true"
      :options="mapOptions"
      map-type-id="terrain"
      style="width: 100%; height: 20rem"
    >
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      zoom: 6,
      center: { lat: 24.9582, lng: 46.7008 },
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
          id: "4",
          position: {
            lat: 24.9582,
            lng: 46.7008,
          },
        },
      ],
    };
  },
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
  },
  mounted() {
    var loc =
      this.storeState &&
      this.storeState.location &&
      this.storeState.location.coordinates;
    if (loc) {
      this.center.lat = loc[0];
      this.center.lng = loc[1];
      // mark
      this.markers[0].position.lat = loc[0];
      this.markers[0].position.lng = loc[1];
    }
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
