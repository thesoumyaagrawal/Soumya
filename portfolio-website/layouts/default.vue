<template>
    
   <v-app dark class="app-container">
    <v-main>
      <div class="blue-rectangle"></div>
        <div class="simple-shape-1"><SimpleShapesRingOrange /></div>
        <div class="simple-shape-2"><SimpleShapesRingYellow /></div>
        <div class="simple-shape-3"><SimpleShapesRingPink /></div>
        <div class="simple-shape-4"><SimpleShapesRingGreen /></div>
        <div class="simple-shape-5"><SimpleShapesRingOrange /></div>
        <div class="simple-shape-6"><SimpleShapesRingGreen /></div> 
        <div class="simple-shape-7"><SimpleShapesRingPink /></div>
        <div class="simple-shape-8"><SimpleShapesRingYellow /></div>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";

export default {
  name: 'DefaultLayout',
  components: {
    PerfectScrollbar,
  },
}
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />

<style scoped>
.v-application {
  background-color: #1C1C1C;
}
.blue-rectangle {
  position: absolute;
  top: -13.5vh;
  left: -16vh;
  width: 75%;
  height: 100vh;
  transform: skewX(-15deg) skewY(-10deg);
  background-color: #292828; 
}
.simple-shape-1 { 
  position: absolute;
  top: 15.5vh;
  left: 100vh; 
}
.simple-shape-2 { 
  position: absolute;
  top: 20.5vh;
  left: 5%; 
  }
  .simple-shape-3 { 
  position: absolute;
  top: 50.5vh;
  left: 30%; 
  opacity: 0.6;
  }
  .simple-shape-5 { 
  position: absolute;
  top: 3.5vh;
  left: 8%; 
  }
  .simple-shape-6 { 
  position: absolute;
  top: 80.5vh;
  left: 60%; 
  }
  .simple-shape-7 { 
  position: absolute;
  top: 90.5vh;
  left: 5%; 
  }
  .simple-shape-8 { 
  position: absolute;
  top: 40.5vh;
  left: 90%; 
  }
</style>
