<template>
  <v-app id="app">
 <!-- <transition name="first" enter-active-class="animated
            bounceInDown" leave-active-class="animated bounceInDown" >
      <router-view/>
   </transition>  -->
    <router-view/>
  </v-app>
</template>

<script>

export default {
  
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
 /* @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app{
  height: calc(60%-50px);
}

.page{
  width: inherit;
} */

</style>
