<template>
  <v-btn
    id="btn"
    elevation="0"
    class="title-buttons text-capitalize"
    :class="{ expanded: isActive }" 
    :min-width="minimumWidth"
    :height="height"
    :color="isActive ? '#ED510F' : color"
    @click="btnClicked"
  >
    <slot name="buttonIcon"></slot>
    <span class="title-button-text">{{ label }}</span>
  </v-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    minimumWidth: {
      type: String,
      default: "90px",
    },
    height: {
      type: String,
      default: "90px",
    },
    color: {
      type: String,
      default: "#333F44",
    },
    isActive: Boolean, 
    default: false,// Prop to control the active state
  },
  methods: {
    btnClicked() {
      this.$emit('buttonClicked');
    },
  },
};
</script>

<style scoped>
/* ... */
</style>

  
  <style scoped>
.sti_container {
  position: relative;
}

.title-buttons {
  position: absolute;
  display: inline-block;
  padding: 24px 24px 0px 24px;
  cursor: pointer;
  align-items: center;
  border: 0;
  vertical-align: middle;
  border-radius: 16px;
}

.title-buttons .title-button-text {
  max-width: 0;
  display: inline-block;
  transition: max-width 0.1s ;
  vertical-align: top;
  color: #FFFFFF;
  white-space: nowrap;
  line-height: 21px;
  font-weight: 600;
  font-size: 18px;
  overflow: hidden;
}
.title-buttons:hover .title-button-text {
  max-width: 400px;
  padding-left: 12px;
  padding-right: 8px;
  transition: max-width 0.5s;
  color: #FFFFFF;
}
.title-buttons.expanded .title-button-text{
  max-width: 400px;
  padding-left: 12px;
  padding-right: 8px;
  transition: max-width 0.5s;
  color: #FFFFFF;
}
  </style>
  