<template>
    <v-card class="mx-auto my-12 about-me-card">
      <div class="about-me-left">
        <div class="about-me-heading">My Blogs</div>
        <div class="about-me-title">Latest Tips, Tricks and Updates.</div>
      </div>
      <br /><br />
  
      <v-item-group>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <BlogsComponentsBlog1
                label="Flipkart Rejection: Rising Stronger from Within."
                url="FlipkartWordCloud.png"
              />
            </v-col>
  
            <v-col cols="12" md="6">
              <BlogsComponentsBlog1
                label="Internship Chronicles: Learn, Grow & Succeed."
                url="InternshipWordCloud.png"
              />
            </v-col>
  
          </v-row>
        </v-container> </v-item-group><br />
  
        
      <v-item-group>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <BlogsComponentsBlog1
                label="My Journey as the GDSC CP Lead."
                url="GdscWordCloud.png"
                />
            </v-col>
  
            <v-col cols="12" md="6">
              <BlogsComponentsBlog1
                label="Everything's New: The Excitement of Day-1"
                url="ArtWordCloud.png" />
            </v-col>
          </v-row>
        </v-container> </v-item-group><br />
    </v-card>
  </template>
  
  <style scoped>
  .about-me-card {
    border-radius: 16px !important;
    padding: 48px 36px !important;
    min-height: 140vh;
    max-width: 90%;
    background-color: #eee0c9;
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
  .row {
    display: flex;
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
  </style>
  