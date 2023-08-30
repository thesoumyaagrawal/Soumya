<template>
  <svg
    :width="svgWidth"
    :height="svgHeight"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_108_2)">
      <circle cx="60" cy="60" r="60" fill="#ED510F" />
      <path
        d="M33 48C33 45.204 33 43.806 33.456 42.705C33.7575 41.9765 34.1997 41.3147 34.7572 40.7572C35.3147 40.1997 35.9765 39.7575 36.705 39.456C37.806 39 39.204 39 42 39H78C80.796 39 82.194 39 83.295 39.456C84.0235 39.7575 84.6853 40.1997 85.2428 40.7572C85.8003 41.3147 86.2425 41.9765 86.544 42.705C87 43.806 87 45.204 87 48V72C87 74.796 87 76.194 86.544 77.295C86.2425 78.0235 85.8003 78.6854 85.2428 79.2428C84.6853 79.8003 84.0235 80.2425 83.295 80.544C82.194 81 80.796 81 78 81H42C39.204 81 37.806 81 36.705 80.544C35.9765 80.2425 35.3147 79.8003 34.7572 79.2428C34.1997 78.6854 33.7575 78.0235 33.456 77.295C33 76.194 33 74.796 33 72V48Z"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36 42L56.049 59.544C57.1427 60.501 58.5467 61.0285 60 61.0285C61.4533 61.0285 62.8573 60.501 63.951 59.544L84 42"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_108_2">
        <rect width="120" height="120" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "IconsMailMe",
  data() {
    return {
      svgWidth: 120, // Default width
      svgHeight: 120, // Default height
    };
  },
  mounted() {
    if (window.innerWidth <= 600) {
      this.svgWidth = 75; // Update width
      this.svgHeight = 75; // Update height
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 600) {
        this.svgWidth = 75; // Update width
        this.svgHeight = 75; // Update height
      } else {
        this.svgWidth = 120; // Reset width
        this.svgHeight = 120; // Reset height
      }
    },
  },
};
</script>
