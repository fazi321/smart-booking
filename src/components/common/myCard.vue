<template>
  <router-link :to="`/booking/${items._id}`">
    <section class="filter-card">
      <div class="image">
        <img :src="items.service.image" v-if="checkLink(items.service.image)" />
        <img src="../../assets/images/hotel-img.svg" v-else />
        <!-- <img src="../../assets/images/hotel-img.svg" /> -->
      </div>
      <div class="card-detail">
        <div class="heading">
          <h5>{{ items.service.name.description.nameInEnglish }}</h5>
        </div>
        <p>
          <span>{{ items.service.name.address.address }}</span>
        </p>
        <p><span>Booking ID:</span><span> 1234567</span></p>
        <p>
          <span v-if="items.nights">Night: {{ items.nights }}</span
          ><span> Room: 1</span>
        </p>
        <p>
          <span>Check-in: </span><span>{{ fromateData(items.checkIn) }}</span>
        </p>
        <p>
          <span>Check-out: </span><span>{{ fromateData(items.checkOut) }}</span>
        </p>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  name: "ServiesCard",
  props: ["items"],
  methods: {
    fromateData(val) {
      const date = new Date(val);
      return date.toLocaleDateString("en-GB");
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
.filter-card {
  display: flex;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 12px;
  opacity: 1;
  margin-bottom: 20px;
  cursor: pointer;
  height: 174px;
}
.filter-card .image {
  width: 30%;
  display: flex;
  height: 156px;
  padding: 10px;
}
.filter-card .image img {
  width: 100%;
  border-radius: 18px;
}
.filter-card .card-detail {
  padding: 20px 25px;
  width: 60%;
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
  line-height: 1.5;
}
.filter-card .card-detail .heading .wish {
  box-shadow: 0px 0px 3px 2px #0000000d;
  opacity: 1;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.filter-card .card-detail .heading svg {
  width: 30px;
}
.filter-card .card-detail p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.5;
  font-size: 12px;
  padding: 5px 0;
}
.filter-card .card-detail .sar {
  display: flex;
  align-items: center;
  padding-top: 5px;
}
.filter-card .card-detail .sar h6 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 18px;
  margin-right: 10px;
  font-weight: normal;
}
.filter-card .card-detail .sar p {
  color: #febb12;
  font-size: 18px;
  padding: 0px;
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
  color: #fdc350;
  margin-right: 5px;
  cursor: pointer;
  line-height: 1;
}
.rating .gray {
  color: #efefef !important;
}
.rating .rating-counter {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  font-size: 14px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .filter-card {
    height: unset !important;
  }
  .filter-card .image {
    width: 40%;
    display: flex;
    
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
