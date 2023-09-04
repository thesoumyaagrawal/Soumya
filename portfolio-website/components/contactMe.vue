<template>
  <v-card class="mx-auto my-12 about-me-card">
    
      <div class="about-me-left">
        <div class="about-me-heading">Contact Me</div>
        <div class="about-me-title">
          Contact Me to get your Work Done.
        </div>
      </div><br><br>

      <div class="about-me-card-contents">
        <div class="about-me-left">
        <div class="about-me-title">
        <IconsMailMe />
        </div>
        <div class="about-me-title">
        <IconsMailMe />
        </div>
        <div class="about-me-title">
        <IconsLocation />
        </div>
      </div>
      <div class="about-me-right">
        <div class="about-me-heading">
          <Form> </Form>
        </div>
        <div class="about-me-paragraph">
         
        </div>
        <div class="about-me-download">
         <!--resumebutton tha-->
        </div>
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
  background-color: #EEE0C9;
}
.about-me-card-contents {
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
  color: #ED510F;
}
.about-me-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  color: #333333;
  padding: 16px 0px;
}
.about-me-short-description {
  font-size: 21px;
  font-weight: 300;
  line-height: 26px;
  color: #b0acac;
  padding: 16px 0px;
}
.about-me-paragraph{
  font-size: 18px;
  font-weight: 200;
  line-height: 24px;
  color: #F5F5F5;
  padding: 16px 0px;
}
@media screen and (max-width: 768px) {
  .about-me-card {
    padding: 24px 16px !important;
    height: auto;
  }
  
  .about-me-card-contents {
    flex-direction: column;
  }
  
  .about-me-left {
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }
  
  .about-me-intro-card {
    min-width: unset !important;
    left: 0;
    margin: 0 auto;
  }
  
  .about-me-right {
    padding-left: 16px;
  }
  
  .imgcard,
  img {
    height: auto;
    width: 100%;
  }
  
  .about-me-intro-card-content {
    font-size: 16px;
  }
  
  .about-me-heading {
    font-size: 20px;
    line-height: 24px;
  }
  
  .about-me-title {
    font-size: 24px;
    line-height: 28px;
    padding: 8px 0;
  }
  
  .about-me-short-description {
    font-size: 18px;
    line-height: 22px;
    padding: 8px 0;
  }
  
  .about-me-paragraph {
    font-size: 16px;
    line-height: 20px;
    padding: 8px 0;
  }
}
@media screen and (max-width: 1024px) {
  .about-me-card {
    padding: 24px 16px !important;
    height: auto;
  }
  
  .about-me-card-contents {
    flex-direction: column;
  }
  
  .about-me-left {
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }
  
  .about-me-intro-card {
    min-width: unset !important;
    left: 0;
    margin: 0 auto;
  }
  
  .about-me-right {
    padding-left: 16px;
  }
  
  .imgcard,
  img {
    height: auto;
    width: 100%;
  }
  
  .about-me-intro-card-content {
    font-size: 16px;
  }
  
  .about-me-heading {
    font-size: 20px;
    line-height: 24px;
  }
  
  .about-me-title {
    font-size: 24px;
    line-height: 28px;
    padding: 8px 0;
  }
  
  .about-me-short-description {
    font-size: 18px;
    line-height: 22px;
    padding: 8px 0;
  }
  
  .about-me-paragraph {
    font-size: 16px;
    line-height: 20px;
    padding: 8px 0;
  }
}
</style>
