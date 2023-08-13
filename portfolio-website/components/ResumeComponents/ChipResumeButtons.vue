<template>
<v-chip
      class="chip-buttons"
      color="#F5F4F9"
      outlined
    >
      <span class="text">{{ label }}</span>
    </v-chip>
</template>

<script>
export default{
    name: "ResumeComponentsChipResumeButtons",
    props:{
        label: {
            type: String,
            default: "2010 - 2014", 
        },
    }
};
</script>

<style scoped>
.text{
    color: #ED510F;
    padding: 0;
}
.chip-buttons:before {
  background-color: transparent !important;
}
.chip-buttons{
    min-width: 100px !important;
    padding: 4px 16px !important;
    height: 32px;
}
</style>