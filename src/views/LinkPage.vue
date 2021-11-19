<template>
  <v-container fluid style="background-color: black; height: auto">
    <v-row v-if="mainPage">
      <v-col>
        <div class="context">
          <h1>สวัสดี</h1>

          <p>
            เราคือ สนทนา<br />
            ระบบวิเคราะห์ทางภาษา<br />
            ที่จะมาเล่าเรื่องราว Youtube ของคุณ<br />
            ในปี 2021 ที่ผ่านมา
          </p>
          <center>
            <svg
              width="3"
              height="41"
              viewBox="0 0 3 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5"
                y1="0.5"
                x2="1.5"
                y2="40.5"
                stroke="white"
                stroke-width="3"
              />
            </svg>
            <p class="mb-12">
              แต่ก่อนอื่น ช่วยบอกเราได้ไหม<br />
              ว่าคุณเป็นใครใน
              <span style="font-weight: bold; color: red">Youtube?</span>
            </p>
          </center>
          <v-form ref="form" v-model="youtubePostForm" lazy-validation>
            <v-text-field
              v-model="youtube_url"
              label="ใส่ Link Channel ของ Youtube คุณ"
              style="width: 40%; border-radius: 40px"
              class="centered-input mx-auto"
              outlined
              dark
              single-line
            />

            <div style="text-align: center">
              <v-btn
                color="red"
                dark
                x-large
                id="youtubeURL"
                style="width: 40%; border-radius: 40px"
                @click="processForm"
                >ต่อไป</v-btn
              >
            </div>
          </v-form>

          <p style="margin-top: 56px; font-weight: bold; margin-bottom: 56px">
            หรือ
          </p>
          <p style="margin-top: 40px; font-weight: bold; font-size: 48px">
            เข้าสู่ระบบ
          </p>
          <p>
            ด้วยบัญชี Google<br />
            เพื่อชมโปรไฟล์ของคุณ
          </p>
          <div style="text-align: center">
            <v-btn
              color="white"
              x-large
              id="youtubeURL"
              style="border-radius: 40px"
              @click="slogin"
              >Sign in with Google</v-btn
            >
          </div>
          <div>
            <GoogleLogin
              :params="params"
              :onSuccess="onSuccess"
              :onFailure="onFailure"
              style="
            margin: 0;
            position: absolute;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            margin-top: 50px;
            color:black;
            background-color:white;
            width:40%
            border-radius:20px;
          "
              >Sign in with Google</GoogleLogin
            >
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
        </div>
      </v-col>
    </v-row>
    <v-row v-if="isLoaded">
      <v-col>
        <LoadingFirst />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoogleLogin from "vue-google-login";
//import YoutubeAPIservice from "../services/YoutubeAPIservice";
import axios from "axios";
import LoadingFirst from "./LoadingFirst";

export default {
  name: "LandingPage",

  data: () => ({
    params: {
      client_id: process.env.VUE_APP_CLIENT_ID,
      scope: "https://www.googleapis.com/auth/youtube.force-ssl",
    },
    // only needed if you want to render the button with the google ui
    renderParams: {
      width: 250,
      height: 50,
      longtitle: true,
    },
    youtube_url: "",
    youtubeResData: {},
    isLoaded: false,
    mainPage: true,
  }),

  created() {
    this.princeFunction();
  },

  computed: {
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },

  methods: {
    loadingPage() {
      this.$router.push({ name: "LoadingFirst" });
    },
    onSuccess(googleUser) {
      console.log(JSON.stringify(googleUser));

      // This only gets the user information: id, name, imageUrl and email
      console.log(JSON.stringify(googleUser.getBasicProfile()));
    },
    processForm() {
      this.isLoaded = true;
      this.mainPage = false;
      const postData = { youtube_url: this.youtube_url };
      //console.log("POST DATA",postData a)
      axios
        .post(`${process.env.VUE_APP_API_URL}/channel/search/`, postData)
        .then((res) => {
          localStorage.setItem("youtubeResData", JSON.stringify(res));
          console.log("Youtube Res data", res);
          console.log("RES", res);
          this.isLoaded = false;
          this.$router.push({ name: "HalfReport" });
        });
    },
    princeFunction() {
      // Example 2: Use gapi.client.request(args) function
      var request = this.$gapi.client.request({
        method: "GET",
        path: "/youtube/v3/channels",
        params: { part: "snippet", mine: "true" },
      });
      // Execute the API request.
      request.execute(function (response) {
        console.log("Response for prince", response);
      });
    },
    slogin() {
      this.$gapi.login().then(({ currentUser, gapi, hasGrantedScopes }) => {
        console.log("Testing this slogin", {
          currentUser,
          gapi,
          hasGrantedScopes,
        });

        var request = gapi.client.request({
          method: "GET",
          path: "/youtube/v3/channels",
          params: { part: "snippet,id,statistics", mine: "true" }, 
          /* part:'statistics',
          mine:'true' */
        });
        // Execute the API request.
        request.execute(function (response) {
          console.log("Response for prince", response);
        });
      });
    },
  },

  components: {
    GoogleLogin,
    LoadingFirst,
  },
};
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans:wght@700&display=swap");

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

.context p {
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-weight: 400;
}

.area {
  background: black;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 30vh;
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

#youtubeURL {
  font-family: "IBM Plex Sans Thai", sans-serif;
  font-weight: bold;
}

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