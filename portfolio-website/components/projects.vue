<template>
    <v-card class="mx-auto my-12 about-me-card">
      <div class="about-me-left">
        <div class="about-me-heading">Projects</div>
        <div class="about-me-title">My Journey in Programming and Web Development</div>
      </div>
      <br /><br />
  
      <v-item-group>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <BlogsComponentsProjects1
                label="Soumya's Saga : Web Adventures Unveiled"
                url="portfolio.png"
                content1="Project Description, Technology used, Outcomes and Future Scope"
                content2="I have created my portfolio with the aim of presenting my skills and projects in a compelling and user-friendly manner. I have used Vuetify 2, Vue 2, and Nuxt 2 which allowed me to achieve a dynamic and responsive design, ensuring that visitors can easily explore my work across various devices. I wanted to showcase my proficiency in front-end development and demonstrate how I implement modern web technologies."
                content3="Overall, my portfolio serves as a tangible representation of my skills, creativity, and dedication to delivering visually appealing and functional web solutions."
                content4="Looking ahead, I envision several exciting possibilities for further enhancing my portfolio I'm considering integrating backend technologies to create interactive features like dynamic Impression page or personalized user experiences.Overall, my goal is to continuously evolve my portfolio to reflect the dynamic nature of web development, ensuring it remains a relevant and impressive representation of my capabilities while also delivering a consistently exceptional user experience."
                />
            </v-col>
  
            <v-col cols="12" md="4">
              <BlogsComponentsProjects1
                label="Sorting Algorithm Visualizer using Vue.js"
                url="Algorithms.jpg"
                content1="Project Description, Technology used, Outcomes and Future Scope"
                content2="The Vue.js Sorting Algorithm Visualizer is an interactive web tool developed to demonstrate sorting algorithms' functionality. Built on the Vue.js framework, the tool allows users to observe sorting algorithms in action. Users can input data or generate random datasets, select sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort, and witness the sorting process with real-time animations. This visualizer enhances educational experiences by providing an intuitive understanding of complex sorting algorithms, aiding learners in connecting theory with practical execution."
                content3="The tool's significance lies in its educational value and algorithmic comprehension. It serves as a powerful aid for students and developers new to sorting algorithms, enabling them to comprehend algorithms more effectively through visual representation. Additionally, it promotes algorithmic intuition by showcasing step-by-step sorting processes and facilitating informed decisions on algorithm selection for specific data scenarios."
                content4="Looking ahead, potential improvements include incorporating variations of sorting algorithms, displaying time complexity visuals, enabling user-adjustable parameters, offering real-time code display, and providing step-by-step explanations. "
                content5="For more please visit my Github Account...."
                >
          </BlogsComponentsProjects1>
              </v-col>
  
              <v-col cols="12" md="4">
              <BlogsComponentsProjects1
                label="Small Seeds to Big Ideas: My Mini Projects Journey"
                url="other.jpg"
                content1="I have undertaken several hands-on projects that showcase my practical skills in web development and programming. Starting with a basic Calculator created using HTML, CSS, and JavaScript, I familiarized myself with the fundamentals of these technologies and their interactions. For a more collaborative experience, I participated in a hackathon where I took charge of developing the frontend for a Student Institute Application. This real-world application allowed me to grasp the practical aspects of web development, honing my ability to create functional and visually appealing interfaces."
              content2="Advancing into my second year, I collaborated on a team project that required a more intricate understanding of programming. We crafted an Algorithm Visualizer using C++, enabling users to comprehend complex algorithms through interactive demonstrations. This endeavor showcased my teamwork, problem-solving, and algorithmic thinking skills. Currently, I'm dedicated to crafting my Art Portfolio website, which emphasizes both creativity and technical finesse. It will not only showcase my artwork but also allow users to place customized orders, underscoring my ability to merge artistic vision with web functionality."
              content3="Through these projects, I've established a foundation in various programming languages and web technologies while gaining practical experience in software development. The range of projects, from basic to more complex, highlights my growth and adaptability as a developer. With each endeavor, I've not only improved my technical skills but also enhanced my collaborative aptitude, problem-solving abilities, and creative thinking. These projects collectively demonstrate my journey from simple coding exercises to impactful, real-world applications."  
              >
          </BlogsComponentsProjects1>
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
    color: #333333;
    padding: 16px 0px;
  }
  </style>
  