<template>
  <section :class="['card-set', {'set-card-rtl': $t('lang') == 'ar'}]">
    <div
      class="wish"
      v-if="favorites(item) || fav"
      @click="favUnFav(item._id)"
    >
      <img src="../../assets/images/yellowHeart.png" />
      
    </div>
    <div class="wish" v-else @click="favUnFav(item._id)">
      <img src="../../assets/images/unfillHeart.png" />
      <!-- <svg class="svg-icon" viewBox="0 0 20 20">
        <path
          fill="#949494"
          d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"
        />
      </svg> -->
    </div>
    <router-link
      :to="
        $route.path == '/filters'|| $route.path == '/search'
          ? `${getSlug(item)}`
          : `${$route.path}/${item._id}`
      "
      class="filter-card"
    >
      <div class="image">
        <img
          :src="item.description.images[0]"
          v-if="checkLink(item.description.images[0])"
        />
        <img src="../../assets/images/hotel-img.svg" v-else />
      </div>
      <div class="card-detail">
        <div class="heading">
          <h5>{{ $t('lang') == 'ar' ? item.description.nameInArabic :item.description.nameInEnglish }}</h5>
        </div>
        <!-- <p>Riyadh, KSA</p> -->
        <p>{{ item.address && item.address.address }}</p>
        <div class="rating">
          <span :class="['star', { yellow: item.rating >= 1 }]">&starf;</span>
          <span :class="['star', { yellow: item.rating >= 2 }]">&starf;</span>
          <span :class="['star', { yellow: item.rating >= 3 }]">&starf;</span>
          <span :class="['star', { yellow: item.rating >= 4 }]">&starf;</span>
          <span :class="['star', { yellow: item.rating >= 5 }]">&starf;</span>
          <span class="rating-counter">({{ item.rating }})</span>
        </div>
        <div class="sar">
          <h6>SAR {{ item.price && item.price.dayPrice }}</h6>
          <p>{{$t('detailPage.perNight')}}</p>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ["item"],
  name: "FilterCard",
  data() {
    return {
      fav: false,
    };
  },
  computed: {
    user: function () {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    favorites(item) {
      if (this.user && item.fav) {
        return item.fav.includes(this.user._id);
      }
    },
    getSlug(item) {
      if (item.category) {
        var category = "";
        category =
          item.category.category == "Hotel"
            ? "hotels"
            : item.category.category.toLowerCase() == "wedding_halls"
            ? "wedding-halls"
            : item.category.category.toLowerCase() == "apartment"
            ? "apartments"
            : item.category.category.toLowerCase() == "stadium"
            ? "stadiums"
            : item.category.category;
        return `${category.toLowerCase()}/${this.item._id}`;
      }
    },
    async favUnFav(id) {
      if (!this.user) {
        this.$store.commit("auth/MODEL_OPEN", true);
        return;
      }
      try {
        var res = await this.$axios.get(`user/fav-unfav/${id}`);
        if (res.data) {
          if (res.data.msg == "Added to favorite") {
            this.fav = true;
          } else if (res.data.msg == "Removed from favorite") {
            this.fav = false;
            this.$emit("removedWish");
          }
          this.$swal({
            icon: "success",
            title: "Success!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
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
  },
};
</script>

<style scoped>
.card-set {
  position: relative;
}
.filter-card {
  display: flex;
  box-shadow: 0px 0px 3px 2px #0000000d;
  border-radius: 12px;
  margin-bottom: 15px;
  cursor: pointer;
  height: 185px;
}
.filter-card .image {
  width: 23%;
}
.filter-card .image img {
  width: 100%;
  border-radius: 13px;
}
.filter-card .card-detail {
  padding: 20px;
  width: 70%;
}
.filter-card .card-detail .heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.filter-card .card-detail .heading h5 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 16px;
  font-weight: normal;
}
.card-set .wish {
  /* box-shadow: 0px 0px 10px #00000012; */
  opacity: 1;
  z-index: 10;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
}
/* .image-wish {
  box-shadow: unset !important;
  width: 60px !important;
  height: 60px !important;
} */
.filter-card .card-detail .heading svg {
  width: 30px;
}
.filter-card .card-detail p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.5;
  font-size: 14px;
  padding-top: 15px;
}
.filter-card .card-detail .sar {
  display: flex;
  align-items: center;
  padding-top: 10px;
}
.filter-card .card-detail .sar h6 {
  text-align: left;
  letter-spacing: 2.04px;
  color: #febb12;
  opacity: 1;
  font-size: 18px;
  margin-right: 20px;
  font-weight: normal;
}
.filter-card .card-detail .sar p {
  letter-spacing: 1.18px;
  color: #000000;
  opacity: 0.4;
  font-size: 14px;
  padding-top: 4px;
  font-weight: normal;
}
.rating {
  text-align: left;
  padding: 15px 0;
  display: flex;
  align-items: center;
}
.rating .star {
  font-size: 28px;
  color: #efefef;
  margin-right: 5px;
  cursor: pointer;
  line-height: 1;
}
.rating .yellow {
  color: #fdc350 !important;
}
.rating .rating-counter {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  font-size: 14px;
}
.favourite .filter-card .card-detail .heading h5 {
  font-size: 16px !important;
  font-weight: 600;
}
.favourite .rating .star {
  font-size: 28px !important;
}
.favourite .filter-card .card-detail p {
  font-size: 12px !important;
}
.favourite .filter-card .card-detail .sar h6 {
  font-size: 18px !important;
}
.favourite .filter-card .card-detail .sar {
  padding-top: 5px !important;
}
.favourite .filter-card .card-detail .sar p {
  font-size: 12px !important;
  padding-top: 10px !important;
}
.favourite .rating {
  padding: 10px 0 !important;
}
.favourite .filter-card .image {
  width: 35% !important;
}
.favourite .filter-card .card-detail {
  width: 60% !important;
}
.set-card-rtl .card-detail p{
  text-align:right
}
.set-card-rtl .card-detail .sar h6{
  margin-right:0;
  margin-left:20px;
}
.set-card-rtl .wish{
  right: unset;
  left:20px;
}
@media (max-width: 700px) and (min-width: 320px) {
  .filter-card {
    height: unset !important;
  }
  .filter-card .image {
    width: 40%;
    display: flex;
    height:124px;
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
