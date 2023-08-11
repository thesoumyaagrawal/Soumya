<template>
  <div>
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
            <a href="#element">
              <titleButtons
                label="About Me"
                :isActive="activeButton === 'About Me'"
                @buttonClicked="handleButtonClicked('About Me')"
              >
                <template #buttonIcon>
                  <IconsSample
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
                  <IconsSample
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
            <titleButtons
              label="Projects"
              :isActive="activeButton === 'Projects'"
              @buttonClicked="handleButtonClicked('Projects')"
            >
              <template #buttonIcon>
                <IconsSample
                  :stroke="activeButton === 'Projects' ? '#FFFFFF' : '#ED510F'"
                />
              </template>
            </titleButtons>
          </div>

          <div class="container" :class="{ active: activeButton === 'Blogs' }">
            <titleButtons
              label="Blogs"
              :isActive="activeButton === 'Blogs'"
              @buttonClicked="handleButtonClicked('Blogs')"
            >
              <template #buttonIcon>
                <IconsSample
                  :stroke="activeButton === 'Blogs' ? '#FFFFFF' : '#ED510F'"
                />
              </template>
            </titleButtons>
          </div>

          <div
            class="container"
            :class="{ active: activeButton === 'Testimonials' }"
          >
            <titleButtons
              label="Testimonials"
              :isActive="activeButton === 'Testimonials'"
              @buttonClicked="handleButtonClicked('Testimonials')"
            >
              <template #buttonIcon>
                <IconsSample
                  :stroke="
                    activeButton === 'Testimonials' ? '#FFFFFF' : '#ED510F'
                  "
                />
              </template>
            </titleButtons>
          </div>

          <div
            class="container"
            :class="{ active: activeButton === 'Contact Me' }"
          >
            <titleButtons
              label="Contact Me"
              :isActive="activeButton === 'Contact Me'"
              @buttonClicked="handleButtonClicked('Contact Me')"
            >
              <template #buttonIcon>
                <IconsSample
                  :stroke="
                    activeButton === 'Contact Me' ? '#FFFFFF' : '#ED510F'
                  "
                />
              </template>
            </titleButtons>
          </div>
        </div>
      </div>

      <div class="right">
        <myImage1 />
      </div>
    </div>

    <div id="element">
      <aboutMe v-show="activeButton === 'About Me'" />
    </div>
    <div id="resume">
      <resume v-show="activeButton === 'Resume'" />
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
.buttons-wrapper .container:nth-child(1):hover {
  width: 160px;
}
.buttons-wrapper .container:nth-child(2):hover {
  width: 148px;
}
.buttons-wrapper .container:nth-child(3):hover {
  width: 151px;
}
.buttons-wrapper .container:nth-child(4):hover {
  width: 128px;
}
.buttons-wrapper .container:nth-child(5):hover {
  width: 186px;
}
.buttons-wrapper .container:nth-child(6):hover {
  width: 156px;
}
.buttons-wrapper .container:nth-child(1).active {
  width: 160px;
}
.buttons-wrapper .container:nth-child(2).active {
  width: 148px;
}
.buttons-wrapper .container:nth-child(3).active {
  width: 151px;
}
.buttons-wrapper .container:nth-child(4).active {
  width: 128px;
}
.buttons-wrapper .container:nth-child(5).active {
  width: 186px;
}
.buttons-wrapper .container:nth-child(6).active {
  width: 156px;
}
</style>
