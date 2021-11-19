<template>
  <v-container fluid>
    <!-- HEADER -->
    <Header />
      <div style="background-color:red;">
      <v-card
        color="gray"
        outlined
        style="text-align: left"
      >
        <v-row>
          <v-col>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>
                  <h4 style="color: black">
                    &emsp;<b>
                      Organization Type: &emsp; &emsp; &emsp; &emsp; &emsp;
                      &emsp; &emsp; &nbsp;</b
                    >
                    Retails
                  </h4>
                  <br />
                  <h4 style="color: black">
                    &emsp;<b>
                      Organization Status: &emsp; &emsp; &emsp; &emsp; &emsp;
                      &emsp; &emsp;</b
                    >sdasd
                  </h4>
                  <br />
                  <h4 style="color: black">
                    &emsp;<b>
                      Organization Address: &emsp; &emsp; &emsp; &emsp; &emsp;
                      &emsp; &nbsp;</b
                    >Huamak
                  </h4>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </div> 

    <!-- <div style="background-color:red;">
      <v-card
        color="gray"
        outlined
        absolute
        dense
        style="text-align: left"
      >
        <v-row>
          <v-col>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>
                  <h4 style="color: black">
                    &emsp;<b>
                      Organization Type: &emsp; &emsp; &emsp; &emsp; &emsp;
                      &emsp; &emsp; &nbsp;</b
                    >
                    Retails
                  </h4>
                  <br />
                  <h4 style="color: black">
                    &emsp;<b>
                      Organization Status: &emsp; &emsp; &emsp; &emsp; &emsp;
                      &emsp; &emsp;</b
                    >sdasd
                  </h4>
                  <br />
                  <h4 style="color: black">
                    &emsp;<b>
                      Organization Address: &emsp; &emsp; &emsp; &emsp; &emsp;
                      &emsp; &nbsp;</b
                    >Huamak
                  </h4>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </div> 
 -->
    <!-- <div class="context">
      <v-row>
        <v-col cols="12">
          <center> -->
    <!--  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" >
              <div v-if="showWithDelay" style="min-height:100vh"> -->
    <!-- <div v-motion-slide-top :delay="300">
              <h1>สวัสดี,</h1>

              <h3>asdasdas</h3>
              <v-avatar size="120" class="mt-4">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg "
                  alt="John"
                  class="mxa-auto"
                />
              </v-avatar>
              <p class="mt-6">
                นี่คือบทสรุปปี<br />
                2021 ของคุณ ที่มีชื่อว่า
              </p>
              <p id="invertedCommaThaiText">“ไทม์(a)ไลน์มาบ้าง”</p>
              <p class="mb-n2">จาก</p>
              <v-img
                max-height="250"
                max-width="350"
                src="@/assets/youtube.png"
                class="mx-auto mt-n12"
              />
            </div> -->
    <!-- </div>
            </transition> -->
    <!-- <div v-motion-slide-visible-right :delay="200">
              <p class="mt-n6">
                ไปดูกันเลย<br />
                ว่าปีที่ผ่านมาเป็นยังไงบ้าง
              </p>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9999 31.1719L15.4139 22.5859L12.5859 25.4139L23.9999 36.8279L35.4139 25.4139L32.5859 22.5859L23.9999 31.1719Z"
                  fill="white"
                />
                <path
                  d="M35.4139 15.4139L32.5859 12.5859L23.9999 21.1719L15.4139 12.5859L12.5859 15.4139L23.9999 26.8279L35.4139 15.4139Z"
                  fill="white"
                />
              </svg>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <p class="mt-4">
                จากไทม์ไลน์ทั้งหมดที่ผ่านมาในปีนี้<br />
                คุณมียอดวิวจากทั้งปีอยู่ที่
              </p>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <h1 id="percentageText">asdsadas</h1>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <p id="span1">มีมากกว่า</p>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <div>
                <h1 id="twohundredText">
                  adasdsad
                </h1>
                <p id="span2">วิดีโอ</p>
              </div>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <p id="span1">และมี Subscriber กว่า</p>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <div>
                <h1 id="subscriberText">
                  sadfsdf
                </h1>
                <p id="span2">คน</p>
              </div>
            </div>

            <div v-motion-slide-visible-right :delay="200">
              <p id="span1">และมี 3 สิ่งที่บ่งบอกฉัน คือ</p>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <svg
                width="3"
                height="160"
                viewBox="0 0 3 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.5"
                  y1="6.55671e-08"
                  x2="1.49999"
                  y2="160"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <h1>อยากรู้</h1>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <p>เกี่ยวกับตัวคุณมากกว่านี้?</p>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <p>
                ลงทะเบียนใช้งานระบบ<br />
                โดยไม่เสียค่าใช้จ่ายใดๆ ได้ทันที
              </p>
            </div>
            <div v-motion-slide-visible-right :delay="200">
              <v-btn
                color="red"
                dark
                x-large
                style="height: 40px; border-radius: 40px"
                @click="loadingPage2"
                class="mb-10"
                id="youtubeURL"
               
                >ลงทะเบียนด้วย Google Account</v-btn
              >
            </div>

            <div v-motion-slide-visible-right :delay="200">
              <div style="backdrop-filter: blur(6px); height: 350px">
                <h1 id="blurText1">นักรีวิว</h1>
                <h1 id="blurText2">ท่องเที่ยว</h1>
                <h1 id="blurText3">อาหาร</h1>
                <p id="overlay">💬</p>
                <p id="blurText4">คำพูดติดปากของฉันคือ</p>
              </div>
            </div>
          </center>
        </v-col>
      </v-row>
    </div> -->

    <!-- <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div> -->

    <!-- <div class="context">
      <h1>สวัสดี,</h1>
      <h3>Jamewhiteshot!</h3>
      <div style="text-align: center">
        <v-avatar size="120" class="mt-4">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <p class="mt-6">
          นี่คือบทสรุปปี<br />
          2021 ของคุณ ที่มีชื่อว่า
        </p>
        <p id="invertedCommaThaiText">“ไทม์(a)ไลน์มาบ้าง”</p>
        <p>จาก</p>
        <v-img
          max-height="250"
          max-width="350"
          src="@/assets/youtube.png"
          class="mx-auto mt-n12"
        />
      </div>
    </div>

    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div> -->
  </v-container>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "HalfReport",

  data: () => ({
    youtubeDetails: [],
    showWithDelay: false,
    email: "",
    roles: [],
    drawerItems: [],
    drawer: {
      open: true,

      clipped: true,

      fixed: true,
    },
    menuItems: [],
    items: [
      {
        title: "Youtube",
      },
      {
        title: "Facebook",
      },
      {
        title: "Instagram",
      },
      {
        title: "Tiktok",
      },
    ],

    fullName: null,
  }),

  created() {
    this.youtubeDetails = JSON.parse(localStorage.getItem("youtubeResData"));
    console.log("Youtube Details", this.youtubeDetails);
  },

  methods: {},

  mounted() {
    /* setTimeout(() => {
      this.showWithDelay = true;
    }, 2050);  */
  },

  components: {
    Header,
  },
};
</script>

