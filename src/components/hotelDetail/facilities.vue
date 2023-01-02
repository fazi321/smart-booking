<template>
  <section :class="['facilities-container',{'set-lang': $t('lang') == 'ar'}]" >
    <h5>{{ $t("detailPage.amenities") }}</h5>
    <!-- Sports -->
    <div class="facility-icons" v-if="sportsCheck">
      <h6>{{ $t("AddService.sports") }}</h6>
      <div class="facility-card">
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.gym"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/fitness.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.gym") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.billard"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/billiards.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.billiard") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.tennisCourt
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/court.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.tennisCourt") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState &&
            storeState.leisure &&
            storeState.leisure.airHockeyTable
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/hockey.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.airHockey") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.soccerField
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/football-field.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.soccerField") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.trampoline
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/trampoline.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.trampoline") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.volleyBall
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/beach-volleyball.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.volleyBall") }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Sports -->
    <!-- Leisure -->
    <div class="facility-icons" v-if="Leisure">
      <h6>{{ $t("AddService.leisure") }}</h6>
      <div class="facility-card">
        <div
          class="icon-card"
          v-if="
            storeState &&
            storeState.swimmingWithWaterGames &&
            storeState.leisure.swimmingWithWaterGames
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/swimming-pool.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.swimmingWithWaterGames") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.steamBath
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/hot-bath.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.steamBath") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.airSlider
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/airSlider.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.airSlider") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.sandGames
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/sandGames.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.sandGames") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.waterGames
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/waterGames.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.waterGames") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState &&
            storeState.leisure &&
            storeState.leisure.indoorSwimmingPool
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/swimming-pool.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.inDoorSwimmingPool") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState &&
            storeState.leisure &&
            storeState.leisure.outdoorSwimmingPool
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/swimming-pool.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.outDoorSwimmingPool") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState &&
            storeState.leisure &&
            storeState.leisure.swimmingPoolWithHeat
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/heater.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.swimmingPoolHeater") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.hairStylist
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/hairstylist.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.hairStylist") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.playground
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/playground.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.playground") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.spa"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/hot-bath.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.spa") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.hotTub"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/hotTub.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.hotTub") }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Amenities -->
    <div class="facility-icons" v-if="Amenities">
      <h6>{{ $t("AddService.homeAmenities") }}</h6>
      <div class="facility-card">
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.accessInHours
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/24-hours.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.24-HourRequest") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState &&
            storeState.leisure &&
            storeState.leisure.weelChaireAccess
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/wheelchair.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.wheelChair") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState &&
            storeState.leisure &&
            storeState.leisure.privateEntrance
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/entrance.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.privateEntrance") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.doorman"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/doorman.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.doorman") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.parking"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/parking.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.parking") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.elevator"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/elevator.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.elevator") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.saftyBox"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/saftyBox.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.saftyBox") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState &&
            storeState.leisure &&
            storeState.leisure.airConditioning
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/air-conditioner.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.conditioning") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.tv"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/tv.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.tv") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.wifi"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/wifi.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.wifi") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.speakers"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/speakers.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.speakers") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="storeState && storeState.leisure && storeState.leisure.stage"
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/stage.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.stage") }}</p>
          </div>
        </div>
        <div
          class="icon-card"
          v-if="
            storeState && storeState.leisure && storeState.leisure.laserLights
          "
        >
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/laser.png" alt />
              </div>
            </div>
            <p>{{ $t("AddService.laserLights") }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Amenities -->
  </section>
</template>

<script>
export default {
  name: "DetailFacilities",
  computed: {
    storeState: function () {
      return this.$store.state.details.details;
    },
    sportsCheck: function () {
      if (
        (this.storeState.leisure && this.storeState.leisure.gym) ||
        (this.storeState.leisure && this.storeState.leisure.billard) ||
        (this.storeState.leisure && this.storeState.leisure.tennisCourt) ||
        (this.storeState.leisure && this.storeState.leisure.soccerField) ||
        (this.storeState.leisure && this.storeState.leisure.trampoline) ||
        (this.storeState.leisure && this.storeState.leisure.volleyBall) ||
        (this.storeState.leisure && this.storeState.leisure.airHockeyTable)
      ) {
        return true;
      } else {
        return false;
      }
    },
    Leisure: function () {
      if (
        (this.storeState.leisure && this.storeState.leisure.steamBath) ||
        (this.storeState.leisure &&
          this.storeState.leisure.indoorSwimmingPool) ||
        (this.storeState.leisure &&
          this.storeState.leisure.outdoorSwimmingPool) ||
        (this.storeState.leisure && this.storeState.leisure.hairStylist) ||
        (this.storeState.leisure && this.storeState.leisure.airSlider) ||
        (this.storeState.leisure && this.storeState.leisure.sandGames) ||
        (this.storeState.leisure && this.storeState.leisure.waterGames) ||
        (this.storeState.leisure &&
          this.storeState.leisure.swimmingPoolWithHeat) ||
        (this.storeState.leisure && this.storeState.leisure.playground) ||
        (this.storeState.leisure && this.storeState.leisure.spa) ||
        (this.storeState.leisure && this.storeState.leisure.hotTub) ||
        (this.storeState.swimmingWithWaterGames &&
          this.storeState.leisure.swimmingWithWaterGames)
      ) {
        return true;
      } else {
        return false;
      }
    },
    Amenities: function () {
      if (
        (this.storeState.leisure && this.storeState.leisure.weelChaireAccess) ||
        (this.storeState.leisure && this.storeState.leisure.privateEntrance) ||
        (this.storeState.leisure && this.storeState.leisure.doorman) ||
        (this.storeState.leisure && this.storeState.leisure.parking) ||
        (this.storeState.leisure && this.storeState.leisure.elevator) ||
        (this.storeState.leisure && this.storeState.leisure.saftyBox) ||
        (this.storeState.leisure && this.storeState.leisure.tv) ||
        (this.storeState.leisure && this.storeState.leisure.wifi) ||
        (this.storeState.leisure && this.storeState.leisure.speakers) ||
        (this.storeState.leisure && this.storeState.leisure.stage) ||
        (this.storeState.leisure && this.storeState.leisure.accessInHours) ||
        (this.storeState.leisure && this.storeState.leisure.laserLights)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.facilities-container {
  padding: 20px 0;
}
.facilities-container h5 {
  font-size: 18px;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  padding-bottom: 50px;
}
.facility-icons {
  padding: 0px 0 50px 0;
}
.facility-icons h6 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 12px;
}
.facility-card {
  display: flex;
  padding-top: 30px;
  flex-wrap: wrap;
}
.facility-card .icon-card {
  width: 105px;
  display: flex;
  justify-content: space-between;

  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.facility-card .icon-card > div {
  /* width: 90px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.facility-card .icon-card .icon-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #00000012;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.facility-card .icon-card .icon-img div {
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.facility-card .icon-card .icon-img img {
  width: 100%;
  height: 100%;
}
.facility-card .icon-card p {
  font-size: 14px;
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  padding: 10px 0;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* white-space: nowrap; */
}
.set-lang .facilities-container h5,.set-lang .facility-icons h6{
  text-align:right;
}
@media (max-width: 700px) and (min-width: 320px) {
}
</style>
