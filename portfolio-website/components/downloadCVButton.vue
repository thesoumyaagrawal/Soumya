<template>
    <v-btn
      id="btn"
      elevation="2"
      class="title-buttons text-capitalize"
      :height="height"
      :color="color"
      @click="btnClicked"
    > 
      <span class="title-button-text">{{ label }}</span>
    </v-btn>
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
    methods: {
      btnClicked() {
        this.$emit('buttonClicked');
      }
    }
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
.title-buttons:hover{
    background-color: #074A4B !important;
}
.title-buttons .title-button-text {
  display: inline-block;
  vertical-align: top;
  padding: 0px 32px;
  color: #FFFFFF;
  white-space: nowrap;
  line-height: 21px;
  font-weight: 600;
  font-size: 18px;
  overflow: hidden;
}
  </style>
  