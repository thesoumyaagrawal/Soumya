<template>
    <div>
    <v-card class="mx-auto my-12 about-me-card">
      <div class="about-me-right">
        <div class="about-me-heading">Contact Me</div>
        <div class="about-me-title">Contact me to get your work done</div>

        <div class="about-me-paragraph">
          <p>Hello There! I am Soumya Agrawal, a vibrant and imaginative individual
          from the captivating land of India.</p> 
          <p id="element">As a web developer, I find community
          engagement to be a significant aspect close to my heart. I firmly
          believe in giving back to society and making a positive impact on the
          lives of others.</p>
         <p>In this
          dynamic journey of life, I'm always eager to meet new people and share
          my experiences. I look forward to the opportunity to connect with you
          on this path, where technology and creativity intertwine to shape
          remarkable digital experiences.</p>
        </div>
        <div>
          <downloadCVButton />
        </div>
      </div>
  </v-card>
</div>
</template>

<style scoped>
.about-me-card {
  border-radius: 16px !important;
  padding: 48px 36px !important;
  height: 140vh;
  max-width: 90%;
  background-color: #292828;
}
.about-me-card-contents {
  display: flex;
}
.about-me-left {
  display: flex;
}
.imgcard {
  height: 400px;
  width: auto;
}
img {
  height: 400px;
  width: auto;
}
.about-me-intro-card {
  height: 400px;
  position: relative;
  min-width: 30% !important;
  left: -30px;
  margin-top: 205px;
  background-color: #ff451b;
  padding: 20px 24px;
  z-index: 1;
  border-radius: 16px;
}
.about-me-intro-card-wrapper {
  display: block;
  padding: 8px 0px;
}
.v-card__title {
  align-items: flex-start !important;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: 400 !important;
  letter-spacing: 0.0125em;
  line-height: 21px;
  padding: 4px 0 4px 0 !important;
  color: #e3d5d5 !important;
  word-break: break-all;
}
.about-me-intro-card-content {
  font-size: 18px;
  font-family: "heebo";
  font-weight: 400;
  padding: 0px 0px 4px 0;
  line-height: 21px;
  color: #e3dbdb;
}
.about-me-right {
  display: inline;
  padding-left: 42px;
}
.about-me-heading {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: #ed510f;
}
.about-me-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  color: #ffffff;
  padding: 16px 0px;
}
.about-me-paragraph{
  font-size: 18px;
  font-weight: 200;
  line-height: 24px;
  color: #F5F5F5;
  padding: 16px 0px;
}

</style>
