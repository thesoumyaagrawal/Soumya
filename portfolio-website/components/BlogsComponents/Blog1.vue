<template>
  <div>
    <v-dialog v-model="dialog" width="900px" overlay-opacity="0.9">
      <template v-slot:activator="{ on, attrs }">
        <v-card
          elevation="6"
          class="blog-card"
          color="#F1F0E8"
          v-bind="attrs"
          v-on="on"
        >
          <div class="center-image">
            <img
              :src="getImageUrl()"
              width="300px"
              height="auto"
            />
          </div>
          <v-divider></v-divider>
          <v-card-title class="short-title">
            <span class="title-text">{{ label }}</span>
          </v-card-title>
        </v-card>
      </template>
      <perfect-scrollbar dark>
        <v-card color="#FEFAE0" class="blog-card-content">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <slot name="gallery"></slot>
          <v-card-text class="content-text">
          {{ content1 }}<br><br>
          {{ content2 }}<br><br>
          {{ content3 }}<br><br>
          {{ content4 }}<br><br>
          {{ content5 }}
          </v-card-text>
          <v-divider></v-divider><br>

          <v-card-actions>
            <v-spacer></v-spacer>
            <span class="action-text">Was it Insightful ?</span>
            <v-btn color="#ED510F" text @click="dialog = false">
              Yes.
            </v-btn>
            <v-btn color="#ED510F" text @click="dialog = false">
              No.
            </v-btn>
          </v-card-actions>
        </v-card>
      </perfect-scrollbar>
    </v-dialog>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
export default {
  name: "BlogsComponentsBlog1",
  components: {
    PerfectScrollbar,
  },
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    label:{
      type: String,
      default: "hello"
    },
      content1: {
        type: String,
        default: "",
      },
      content2: {
        type: String,
        default: "",
      },
      content3: {
        type: String,
        default: "",
      },
      content4: {
        type: String,
        default: "",
      },
      content5: {
        type: String,
        default: "",
      },
      url:{
        type: String,
        default: "FlipkartWordCloud.png"
      },
  },
  methods: {
    getImageUrl() {
      return require(`@/assets/Images/${this.url}`);
    },
  }
};
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />

<style scoped>
.action-text{
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    padding-right: 8px;
}
.ps {
  height: calc(100vh - 6rem);
  overflow-x: hidden;
}
.blog-card-content {
  padding: 16px 32px;
}
.title-text {
  color: #333333;
  font-size: 21px;
  line-height: 24px;
  font-weight: 500;
  word-break: normal;
}
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0; /* Adjust padding as needed */
}
.content-text{
  color: #333333 !important;
  font-weight: 400 !important;
  font-size: 18px;
  text-align: justify;
  line-height: 24px;
}
@media screen and (max-width: 450px) {
  img{
    width: 170px;
  }
}
@media screen and (max-width: 1250px) {
  img{
    width: 220px;
  }
}
</style>
