<template>
    <div class="image-wrapper">
        <div class="rectangle"></div>
    <v-card class="my-12 image-card" max-width="220" elevation="0" color="transparent">
        <img src="../assets/Images/photo1.jpg">
  </v-card>
</div>
</template>

<style scoped>
.image-wrapper{
    align-items: flex-end;
    margin-right: 12px;
}
img{
    height: 400px;
    width: auto;
}
.image-card{
    border-radius: 32px;
}
.rectangle{
    position: absolute;
    content: "";
    width: 257px;
    height: 415px;
    background-color: #DAC0A3;
    transform: rotate(-50deg);
    animation: animeRotate 13s linear 0s infinite alternate;
    animation-name: animeRotate;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;  
}
@keyframes animeRotate {
    0% {
    transform: rotate(-50deg);
  }
  50% {
    transform: rotate(-25deg);
  }
  100%{
    transform: rotate(-50deg);
  }
}
@media screen and (max-width: 480px) {
  .image-wrapper {
    align-items: flex-start; /* Adjust alignment for smaller screens */
  }

  .rectangle {
    width: 180px;
    height: 260px;
  }
  img{
    height: 250px;
    width: auto;
}
.image-card{
    border-radius: 12px;
}
}
</style>