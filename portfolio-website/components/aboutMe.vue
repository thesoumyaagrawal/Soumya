<template>
  <v-card class="mx-auto my-12 about-me-card">
    <div class="about-me-card-contents">
      <div class="about-me-left">
        <v-card class="imgcard" elevation="0" color="transparent">
          <img src="../assets/Images/Soumyapic.jpg"/>
        </v-card>
        <v-card class="about-me-intro-card" elevation="4">
          <div class="about-me-intro-card-wrapper">
            <v-card-title>Name</v-card-title>
            <div class="about-me-intro-card-content">Soumya Agrawal</div>
          </div>
          <v-divider dark />
          <div class="about-me-intro-card-wrapper">
            <v-card-title>Date of Birth</v-card-title>
            <div class="about-me-intro-card-content">27 April, 2003</div>
          </div>
          <v-divider dark />
          <div class="about-me-intro-card-wrapper">
            <v-card-title>Email-ID</v-card-title>
            <div class="about-me-intro-card-content">iamsoumyaagrawal@gmail.com</div>
          </div>
          <v-divider dark />
          <div class="about-me-intro-card-wrapper">
            <v-card-title>Nationality</v-card-title>
            <div class="about-me-intro-card-content">Indian</div>
          </div>
          <v-divider dark />
          <div class="about-me-intro-card-wrapper">
            <v-card-title>Hobbies</v-card-title>
            <div class="about-me-intro-card-content">Painting and Dancing</div>
          </div>
          <v-divider dark />
        </v-card>
      </div>


      <div class="about-me-right">
        <div class="about-me-heading">About Me</div>
        <div class="about-me-title">
          Innovating Code for Futuristic Solutions.
        </div>
        <div class="about-me-short-description">
          A Passionate Software & Web Developer based In India.
        </div>
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
        <div class="about-me-download">
          <downloadCVButton />
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
.about-me-card-contents , .about-me-left  {
  display: flex;
}
.imgcard, img {
  height: 400px;
  width: auto;
}
.imgcard{
  border-radius: 12px !important;
}
.about-me-intro-card {
  height: 400px;
  position: relative;
  min-width: 20% !important;
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
  font-size: 18px;
  font-weight: 400 !important;
  letter-spacing: 0.0125em;
  text-align: justify;
  text-justify: inter-word;
  line-height: 21px;
  padding: 4px 0 4px 0 !important;
  color: #e3d5d5 !important;
  word-break: break-all;
}
.about-me-intro-card-content {
  font-size: 18px;
  font-family: "heebo";
  font-weight: 400;
  text-align: justify;
  text-justify: inter-word;
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
  font-weight: 600;text-align: justify;
  text-justify: inter-word;
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
  color: #ED510F;
  text-align: justify;
  text-justify: inter-word;
  padding: 16px 0px;

}
.about-me-paragraph{
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #333333;
  text-align: justify;
  text-justify: inter-word;
  padding: 16px 0px ;
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
    padding: 8px 8px;
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
    min-width: 100% !important;
    left: 0;
    margin: 0 auto;
  }
  
  .about-me-right {
    padding-left: 0px;
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
@media screen and (min-width: 1025px) and (max-width: 1265px) {
  .v-card__title {
  font-size: 16px;
  line-height: 19px;
}
.about-me-intro-card-content {
  font-size: 18px;
  line-height: 21px;
}
.imgcard,
  img {
    height: auto;
    width: 100%;
  }
.about-me-intro-card {
  height: 400px;
  position: relative;
  left: 0px;
  margin-top: 4px;
  background-color: #ff451b;
  padding: 20px 24px;
  z-index: 1;
  border-radius: 4px;
}
.about-me-left  {
  display: block;
}
}
</style>
