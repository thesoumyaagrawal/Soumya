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
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text">B.Tech. Computer Science Engineering</span><br />
            <h6>Mody University Of Science & Technology</h6>
            <h6>CGPA: 8.16 (till IV Semester)</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="2021-2025" />
        </div>

        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text">Senior Secondary Education</span><br />
            <h6>Ryan Internation School,Raipur</h6>
            <h6>Percentage: 91%</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="CBSE,  2021" />
        </div>

        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text">Matriculation</span><br />
            <h6>Krishna Public School, Raipur</h6>
            <h6>Percentage: 89.4%</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="CBSE,  2019" />
        </div>
        <v-divider dark></v-divider>
        <div class="resume-cotent-heading">
          <IconsConcentricCircles />
          <h5>Experience</h5>
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text">Web-Developer Intern</span><br />
            <h6>Gimbooks</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="June'23 - August'23" />
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text">Lead Competitive Programming</span><br />
            <h6>Google Developer's Student Club, MUST</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="2022 - 2023" />
        </div>
      </div>


      <div class="ressume-contents-right">

        <div class="resume-cotent-heading">
          <IconsConcentricCircles />
          <h5>Skill Sets</h5>
        </div>
        <div class="resume-content-sub-heading">
          <ResumeComponentsSkillSets />
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text">Lead Competitive Programming</span><br />
            <h6>Google Developer's Student Club, MUST</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="2022 - 2023" />
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap");
.about-me-card {
  border-radius: 16px !important;
  padding: 48px 36px !important;
  max-height: 540vh;
  max-width: 500vh;
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
  justify-content: space-evenly;
}
.resume-contents-left {
  padding: 0px 24px 0px 0px;
}
.resume-cotent-heading {
  display: flex;
  align-items: center;
}
h5 {
  font-size: 38px;
  font-weight: 700;
  line-height: 42px;
  color: #e5e5e5;
  padding: 8px 8px;
}
.resume-content-sub-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.resume-content-sub-heading-education {
  padding: 16px 16px;
}
.resume-content-sub-heading-education-text {
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  color: #e5e5e5;
}
h6 {
  font-size: 16px;
  font-weight: 100;
  line-height: 20px;
  color: #e5e5e5;
  padding: 4px 0px;
}

.resume-contents-right {
  padding: 0px 0px 0px 24px;
}
</style>

