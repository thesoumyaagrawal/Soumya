<template>
    
   <v-app dark class="app-container">
    <v-main>
      <div class="blue-rectangle"></div>
        <div class="simple-shape-1"><SimpleShapesRingOrange /></div>
        <div class="simple-shape-2"><SimpleShapesRingYellow /></div>
        <div class="simple-shape-3"><SimpleShapesRingPink /></div>
        <div class="simple-shape-4"><SimpleShapesArrowOrange /></div>
        <div class="simple-shape-5"><SimpleShapesRingOrange /></div>
        <div class="simple-shape-6"><SimpleShapesRingGreen /></div> 
        <div class="simple-shape-7"><SimpleShapesRingPink /></div>
        <div class="simple-shape-8"><SimpleShapesRingYellow /></div>
        <div class="simple-shape-9"><SimpleShapesArrowPink /></div>
        <div class="simple-shape-10"><SimpleShapesArrowYellow /></div>
        <div class="simple-shape-11"><SimpleShapesArrowGreen /></div>
        <div class="simple-shape-12"><SimpleShapesDotGreen /></div>
        <div class="simple-shape-13"><SimpleShapesBigRings /></div>
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
  background-color: #F1F0E8;
}
.blue-rectangle {
  position: absolute;
  top: -13.5vh;
  left: -16vh;
  width: 75%;
  height: 100vh;
  transform: skewX(-15deg) skewY(-10deg);
  background-color: #EEE0C9; 
}
.simple-shape-1 { 
  position: absolute;
  top: 15.5vh;
  left: 100vh; 
  opacity: 0.6;
}
.simple-shape-2 { 
  position: absolute;
  top: 32.5vh;
  left: 5vh; 
  }
  .simple-shape-3 { 
  position: absolute;
  top: 50.5vh;
  left: 40%; 
  opacity: 0.6;
  }
  .simple-shape-4 { 
  position: absolute;
  top: 60.5vh;
  left: 1%; 
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
  .simple-shape-9{ 
  position: absolute;
  top: 5.5vh;
  left: 98%; 
  }
  .simple-shape-10 { 
  position: absolute;
  top: 50.5vh;
  left: 50%; 
  }
  .simple-shape-11{ 
  position: absolute;
  top: 95.5vh;
  left: 30%; 
  }
  .simple-shape-12{ 
  position: absolute;
  top: 20.5vh;
  left: 30%; 
  }
  .simple-shape-13{ 
  position: absolute;
  top: 75.5vh;
  left: 90%; 
  opacity: 0.6;
  }
</style>
