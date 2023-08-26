<template>
  <div>
    <v-dialog v-model="dialog" width="600px" dark color="#000">
      <template v-slot:activator="{ on, attrs }">
        <v-card
          elevation="6"
          class="blog-card"
          color="#1c1c1c"
          v-bind="attrs"
          v-on="on"
        >
          <div class="center-image">
            <img
              src="~/assets/Images/FlipkartWordCloud.png"
              width="300px"
              height="auto"
              class="grey darken-4"
            />
          </div>
          <v-divider dark></v-divider>
          <v-card-title class="short-title">
            <span class="title-text"
              >Flipkart Rejection: Rising Stronger from Within.</span
            >
          </v-card-title>
        </v-card>
      </template>
      <perfect-scrollbar dark>
      <v-card color="#292828" class="blog-card-content">
        <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
          <v-card-text>
            My First Interview Experience at Flipkart <br>
            Date: April 18, 2023<br>
            (Tuesday) Approaching the interview, I battled anxiety but reminded
            myself to give it my best shot. As the interview commenced, the
            interviewer introduced the process and requested introductions from
            both of us. His reassurance to not worry and his willingness to
            guide me through challenges eased my mixed emotions of excitement,
            happiness, nervousness, and fear.<br>As we delved into the
            conversation, the topic of trees emerged. I affirmed my familiarity
            with the subject and answered his questions. His attentive nods and
            affirmations boosted my confidence. He then presented the first
            question, a string-related problem. My initial solution was
            acknowledged as correct, followed by a request for optimization,
            which I successfully provided. During the interaction, he prompted
            me to consider time and space complexities, leading to code
            implementation with base cases that he appreciated. Notably, I had
            underestimated myself for the role, but his understanding demeanor
            helped me regain composure and stay on track.<br> Transitioning to the
            next question involving trees, I discussed my approach, receiving
            approval. The interviewer's collaborative nature stood out; he
            offered hints and engaged in discussions, redirecting me when I
            strayed. This support enabled me to conquer the second question,
            despite minor coding errors along the way.<br> A highlight was the
            interviewer's refusal to let me give up, maintaining an open line of
            communication throughout. The interview, lasting an hour, concluded
            on a positive note. He advised boosting confidence and consistent
            practice on platforms like LeetCode. His courteous responses to my
            queries and suggestions were valuable.<br> Reflecting on the outcome, I
            received a rejection. The initial sadness and subsequent
            conversations with my parents, best friend, and senior about
            overcoming rejection highlighted the importance of support. The
            realization that I'm surrounded by motivating and trustworthy
            individuals lifted my spirits. After a few hours, my emotions
            steadied, and I resolved to redouble my efforts with unwavering
            commitment, aiming to achieve my aspirations. ❤️
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">
              Agree
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
};
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />

<style scoped>
.ps {
  height: calc(100vh - 6rem);
  overflow-x: hidden;
}
.blog-card-content{
     padding: 16px 32px;
}
.title-text {
  color: #ffffff;
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
</style>
