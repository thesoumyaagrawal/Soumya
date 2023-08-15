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
        <v-card-title class="text-h6"> Lorem Ipsum Dolor </v-card-title>
        <v-card-text class="white text--primary">
          <p>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
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
        color: "#ed510f",
        icon: "mdi-star",
      },
      {
        color: "#ed510f",
        icon: "mdi-star",
      },
      {
        color: "#ed510f",
        icon: "mdi-star",
      },
      {
        color: "#ed510f",
        icon: "mdi-star",
      },
    ],
  }),
};
</script>
