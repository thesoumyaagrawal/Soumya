<template>
  <v-card class="mx-auto my-12 about-me-card">
    <div class="resume-heading">
      <h4>Resume</h4>
      <h3>Combination of Skills & Experience</h3>
    </div>
      <!------------------------------------------>
    <div class="resume-contents">
      <div class="resume-contents-left">
        <div class="resume-cotent-heading">
          <IconsConcentricCircles />
          <h5>Education</h5>
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text"
              >B.Tech. Computer Science Engineering</span
            ><br />
            <h6>Mody University Of Science & Technology</h6>
            <h6>CGPA: 8.16 (till IV Semester)</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="2021-2025" />
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
        <!------------------------------------------>
        <div class="resume-cotent-heading">
          <IconsConcentricCircles />
          <h5>Experience</h5>
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text"
              >Web-Developer Intern</span
            ><br />
            <h6>Gimbooks</h6>
            <h6>
              - Created reusable components using Vue.js and Vuetify for a new
              web app theme project, ensuring consistent UI and smoother
              development.
            </h6>
            <h6>
              - Collaborated on integrating Nuxt.js for server-side rendering,
              enhancing website performance and SEO optimization.
            </h6>
            <h6>
              - Strengthened front-end development skills while contributing to
              real-world projects and staying updated with industry trends.
            </h6>
          </div>
          <ResumeComponentsChipResumeButtons label="June'23 - August'23" />
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <span class="resume-content-sub-heading-education-text"
              >Lead Competitive Programming</span
            ><br />
            <h6>Google Developer's Student Club, MUST</h6>
            <h6>
              - Led coding club, organized competitions, conducted CP sessions,
              and mentored to enhance coding skills of juniors and peers.
            </h6>
            <h6>
              - Played key role in driving educational initiatives, showcasing
              leadership and organizational skills.
            </h6>
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
        <br />

        <v-divider dark></v-divider>

        <div class="resume-cotent-heading">
          <IconsConcentricCircles />
          <h5>Extracurriculars</h5>
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <h6>2nd Runner-up</h6>
            <h6>
              in College-Mini-Vlog making Competition organized at University
              level.
            </h6>
          </div>
          <ResumeComponentsChipResumeButtons label="2023" />
        </div>

        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <h6>Winner, Group Discussion</h6>
            <h6>Topic "Metaverse" organized by the IEEE MUST Chapter.</h6>
          </div>
          <ResumeComponentsChipResumeButtons label="2022" />
        </div>

        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <h6>Awarded with High Recommendation,</h6>
            <h6>
              Model United Nations organised by United Nationalist of India.
            </h6>
          </div>
          <ResumeComponentsChipResumeButtons label="2019" />
        </div>
        <div class="resume-content-sub-heading">
          <div class="resume-content-sub-heading-education">
            <h6>
              Participated in various Debate competitions, Chess competitions, Art Craft & Painting
              competitions, Group Disussions, Hackathons & Quizes.
            </h6>
          </div>
        </div>
        <v-divider dark></v-divider>
      </div>
    </div>
    <br><v-divider dark></v-divider><br>
    <div class="resume-cotent-heading">
          <IconsConcentricCircles />
          <h5>Achievements</h5>
        </div>
    <ResumeComponentsAchievements />
  </v-card>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap");
.about-me-card {
  border-radius: 16px !important;
  padding: 48px 36px !important;
  max-height: 540vh;
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
  padding: 0px 64px 0px 0px;
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
  padding: 0px 0px 0px 64px;
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
  .resume-contents {
    padding: 0;
  }
  
  .resume-cotent-heading {
    align-items: flex-start;
  }
  
  .resume-content-sub-heading-education,
  .resume-content-sub-heading-education-text,
  h6 {
    font-size: 12px;
    padding: 2px 0;
  }
  .resume-content-sub-heading {
    display: inline-block;
    justify-content: start;
  }

}
</style>