<style lang="css" scoped>
/* @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; */
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans:wght@700&display=swap");

* {
  margin: 0px;
  padding: 0px;
}
#texts {
  text-align: center;
}
#sidebar {
  position: fixed;
  background: #ffffff;
  width: 200px;
  height: 100%;
  bottom: 0%;
  left: 0;
  top: 0%;
  z-index: 1;
  overflow: hidden;
}

#header {
  position: fixed;
  top: 0%;
  height: 5%;
  width: 100%;
}

h1 {
  text-align: center;
  color: #fff;
  font-size: 56px;
  font-family: "IBM Plex Sans Thai", sans-serif;
}

/* h3 {
  text-align: center;
  font-size: 46px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  background: -webkit-linear-gradient(360deg, #4ac7fa 20%, #e649f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */

p {
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-weight: 400;
}

#span1 {
  color: #fff;
  font-size: 32px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-weight: 700;
}
#li:hover {
  background-color: #6699cc;
}

#span2 {
  color: #fff;
  font-size: 44px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-weight: 700;
  display: inline;
}

#percentageText {
  font-size: 48px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  background-image: linear-gradient(
    to right,
    #f24abf,
    #ff5590,
    #ff7a67,
    #ffa34c,
    #f2c94c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
}

.context {
  width: 100%;
  position: relative;
  top: 10vh;
  z-index: 1;
}

.context h1 {
  text-align: center;
  color: #fff;
  font-size: 56px;
  font-family: "IBM Plex Sans Thai", sans-serif;
}

.context h3 {
  text-align: center;
  font-size: 46px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  background: -webkit-linear-gradient(360deg, #4ac7fa 20%, #e649f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.context p {
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-weight: 400;
}

#invertedCommaThaiText {
  color: #adff90;
  font-size: 40px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-weight: 700;
}

.area {
  background: black;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 10vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

#overlay {
  text-shadow: 0 0 15px white;
  color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
}

#twohundredText {
  background-image: linear-gradient(
    to right,
    #f24abf,
    #ff5590,
    #ff7a67,
    #ffa34c,
    #f2c94c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
}

#subscriberText {
  background-image: linear-gradient(
    to right,
    #f24abf,
    #ff5590,
    #ff7a67,
    #ffa34c,
    #f2c94c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
}

#blurText1 {
  text-shadow: 0 0 15px #57f2cc;
  color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
  /*  background-image: linear-gradient(
    to right,
    #f24abf,
    #ff5590,
    #ff7a67,
    #ffa34c,
    #f2c94c
  ); */
}

#blurText2 {
  text-shadow: 0 0 15px#4AC7FA;
  color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
}

#blurText3 {
  text-shadow: 0 0 15px #adff90;
  color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
}

#blurText4 {
  text-shadow: 0 0 15px #e649f5;
  color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
}

#youtubeURL {
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-weight: bold;
}

/* html,
body {
  height: calc(100%-50px);
}

#app {
  height: calc(60%-50px);
}

.page {
  width: inherit;
} */

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>