<template>
  <v-card class="my-12" max-width="520" elevation="0" color="transparent">
    <div class="card-content">
      <v-card-title>I'm</v-card-title>
      <h3>Soumya Agrawal</h3>
      <div class="intro-text">
        Welcome to my Web Development Journey! I'm an innovative Web Developer
        Passionate about crafting Memorable Digital Experiences.
      </div>
    </div>
  </v-card>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aleo:wght@600&family=Open+Sans:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Aleo:wght@600&family=Open+Sans:wght@400;600&display=swap");
.v-card {
  color: aliceblue;
}
.v-card__title {
  font-size: 36px;
  font-family: "Aleo";
  font-weight: 700;
  padding-left: 48px;
  line-height: 38px;
  color: #ED510F;
}
.card-content {
  display: block;
}
h3 {
  font-size: 52px;
  font-weight: 600;
  line-height: 56px;
  width: 261px;
  color: #333333;
  padding-left: 64px;
}
.intro-text {
  font-size: 20px;
  font-family: "open-sans";
  font-weight: 400;
  line-height: 24px;
  padding-left: 64px;
  padding-top: 16px;
  color: #8d8787;
}

/* Adjust for screens between 300px and 480px */
@media screen and (min-width: 300px) and (max-width: 480px) {
  .v-card__title {
    font-size: 24px;
    line-height: 28px;
    padding-left: 16px;
  }

  h3 {
    font-size: 36px;
    line-height: 40px;
    padding-left: 16px;
  }

  .intro-text {
    font-size: 16px;
    line-height: 20px;
    padding-left: 16px;
    padding-top: 8px;
  }
}

/* Adjust for screens between 480px and 720px */
@media screen and (min-width: 480px) and (max-width: 720px) {
  .v-card__title {
    font-size: 28px;
    line-height: 32px;
    padding-left: 32px;
  }

  h3 {
    font-size: 44px;
    line-height: 48px;
    padding-left: 32px;
  }

  .intro-text {
    font-size: 18px;
    line-height: 22px;
    padding-left: 32px;
    padding-top: 12px;
  }
}
</style>
