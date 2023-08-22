<template>
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_109_61)">
      <g filter="url(#filter0_d_109_61)">
        <path
          d="M15 17.1429C16.4208 17.1429 17.7834 16.5785 18.788 15.5738C19.7927 14.5691 20.3571 13.2065 20.3571 11.7857C20.3571 10.3649 19.7927 9.00232 18.788 7.99766C17.7834 6.993 16.4208 6.42859 15 6.42859C13.5792 6.42859 12.2166 6.993 11.2119 7.99766C10.2072 9.00232 9.64282 10.3649 9.64282 11.7857C9.64282 13.2065 10.2072 14.5691 11.2119 15.5738C12.2166 16.5785 13.5792 17.1429 15 17.1429Z"
          :stroke="stroke"
          stroke-width="1.71429"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.84998 25.5C6.80621 23.9304 8.15014 22.6332 9.75256 21.7331C11.355 20.8329 13.162 20.3601 15 20.3601C16.8379 20.3601 18.645 20.8329 20.2474 21.7331C21.8498 22.6332 23.1937 23.9304 24.15 25.5"
          :stroke="stroke"
          stroke-width="1.71429"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 28.9286C18.6941 28.9286 22.2369 27.4611 24.849 24.849C27.4611 22.2369 28.9286 18.6941 28.9286 15C28.9286 11.3059 27.4611 7.76311 24.849 5.151C22.2369 2.53888 18.6941 1.07141 15 1.07141C11.3059 1.07141 7.76311 2.53888 5.151 5.151C2.53888 7.76311 1.07141 11.3059 1.07141 15C1.07141 18.6941 2.53888 22.2369 5.151 24.849C7.76311 27.4611 11.3059 28.9286 15 28.9286Z"
          :stroke="stroke"
          stroke-width="1.71429"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_109_61"
        x="-3.78577"
        y="0.214233"
        width="37.5714"
        height="37.5714"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_109_61"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_109_61"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_109_61">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "IconsAboutMeIcon",
  props: {
    stroke: {
      type: String,
      default: "stroke",
    },
  },
};
</script>
