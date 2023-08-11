<template>
  <v-card class="mx-auto my-12 about-me-card">
    <div class="resume-heading">
      <h4>Resume</h4>
      <h3>Combination of Skills & Experience</h3>
    </div>

    <div class="resume-contents">
      <div class="resume-contents-left">
        <div class="resume-cotent-heading">
          <IconsConcentricCircles />
          <h5>Education</h5>
        </div>
        <div class="ressume-content-sub-heading"></div>
      </div>

      <div class="ressume-contents-right">
        <div class="ressume-cotent-heading"></div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.about-me-card {
  border-radius: 16px !important;
  padding: 48px 36px !important;
  height: 140vh;
  max-width: 90%;
  background-color: #292828;
}
.resume-heading {
  display: block;
}
h4 {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: #ed510f;
}
h3 {
  font-size: 38px;
  font-weight: 700;
  line-height: 42px;
  width: 370px;
  color: #ffffff;
  padding: 8px 0px;
}
.resume-contents {
  padding-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.resume-contents-left {
  padding: 0px;
}
.resume-cotent-heading{
     display: flex;
     justify-content: space-evenly;
     align-items: center;
}
h5 {
  font-size: 38px;
  font-weight: 700;
  line-height: 42px;
  width: 370px;
  color: #e5e5e5;
  padding: 8px 16px;
}
</style>
