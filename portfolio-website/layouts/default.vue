<template>
    <perfect-scrollbar>
   <v-app dark class="app-container">
    <v-main>
      <div class="blue-rectangle"></div>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</perfect-scrollbar>
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
.ps {
  height: 100vh;
  overflow-x: hidden;
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
</style>
