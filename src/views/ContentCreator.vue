<template >

  <v-container id="container" fluid style="background-color: black; height: auto;  overflow-x: hidden">
    
    <v-row>
      <v-col style="margin-top: 120px; padding-bottom: 20%">
        <div class="context" style=" overflow-x: hidden;">
          <p style="font-weight: bold">
            ช่วยบอกเราหน่อยได้ไหมว่า<br />
            เบื้องต้น คุณเป็น Content Creator<br />
            ประเภทไหน
          </p>
          <center>
            <p style="font-weight: bold" class="mt-12 mb-12">
              ฉันเป็น Content Creator ด้าน
            </p>
          
            <v-select
              :items="dropdownItems"
              label="รีวิว"
              outlined
              dark
              
              
              :block="$vuetify.breakpoint.xsOnly "
              
              style="width: 18%; border-radius: 40px"
            />
            
          </center>

          <div style="text-align: center">
            <v-btn
              color="#353197"
              dark
              x-large
              id="youtubeURL"
              @click="routeContentCreate2"
              width="18%"
              style="border-radius: 40px"
              >ต่อไป</v-btn
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
  </v-container>
</template>

<script>
//import GoogleLogin from "vue-google-login";
//import YoutubeAPIservice from "../services/YoutubeAPIservice";
import axios from "axios";
//import LoadingFirst from "./LoadingFirst";

export default {
  name: "ContentCreator",

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
    dropdownItems: [
      "รีวิว",
      "เล่าเรื่อง",
      "สอน",
      "VLOG",
      "Caster",
      "รายการ",
      "ศิลปิน",
      "ไลฟ์สไตล์",
    ],
  }),

  created() {
    
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
      
    routeContentCreate2(){
        this.$router.push({name:'ContentCreator2'})
    }
  },

  components: {
    /* GoogleLogin, 
    LoadingFirst,*/
  },
};
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans:wght@700&display=swap");
/* #container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
} */
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