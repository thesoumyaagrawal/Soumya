<template>
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="30" height="30" />
    <circle
      cx="15.5"
      cy="14.5"
      r="13.64"
     :stroke="stroke"
      stroke-width="1.72"
    />
    <circle
      cx="15.75"
      cy="10.75"
      r="4.89"
     :stroke="stroke"
      stroke-width="1.72"
    />
    <path
      d="M6 24.1399C6.95623 22.5703 8.30016 21.2731 9.90259 20.3729C11.505 19.4728 13.3121 19 15.15 19C16.9879 19 18.795 19.4728 20.3974 20.3729C21.9998 21.2731 23.3438 22.5703 24.3 24.1399"
     :stroke="stroke"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
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
