<template>
  <div>
    <a href="#top-anchor" id="top-anchor" style="position: absolute; top: 0;"></a>
    <div class="heading">
      <socialicons />
    </div>
    <div class="home-page">
      <div class="left">
        <intro />
        <div class="buttons-wrapper">
          <div
            class="container"
            :class="{ active: activeButton === 'About Me' }"
          >
            <a href="#about">
              <titleButtons
                label="About Me"
                :isActive="activeButton === 'About Me'"
                @buttonClicked="handleButtonClicked('About Me')"
              >
                <template #buttonIcon>
                  <IconsAboutMeIcon
                    :stroke="
                      activeButton === 'About Me' ? '#FFFFFF' : '#ED510F'
                    "
                  />
                </template>
              </titleButtons>
            </a>
          </div>

          <div class="container" :class="{ active: activeButton === 'Resume' }">
            <a href="#resume">
              <titleButtons
                label="Resume"
                :isActive="activeButton === 'Resume'"
                @buttonClicked="handleButtonClicked('Resume')"
              >
                <template #buttonIcon>
                  <IconsResumeIcon
                    :stroke="activeButton === 'Resume' ? '#FFFFFF' : '#ED510F'"
                  />
                </template>
              </titleButtons>
            </a>
          </div>

          <div
            class="container"
            :class="{ active: activeButton === 'Projects' }"
          >
            <a href="#projects">
              <titleButtons
                label="Projects"
                :isActive="activeButton === 'Projects'"
                @buttonClicked="handleButtonClicked('Projects')"
              >
                <template #buttonIcon>
                  <IconsProjectsIcon
                    :stroke="
                      activeButton === 'Projects' ? '#FFFFFF' : '#ED510F'
                    "
                  />
                </template>
              </titleButtons>
            </a>
          </div>

          <div class="container" :class="{ active: activeButton === 'Blogs' }">
            <a href="#blogs">
              <titleButtons
                label="Blogs"
                :isActive="activeButton === 'Blogs'"
                @buttonClicked="handleButtonClicked('Blogs')"
              >
                <template #buttonIcon>
                  <IconsBlogsIcon
                    :stroke="activeButton === 'Blogs' ? '#FFFFFF' : '#ED510F'"
                  />
                </template>
              </titleButtons>
            </a>
          </div>

          <div
            class="container"
            :class="{ active: activeButton === 'Impressions' }"
          >
          <a href="#impressions">
            <titleButtons
              label="Impressions"
              :isActive="activeButton === 'Impressions'"
              @buttonClicked="handleButtonClicked('Impressions')"
            >
              <template #buttonIcon>
                <IconsTestimonialsIcon
                  :stroke="
                    activeButton === 'Impressions' ? '#FFFFFF' : '#ED510F'
                  "
                />
              </template>
            </titleButtons>
          </a>
          </div>

          
        </div>
      </div>

      <div class="right">
        <myImage1 />
      </div>
    </div>

<div>
    <div id="about">
      <aboutMe v-show="activeButton === 'About Me'" />
    </div>
    <div id="resume">
      <resume v-show="activeButton === 'Resume'" />
    </div>
    <div id="blogs">
      <blogs v-show="activeButton === 'Blogs'" />
    </div>
    <div id="impressions">
      <impressions v-show="activeButton === 'Impressions'" />
    </div>
    <div id="contact">
      <contactMe v-show="activeButton === 'Contact Me'" />
    </div>
    <div id="projects">
      <projects v-show="activeButton === 'Projects'" />
    </div>
  </div>


  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      activeButton: null,
    };
  },
  methods: {
    handleButtonClicked(buttonLabel) {
      this.activeButton = buttonLabel;
    },
    deactivatePreviousButtons() {
      this.activeButton = null; // Deactivate the previous button
    },
  },
  mounted(){
    this.$router.push({
          name: '',
        })
  }
};
</script>

<style scoped>
.home-page {
  display: flex;
  padding-top: 0;
  margin-top: 0;
}
.left {
  width: 70%;
}
.right {
  width: 30%;
}
.buttons-wrapper {
  z-index: 1;
  padding-left: 52px;
}
.buttons-wrapper .container {
  display: inline-block;
  height: 90px;
  width: 90px;
  margin: 0 1px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.buttons-wrapper .container:nth-child(1):hover,
.buttons-wrapper .container:nth-child(1).active {
  width: 160px;
}
.buttons-wrapper .container:nth-child(2):hover,
.buttons-wrapper .container:nth-child(2).active {
  width: 148px;
}
.buttons-wrapper .container:nth-child(3):hover,
.buttons-wrapper .container:nth-child(3).active {
  width: 151px;
}
.buttons-wrapper .container:nth-child(4):hover,
.buttons-wrapper .container:nth-child(4).active {
  width: 128px;
}
.buttons-wrapper .container:nth-child(5):hover,
.buttons-wrapper .container:nth-child(5).active {
  width: 186px;
}
.buttons-wrapper .container:nth-child(6):hover,
.buttons-wrapper .container:nth-child(6).active {
  width: 156px;
}
@media screen and (max-width: 600px) {
  .buttons-wrapper {
    padding-left: 0; /* Remove padding to center align buttons */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left {
    width: 55%;
  }

  .buttons-wrapper .container {
    width: 100%;
    margin: 4px 0;
  }
}
</style>
