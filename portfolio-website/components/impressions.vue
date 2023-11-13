<template>
  <!-- data fetch -->
  <!-- cards -->
  <v-card class="mx-auto my-12 about-me-card">
    <div class="about-me-left">
      <div class="about-me-heading">Impressions</div>
      <div class="about-me-title">What People Say About me</div>
    </div>
    <br /><br />

    <v-card class="mx-auto" max-width="900" color="transparent" elevation="2">
      <v-toolbar color="#ed510f">
        <v-toolbar-title class="toolbar">Discover</v-toolbar-title>
        <v-spacer> </v-spacer>
        <impressionForm />
      </v-toolbar>
      <perfect-scrollbar dark>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.id" cols="12">
              <v-card color="#F1F0E8">
                <v-card-title>
                  <IconsQuotesLeftIcon></IconsQuotesLeftIcon>
                </v-card-title>

                <v-card-text class="impression-message">
                  {{ card.comment }}
                </v-card-text>
                <span class="quote-right-icon"><IconsQuotesRightIcon /> </span>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar
                      color="grey darken-3"
                      v-if="card.gender === 'Male'"
                    >
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-avatar color="grey darken-3" v-else>
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ card.name }}</v-list-item-title>
                      <v-list-item-title>{{
                        card.profession
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </perfect-scrollbar>
    </v-card>
  </v-card>
</template>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />

<script>
import axios from "axios";
import { PerfectScrollbar } from "vue2-perfect-scrollbar";

export default {
  components: {
    PerfectScrollbar,
  },
  data: () => ({
    cards: [],
  }),
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://soumya-agrawal-portfolio.adaptable.app/api/posts"
        );
        this.cards = response.data.reverse();
        // this.cards = response.data; // Assuming the response is an array of card data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.ps {
  height: calc(100vh - 6rem);
  overflow-x: hidden;
}
.toolbar {
  font-size: 21px !important;
  font-weight: 600 !important;
  line-height: 24px !important;
  color: #ffffff;
}
.button-text {
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 18px !important;
  letter-spacing: 0;
  color: #333333;
}
.about-me-card {
  border-radius: 16px !important;
  padding: 48px 36px !important;
  min-height: 140vh;
  max-width: 90%;
  background-color: #eee0c9;
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
.impression-message {
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 0px;
  line-height: 18px;
  color: #333333;
  text-align: justify;
}
.quote-right-icon {
  display: flex;
  justify-content: flex-end;
  padding: 0px 8px 0px 0px;
}
.flex-12 {
  flex: 12;
}
</style>
