<template>
  <footer :class="['footer', { 'set-footer': $t('lang') == 'ar' }]">
    <div class="footer-container container">
      <section class="footer-row">
        <div class="col">
          <h3 class="contact">{{ $t("footer.contact") }}</h3>
          <ul class="contact-list">
            <li class="fist-list">
              <div>
                <img src="../../assets/images/location.svg" />
              </div>
              <div>
                <router-link to="#">
                  {{ $t("footer.location") }}
                </router-link>
              </div>
            </li>
            <li>
              <div>
                <img src="../../assets/images/phone.svg" />
              </div>
              <div>
                <router-link to="#"
                  >(+966) {{ $t("footer.phone") }}</router-link
                >
                <br />
                <router-link to="#"
                  >(+966) {{ $t("footer.phone2") }}</router-link
                >
              </div>
            </li>
            <li>
              <div>
                <img src="../../assets/images/email.svg" />
              </div>
              <div>
                <router-link to="#">info@smartbookings.co</router-link>
                <!-- <br />
                <router-link to="#">loremipsum@gmailcom</router-link> -->
              </div>
            </li>
          </ul>
        </div>
        <div class="col">
          <h3>{{ $t("footer.quickLinks") }}</h3>
          <ul class="contact-list">
            <li class="fist-list">
              <router-link to="/">{{ $t("footer.aboutUs") }}</router-link>
            </li>
            <li class="fist-list">
              <router-link to="#">{{ $t("footer.termsOfUse") }}</router-link>
            </li>
            <li class="fist-list">
              <router-link to="/">{{ $t("footer.privacyPolicy") }}</router-link>
            </li>
            <li class="fist-list">
              <router-link to="#">{{ $t("footer.FAQs") }}</router-link>
            </li>
            <!-- <li class="fist-list">
              <router-link to="/">Chalets</router-link>
            </li> -->
          </ul>
        </div>
        <div class="col">
          <h3>{{ $t("footer.cities") }}</h3>
          <div class="contact-list">
            <div class="city-list">
              <router-link to="#">{{ $t("footer.makkah") }}</router-link>
              <router-link to="#">{{ $t("footer.jeddah") }}</router-link>
              <router-link to="#">{{ $t("footer.riyadh") }}</router-link>
              <router-link to="#">{{ $t("footer.taif") }}</router-link>
              <router-link to="#">{{ $t("footer.madinah") }}</router-link>
              <router-link to="#">{{ $t("footer.abha") }}</router-link>
              <router-link to="#">{{ $t("footer.dammam") }}</router-link>
              <router-link to="#">{{ $t("footer.buraidah") }}</router-link>
              <router-link to="#">{{ $t("footer.tabuk") }}</router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <h3>{{ $t("footer.followUs") }}</h3>
          <div class="contact-list">
            <div class="follow-list">
              <router-link to="#">
                <img src="../../assets/images/fb.svg" />
              </router-link>
              <router-link to="#">
                <img src="../../assets/images/google.svg" />
              </router-link>
              <router-link to="#">
                <img src="../../assets/images/twiter.svg" />
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <div class="reserved">
        <p>{{ $t("footer.AllRightsReserved") }} © 2022 Smart Booking</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  /* background: #e9ebee; */
  min-height: 200px;
  width: 100%;
}
.footer .footer-container {
  background: #e9ebee;
}
.footer .footer-row {
  padding: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.footer .footer-row .col {
  padding: 10px;
}
.footer .footer-row .col h3 {
  color: #000000;
  opacity: 50%;
  font-size: 16px;
  font-weight: normal;
  text-align: left;
}
.contact {
  padding-left: 26px;
}
.footer .footer-row .col .contact-list {
  list-style: none;
  margin: 0;
  padding: 15px 0;
}
.footer .footer-row .col .contact-list li {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.footer .footer-row .col .contact-list li a {
  text-decoration: none;
  color: #8a8a8a;
  opacity: 100%;
  font-size: 12px;
  text-align: left;
  line-height: 1.6;
}
.footer .footer-row .col .contact-list li div:first-child {
  margin-right: 15px;
  width: 22px;
  height: 22px;
}
.footer .footer-row .col .contact-list li div img {
  width: 100%;
  height: 100%;
}
.footer .footer-row .col .contact-list .fist-list div:nth-child(2) {
  display: flex;
}
.footer .footer-row .col .contact-list li div:nth-child(2) {
  width: 300px;
  text-align: left;
}
.city-list {
  display: flex;
  flex-wrap: wrap;
  width: 305px;
  margin-top: 10px;
}
.city-list a {
  text-decoration: none;
  color: #8a8a8a;
  border: 1px solid #8a8a8a;
  border-radius: 3px;
  padding: 6px 8px;
  min-width: 76px;
  margin: 4px 3px;
  font-size: 12px;
}
.follow-list {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.follow-list a {
  width: 30px;
  height: 30px;
  border: 1px solid #8a8a8a;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.follow-list a img {
  width: 15px;
  height: 15px;
}
.reserved {
  padding: 30px 54px;
}
.reserved p {
  color: #000000;
  opacity: 50%;
  font-size: 14px;
  text-align: left;
}
/* rtl */
.set-footer .footer-row {
  flex-direction: row-reverse;
}
.set-footer .footer-row .col h3,
.set-footer .footer-row .col .contact-list li a {
  text-align: right;
}
.set-footer .footer-row .col .contact-list li div{
  text-align:right!important;
  margin-left: 15px;
}
.set-footer .footer-row .col .contact-list li{
  flex-direction: row-reverse;
}
.set-footer .reserved p{
  text-align:right;
  direction:rtl;
}
/* reponsive start */
@media ((max-width: 700px)) and (min-width: 320px) {
  .footer .footer-row .col {
    width: 100%;
  }
  .reserved {
    padding: 25px !important;
  }
}
@media (max-width: 991px) and (min-width: 768px) {
}
@media (max-width: 1199px) and (min-width: 1024px) {
}
@media (max-width: 684px) and (min-width: 575px) {
}
@media (max-width: 767px) and (min-width: 685px) {
}
@media (max-width: 991px) and (min-width: 768px) {
}
@media (max-width: 574px) and (min-width: 480px) {
}
/* reponsive end */
</style>
