<template>
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-toolbar
        color="#EB510f"
        dark
      >
        <v-toolbar-title class="skills-heading">Technical Skills</v-toolbar-title>
      </v-toolbar>
  
      <v-list class="list-class" outlined>
      
          <template v-for="(item, index) in items">
            <v-list-item>
                <v-list-item-content >
                  <v-list-item-title class= "title-text" v-text="item.title"></v-list-item-title>
                  <v-list-item-subtitle class= "subtitle-text" v-text="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
  
            <v-divider
              v-if="index < items.length - 1"
              :key="index"
              dark
            ></v-divider>
          </template>
      
      </v-list>

      <v-toolbar
        color="#EB510f"
        dark
      >
        <v-toolbar-title class="skills-heading">Soft Skills</v-toolbar-title>
      </v-toolbar>
  
      <v-list two-line class="list-class" outlined>
      
          <template v-for="(item2, index) in items2">
            <v-list-item>
                <v-list-item-content >
                  <v-list-item-title class= "title-text" v-text="item2.title"></v-list-item-title>
                  <v-list-item-subtitle v-text="item2.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
  
            <v-divider
              v-if="index < items2.length - 1"
              :key="index"
              dark
            ></v-divider>
          </template>
      
      </v-list>
    </v-card>

</template>

<script>
export default{
    name: "ResumeComponentsSkillSets",
  data() {
    return {
      activeButton: null,
      items: [
      {
        subtitle: `C, C++, Python, Javascript`,
        title: 'Programming',
      },
       {
        subtitle: `HTML5, CSS, Node.js, Express, Vue.js, Vuetify, Nuxt.js.`,
        title: 'Web Technologies',
      },
       {
        subtitle: `MySQL, MongoDB`,
        title: 'Database Management',
      },
       {
        subtitle: `Git, Figma, Visual Studio,`,
        title: 'Miscellaneous',
      },
    ],
    items2: [
      {
        title: 'Problem Solving, Team Work, Leadership, Time Management. ',
      },
    ],
    };
  },
 
   
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300&display=swap');
.skills-heading{
    font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  color: #e5e5e5;
  padding: 4px 0px;
}
  .list-class{
    background-color: #292828 !important;
  }
  .title-text{
    font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  color: #e5e5e5;
  padding: 4px 0px;
  }
  .subtitle-text{
    font-size: 16px;
  font-weight: 200;
  line-height: 20px;
  color: #FFFFFF;
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
    border: 1px solid #ffffff6c;
    border-top: none !important;
}
</style>