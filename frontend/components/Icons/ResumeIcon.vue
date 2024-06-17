<template>
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.9231 7.92308V26.3846C22.9231 27.6087 22.4368 28.7826 21.5713 29.6482C20.7057 30.5137 19.5318 31 18.3077 31H1C2.22408 31 3.39802 30.5137 4.26357 29.6482C5.12912 28.7826 5.61539 27.6087 5.61539 26.3846V5.61538C5.61539 4.39131 6.10165 3.21737 6.9672 2.35181C7.83275 1.48626 9.00669 1 10.2308 1H26.9615"
      :stroke="stroke"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.9616 1C28.0326 1 29.0598 1.42548 29.8172 2.18284C30.5745 2.9402 31 3.96739 31 5.03846V6.76923C31 7.07525 30.8785 7.36873 30.6621 7.58512C30.4457 7.80151 30.1522 7.92308 29.8462 7.92308H22.9231V5.03846C22.9231 3.96739 23.3486 2.9402 24.1059 2.18284C24.8633 1.42548 25.8905 1 26.9616 1Z"
      :stroke="stroke"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.6924 9.0769H17.1539"
      :stroke="stroke"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.3845 16H17.1538"
      :stroke="stroke"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.3845 22.9231H17.1538"
      :stroke="stroke"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "IconsResumeIcon",
  props: {
    stroke: {
      type: String,
      default: "stroke",
    },
  },
};
</script>
