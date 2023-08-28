<template>
  <v-card class="mx-auto my-12 about-me-card">
    <div class="resume-heading">
      <h4>Resume</h4>
      <h3>Combination of Skills & Experience</h3>
    </div>
    <!------------------------------------------>
    <div class="resume-contents">
      <div class="resume-contents-left">
        <div class="resume-content-heading">
          <IconsConcentricCircles />
          <h5>Education</h5>
        </div>

        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <div class="heading-and-year">
              <span class="resume-content-sub-heading-education-text"
                >B.Tech. Computer Science Engineering</span
              ><ResumeComponentsChipResumeButtons label="2021-25 " />
            </div>
            <h6>Mody University Of Science & Technology</h6>
            <h6>
              I'm actively pursuing a deep understanding of programming
              languages, algorithms, and software development methodologies. My
              goal and aim is to leverage this knowledge to contribute to
              innovative projects and develop efficient solutions that address
              real-world challenges.
            </h6>
            <h6>CGPA: 8.16 (till IV Semester)</h6>
          </div>
        </div>

        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text"
              >Senior Secondary Education</span
            ><br />
            <h6>Ryan Internation School,Raipur</h6>
            <h6>Percentage: 91%</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="CBSE, 2021" />
        </div>

        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text"
              >Matriculation</span
            ><br />
            <h6>Krishna Public School, Raipur</h6>
            <h6>Percentage: 89.4%</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="CBSE, 2019" />
        </div>

        <v-divider dark></v-divider>

        <!-----------Experience------------------->
        <div class="resume-content-heading">
          <IconsConcentricCircles />
          <h5>Experience</h5>
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <div class="heading-and-year">
              <span class="resume-content-sub-heading-education-text"
                >Web-Developer Intern</span
              ><ResumeComponentsChipResumeButtons label="June'23 - August'23" />
            </div>
            <h6>GIM Info Solutions Private Limited</h6>
            <h6>
              - Created reusable components using Vue.js and Vuetify for a new
              web app theme project, ensuring consistent UI and smoother
              development.
            </h6>
            <h6>
              - Strengthened front-end development skills while contributing to
              real-world projects and staying updated with industry trends.
            </h6>
          </div>
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <div class="heading-and-year">
              <span class="resume-content-sub-heading-education-text"
                >Lead CP, GDSC</span
              ><ResumeComponentsChipResumeButtons label="2022-2023" />
            </div>
            <h6>Google Developer's Student Club, MUST</h6>
            <h6>
              - Led competitive Programming club, organized competitions,
              conducted CP sessions, mentored juniors and peers to enhance
              coding skills.
            </h6>
            <h6>
              - Played key role in driving educational initiatives, showcasing
              leadership and organizational skills.
            </h6>
            <h6>
              - Played key role in driving educational initiatives, showcasing
              leadership and organizational skills.
            </h6>
          </div>
        </div>
      </div>

      <div class="ressume-contents-right">
        <div class="resume-content-heading">
          <IconsConcentricCircles />
          <h5>Skill Sets</h5>
        </div>
        <div class="resume-content-sub-heading">
          <ResumeComponentsSkillSets />
        </div>
        <br />
        <v-divider dark></v-divider>

        <div class="resume-content-heading">
          <IconsConcentricCircles />
          <h5>Achievements</h5>
        </div>
        <div class="resume-content-sub-heading">
          <ResumeComponentsAchievements />
        </div>
        <br /><v-divider dark></v-divider><br />
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
  max-width: 90%;
  background-color: #eee0c9;
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
  color: #333333;
  padding: 8px 0px;
}

.resume-contents-left {
  padding: 0px 64px 0px 0px;
}
.resume-content-heading {
  display: flex;
  align-items: center;
}
h5 {
  font-size: 38px;
  font-weight: 700;
  line-height: 42px;
  color: #ed510f;
  padding: 8px 8px;
}
.resume-content-sub-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.resume-content-sub-heading-education {
  padding: 16px 0px;
}
.resume-content-sub-heading-education-text {
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  color: #333333;
}
h6 {
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #3e3d3d;
  padding: 4px 0px;
}
.heading-and-year {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.resume-contents-right {
  padding: 0px 0px 0px 64px;
}
@media only screen and (min-width: 1200px) {
  .resume-contents {
    padding-top: 64px;
    display: flex;
    justify-content: space-evenly;
  }
}
@media (max-width: 480px) {
  .about-me-card {
    padding: 16px !important;
  }

  h3 {
    font-size: 24px;
    width: auto;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 24px;
  }

  h6 {
    font-size: 14px;
  }
  .resume-content-sub-heading {
    display: block;
  }
  .resume-contents[data-v-0cb6eaa8] {
    padding-top: 64px;
    display: flex;
    justify-content: space-evenly;
    align-content: stretch;
    flex-wrap: wrap;
  }

  .resume-content-sub-heading-education-text,
  h6 {
    font-size: 12px;
    padding: 2px 0;
  }
}
@media (max-width: 480px) {
  .resume-contents-right {
    padding: 0px;
  }
  .resume-content-sub-heading {
    display: block;
  }
}
</style>
