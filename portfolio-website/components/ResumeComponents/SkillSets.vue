<template>
  <v-card class="card-class" max-width="500">
    <v-toolbar color="#EB510f" dark>
      <v-toolbar-title class="skills-heading">Technical Skills</v-toolbar-title>
    </v-toolbar>

    <v-list class="list-class" outlined>
      <v-list-item v-for="(item, index) in items" v-bind:key="index">
        <v-list-item-content>
          <v-list-item-title class="title-text">{{
            item.title
          }}</v-list-item-title>
          <v-list-item-title class="subtitle-text">{{
            item.subtitle
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider v-if="index < items.length - 1" :key="index" dark></v-divider>
    </v-list>
    <v-toolbar color="#EB510f" dark>
      <v-toolbar-title class="skills-heading">Soft Skills</v-toolbar-title>
    </v-toolbar>

    <v-list two-line class="list-class" outlined>
      <v-list-item v-for="(item2, index) in items2" v-bind:key="index">
        <v-list-item-content>
          <v-list-item-title class="title-text">{{
            item2.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider v-if="index < items2.length - 1" :key="index" dark></v-divider>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ResumeComponentsSkillSets",
  data() {
    return {
      activeButton: null,
      items: [
        {
          subtitle: `C, C++, Python, Javascript`,
          title: "Programming",
        },
        {
          subtitle: `HTML5, CSS, Bootstrap, Node.js, Vue.js, Vuetify, Nuxt.js.`,
          title: "Web Technologies",
        },
        {
          subtitle: `MySQL`,
          title: "Database Management",
        },
        {
          subtitle: `Git, Figma, Visual Studio,`,
          title: "Miscellaneous",
        },
      ],
      items2: [
        {
          title: "Problem Solving, Team Work, Leadership, Time Management. ",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300&display=swap");
.skills-heading {
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  color: #e5e5e5;
  padding: 4px 0px;
}
.list-class {
  background-color: #eee0c9 !important;
}
.title-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #333333;
  text-align: justify;
  text-align: justify;
  padding: 4px 0px;
}
.subtitle-text {
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  color: #474545;
  padding: 4px 0px;
}
.v-list-item__content {
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 4px 0 !important;
}
.v-sheet.v-list {
  border-radius: 0;
  padding: 0 !important;
  border: 1px solid #3a39396c;
  border-top: none !important;
}
@media (max-width: 1000px) {
  .skills-heading {
    font-size: 16px;
  }
  .title-text,
  .subtitle-text {
    font-size: 14px;
  }
}

@media (max-width: 500px) {
  .list-class {
    padding: 8px !important;
  }
  .card-class{
    width: 300px !important;
  }
}
</style>
