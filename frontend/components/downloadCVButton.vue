<template>
<div>
  <v-btn
    id="btn"
    elevation="2"
    class="title-buttons text-capitalize"
    :class="{ active: isActive }"
    :style="buttonStyle"
    :height="height"
    :color="color"
    @click="downloadSampleXLS()"
  >
    <span class="title-button-text">{{ label }}</span>
  </v-btn>
</div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Download Resume",
    },
    height: {
      type: String,
      default: "52px",
    },
    color: {
      type: String,
      default: "#ED510F",
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    buttonStyle() {
      return this.isActive ? { border: "2px solid #FAF1E4" } : {};
    },
  },
  methods: {
  downloadSampleXLS() {
    const sampleImageFileURL = require('../assets/Resume/Soumya_Agrawal_Resume.pdf');
    const downloadLink = document.createElement('a');
    downloadLink.href = sampleImageFileURL.default; // Access the default export from the required module
    downloadLink.download = 'Soumya_Agrawal_Resume.pdf'; // Correct the filename
    document.body.appendChild(downloadLink);
    downloadLink.click();
    // Remove the link element from the DOM after the download
    document.body.removeChild(downloadLink);
  },
},

};
</script>

<style scoped>
.title-buttons {
  display: inline-block;
  padding: 24px 24px 0px 24px;
  cursor: pointer;
  align-items: center;
  border: 0;
  vertical-align: middle;
  border-radius: 16px;
}
.title-buttons.active {
  background-color: #dac0a3 !important;
}
.title-buttons:hover {
  background-color: #dac0a3 !important;
}
.title-buttons .title-button-text {
  display: inline-block;
  vertical-align: top;
  padding: 0px 32px;
  color: #ffffff;
  white-space: nowrap;
  line-height: 21px;
  font-weight: 600;
  font-size: 18px;
  overflow: hidden;
}
</style>
