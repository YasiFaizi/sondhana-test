<template>
  <v-container fluid ma-0 pa-0>
    <div class="context">
      <p>I'm</p>
      <h1 class="mt-n5">Jameswhiteshot</h1>
      <div style="text-align: center">
        <v-avatar size="120" class="mt-n2">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </div>
      <v-select
          :items="items1"
          label="Select your content"
          dense
          outlined
          dark
          style="width:450px;border-radius:40px;"
          class="mx-auto mt-5"
        />
        <p class="mt-n3">who does contents about</p>
         <v-select
          :items="items2"
          label="Select first category"
          dense
          outlined
          dark
          style="width:450px;border-radius:40px;"
          class="mx-auto mt-n1"
        />
        <p class="mt-n3">&</p>
        <v-select
          :items="items2"
          label="Select second category"
          dense
          outlined
          dark
          style="width:450px;border-radius:40px;"
          class="mx-auto mt-n2"
        />
      <div style="text-align: center">
        <v-btn
          color="red"
          dark
          x-large
          style="width: 450px; min-width: 36px;height:40px;border-radius:40px;"
          @click="loadingPage2"
          >Next</v-btn
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
  </v-container>
</template>

<script>
export default {
  name: "ProfileDropdown",

  data: () => ({
    items1: ['Reviewer', 'Vlogger', 'Tutorials', 'Storyteller','Caster','Tv Show'],
    items2: ['Food','Health Care','Beauty','Fashion','Health','Sports','Tech Gadget','Gaming','Parenting','Pets','Entertainment','Lifestyle','Financial','Investment','Financial','Investment','Real Estate','Property','Automotive'],
  }),

  methods: {
    loadingPage2() {
      this.$router.push({ name: "LoadingSecond" });
    },
  },

  components: {},
};
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans:wght@700&display=swap");

* {
  margin: 0px;
  padding: 0px;
}

.context {
  width: 100%;
  position: absolute;
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
  background:  #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
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