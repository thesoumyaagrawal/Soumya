<template>
  <div>
    <div class="intro">
      <h1 class="logo-header">
        <span class="logo">He</span><span class="logo">ll</span><span class="logo">o</span>&nbsp;<span class="logo">Wo</span><span class="logo">rl</span><span class="logo">d!</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {

  mounted() {
    let intro = document.querySelector(".intro");
    let logoSpan = document.querySelectorAll(".logo");

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 300);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("active");
            span.classList.add("fade");
          }, (idx + 1) * 40);
        });
      }, 3000);

      setTimeout(() => {
        intro.style.top = '-100vh';
      }, 3500);
    }, 0); // Delay of 0ms to ensure Vue initialization
  },
};
</script>

<style scoped>
/**Splash Screen */
.intro {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #FAF1E4;
  transition: 1s;
}

.logo-header {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 72px;
  line-height: 86px;
  transform: translate(-50%, -50%);
  color: black;
}
.logo {
  position: relative;
  display: inline-block;
  bottom: -30px;
  opacity: 0;
}
.logo.active {
  bottom: 0;
  opacity: 1;
  transition: ease-in-out 0.5s;
}
.logo.fade {
  bottom: 150px;
  opacity: 0;
  transition: ease-in-out 0.5s;
}
@media (max-width: 480px) {
  .logo-header {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 52px;
  line-height: 62px;
  transform: translate(-50%, -50%);
  color: black;
  }
}
</style>
