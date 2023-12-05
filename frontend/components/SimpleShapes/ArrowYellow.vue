<template>
    <div class="simple-shape">
      <svg
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.64502 0.34363L15.2856 6.98426C15.7446 7.44324 15.7446 8.18543 15.2856 8.63953L14.1821 9.74305C13.7231 10.202 12.981 10.202 12.5269 9.74305L7.81494 5.0409L3.10791 9.74793C2.64893 10.2069 1.90674 10.2069 1.45264 9.74793L0.344238 8.64441C-0.114746 8.18543 -0.114746 7.44324 0.344238 6.98914L6.98486 0.348513C7.44385 -0.115354 8.18604 -0.115354 8.64502 0.34363Z"
          fill="#F0B110"
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: "SimpleShapesArrowYellow",
  };
  </script>
  
  <style scoped>
  .simple-shape {
    animation-name: rotate;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-radius: 50%;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  