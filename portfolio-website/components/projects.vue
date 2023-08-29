<template>
    <v-card class="mx-auto my-12 about-me-card">
      <div class="about-me-left">
        <div class="about-me-heading">My Blogs</div>
        <div class="about-me-title">Latest Tips, Tricks and Updates.</div>
      </div>
      <br /><br />
  
      <v-item-group>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <BlogsComponentsBlog1
                label="Flipkart Rejection: Rising Stronger from Within."
                url="FlipkartWordCloud.png"
                content1="My First Interview Experience April 18, 2023"
                content2="Approaching the interview, I battled anxiety but remained committed
              to giving my best. As the interview began, introductions took place,
              and the interviewer's reassuring demeanor eased my mix of
              emotions—excitement, happiness, nervousness, and fear."
                content3="Our
              conversation delved into trees, a topic I confidently engaged in,
              answering questions with precision. The interviewer's nods bolstered
              my confidence. The first question, involving strings, validated my
              initial solution, followed by a request for optimization, which I
              promptly provided, considering time and space complexities. His
              empathetic guidance calmed my self-doubt. Transitioning to the next
              tree-related question, my approach was met with approval. The
              interviewer's collaborative style helped me conquer the question,
              despite minor coding errors, as he offered hints and realigned my
              focus."
                content4="A standout moment was his refusal to let me give up,
              maintaining an open channel throughout the interview. The session
              ended positively, with advice on confidence-building and consistent
              practice. His courteous support proved invaluable. Despite
              subsequent rejection, conversations with loved ones emphasized
              resilience. Recognizing their motivation lifted my spirits. After a
              brief emotional pause, I committed to redoubling efforts, pursuing
              aspirations unwaveringly."
              />
            </v-col>
  
            <v-col cols="12" md="4">
              <BlogsComponentsBlog1
                label="Internship Chronicles: Learn, Grow & Succeed."
                url="InternshipWordCloud.png"
                content1="GimBooks: A Window into Professional Growth"
                content2="My tenure as a Web Developer Intern at GimBooks has been a journey of immense learning and professional evolution. 
  Working alongside my talented colleagues, I dived into diverse projects that expanded my skills and provided 
  invaluable insights into organizational dynamics."
                content3="GimBooks environment was a blend of innovation and practicality. 
  I had the freedom to explore new technologies and approaches, while also gaining a deeper understanding of how an
  organization functions as a cohesive unit. The experience of working on tangible projects enriched my technical skills and problem-solving abilities.
  Engaging in coding sessions and collaborative discussions showcased the power of teamwork."
                content4="The exposure to various facets of development life cycle deepened my appreciation for the complexities of the field.
  As I step into the next phase of my career, the lessons I've learned at GimBooks will remain invaluable. 
  This chapter has not only equipped me with technical skills but also instilled a sense of adaptability and teamwork that I'll carry forward. 
  My gratitude to GimBooks and the team for this enlightening experience."
              />
            </v-col>
  
            <v-col cols="12" md="4">
              <BlogsComponentsBlog1
                label="Everything's New: The Excitement of Day-1"
                url="CollegeWordCloud.png"
                content1="The Grand First Day of College: A Comedy Full of Errors"
                content2="So, picture this: I strut into my college 10 whole minutes early, like I'm the hero of my own school-days sequel. But guess what? Welcome to the Covid-era batch, where being early to an online lecture is like being the only one at a virtual party. Well, anyway, I finally make it there, and surprise, surprise, every face is as new as the unread messages in my inbox." 
  content3="Now, imagine being fashionably late to the admission game. Yeah, that's me. Groups formed like cliques in a teen drama, leaving me solo in my newbie status. Homesickness hits me like a ton of bricks, and I'm here questioning if I’m cut out for this.
  Oh, ragging – the horror movie plot twist. Paranoid much? That was me. A bubble-wrap kid, pampered by the family, now navigating a real-world maze." 
  content4="First mission: get food from the mess. Brave little me, striding alone, pretending I’m conquering the world. 
  The classrooms were a different realm altogether. I had joined 45 days late, so the Matrix might as well have been more familiar. The prof enters, starts dropping C bombs (that's C programming, folks) and throws a pattern printing challenge my way. Blank stare. Exit stage left. Cue the dramatics. I had a full-on meltdown, 'Am I an alien in this coder's galaxy?'"
  content5="The savior of the day? The evening campus tour. Suddenly, Hogwarts seemed to be competing with my college. Lush green, peacocks roaming around like they own the place – like I said, Harry Potter who? Made a few pals, too – probably by accidentally bumping into people and then trying to act smooth. We even ventured out for dinner like a squad on a conquest. Nightfall, and I crashed in my room like I'd just finished running a marathon.
  And that, my friends, was my 'spectacular' first day. Cue the confetti and fireworks. If that day were a movie, it would've been a comedy with a sprinkle of sarcasm and a dash of excitement. Here's to hoping the sequel is a bit less chaotic.
  "
              />
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
    color: #ffffff;
    padding: 16px 0px;
  }
  </style>
  