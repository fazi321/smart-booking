<template>
  <section class="card-main">
    <div class="wish" @click="deleteItem(items._id)">
      <img src="../../assets/images/delete.svg" />
    </div>
    <router-link :to="`services/${items._id}`" class="filter-card">
      <div class="image" v-if="items && items.description">
        <img
          :src="items.description.images[0]"
          v-if="checkLink(items.description.images[0])"
        />
        <img src="../../assets/images/hotel-img.svg" v-else />
      </div>
      <div class="card-detail">
        <div class="heading">
          <h5>
            {{ items && items.description && items.description.nameInEnglish }}
          </h5>
        </div>
        <p>The ulitimate 5 star hotel</p>
        <p>{{ items && items.address && items.address.city }}</p>
        <p>
          <span
           v-if="items && items.roomsGuest"
            >{{
              items && items.roomsGuest && items.roomsGuest.numRooms
            }}
            Rooms</span
          >
          <span
           v-if="items && items.roomsGuest"
            >{{
              items && items.roomsGuest && items.roomsGuest.bathrooms
            }}
            Bathrooms</span
          >
          <!-- unit guest -->
           <span
           v-if="items && items.unitsAndGuest"
            >{{
              items && items.unitsAndGuest && items.unitsAndGuest.numberUnits
            }}
            Rooms </span
          >
          <span
           v-if="items && items.unitsAndGuest"
            >{{
              items && items.unitsAndGuest && items.unitsAndGuest.bathrooms
            }}
             Bathrooms</span
          >
        </p>
        <div class="sar">
          <h6>SAR {{ items && items.price && items.price.dayPrice }}</h6>
          <p>{{$t('detailPage.perNight')}}</p>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "FilterCard",
  props: ["items"],
  methods: {
    checkLink(isLink) {
      if (
        new RegExp(
          "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
        ).test(isLink)
      ) {
        return true;
      } else {
        return false;
      }
    },
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.filter-card {
  display: flex;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 20px;
  opacity: 1;
  margin-bottom: 18px;
  cursor: pointer;
}
.filter-card .image {
  width: 35%;
  padding-left: 10px;
  padding: 10px;
  height: 172px;
}
.filter-card .image img {
  width: 100%;
  height: 100%;
  border-radius: 11px;
}
.filter-card .card-detail {
  padding: 20px;
  width: 60%;
  position: relative;
}
.filter-card .card-detail .heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.filter-card .card-detail .heading h5 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 16px;
  font-weight: 600;
}
.card-main {
  position: relative;
}
.card-main .wish {
  position: absolute;
  right: 24px;
  top: 35%;
  z-index: 10;
}
.card-main .wish img {
  width: 40px;
  cursor: pointer;
}
.filter-card .card-detail .heading img {
  width: 40px;
}
.filter-card .card-detail p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 12px;
  padding-top: 12px;
}
.filter-card .card-detail .sar {
  display: flex;
  align-items: center;
  padding-top: 15px;
}
.filter-card .card-detail .sar h6 {
  text-align: left;
  letter-spacing: 2.04px;
  color: #febb12;
  opacity: 1;
  font-size: 18px;
  margin-right: 20px;
  font-weight: 600;
}
.filter-card .card-detail .sar p {
  letter-spacing: 1.18px;
  color: #000000;
  opacity: 1;
  font-size: 12px;
  padding-top: 4px;
  font-weight: normal;
}
@media (max-width: 700px) and (min-width: 320px) {
  .filter-card {
    height: unset !important;
  }
  .filter-card .image {
    width: 40%;
    display: flex;
    height: 110px;
  }
  .filter-card .card-detail {
    width: 60%;
    padding: 10px;
  }
  .filter-card .card-detail .heading h5 {
    font-size: 12px;
  }
  .filter-card .card-detail .heading .wish {
    width: 25px;
    height: 25px;
  }
  .rating {
    padding: 7px 0 10px 0;
  }
  .filter-card .card-detail p {
    font-size: 10px;
    padding-top: 8px;
  }
  .filter-card .card-detail .sar {
    padding-top: 0;
  }
  .filter-card .card-detail .sar h6 {
    font-size: 14px;
  }
  .filter-card .card-detail .sar p {
    font-size: 10px;
  }
}
</style>