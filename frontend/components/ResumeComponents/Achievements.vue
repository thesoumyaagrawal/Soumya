<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color='item.color'
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color" dark>
        <v-card-title class="text-h6 head"> {{item.title}} </v-card-title>
        <v-card-text class="white text--primary">
          <p class="description">
            {{ item.content }}
          </p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
    name: "ResumeComponentsAchievements",
  data: () => ({
    items: [
      {
        color: "#ED510F",
        icon: "mdi-star",
        title: 'University Rank 34',
        content: 'Geeks for Geeks among 500+ registered students'
      },
      {
        color: "#ED510F",
        icon: "mdi-star",
        title: 'Finalist (top 170)',
        content: 'Flipkart Runway Season3 among 16K+ candidates.'
      },
      {
        color: "#ED510F",
        icon: "mdi-star",
        title: '1st Runner-up',
        content: 'Zapricon Hackathon conducted by IIT-Bhilai.'
      },
    ],
  }),
};
</script>

<style scoped>
.head{
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  padding: 8px 8px !important;
}
.description{
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 21px !important;
  padding: 8px 0px !important;
}
.v-card__title + .v-card__subtitle, .v-card__title + .v-card__text{
  padding-bottom: 0px !important;
}
.v-application .white {
    background-color: #F1F0E8 !important;
    border-color: #FFFFFF !important;
}
</style>
