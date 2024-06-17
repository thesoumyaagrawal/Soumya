<template>
<div>
      <v-dialog
        v-model="dialog"
        max-width="900px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          class="text-capitalize add" color=""
            v-bind="attrs"
            v-on="on"
          >
          <v-icon left> mdi-pencil </v-icon>
          <span class="button-text">Add Views</span>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Please Fill the Form</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                  v-model="formData.name"
                    label="Full Name"
                    required
                  ></v-text-field>
                </v-col>
             
                <v-col cols="12"
                  sm="6"
                  md="6">
                  <v-text-field
                    v-model="formData.profession"
                    label="Profession"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.comment"
                    label="Your Comments/Views"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    :items="['Male', 'Female']"
                    v-model="formData.gender"
                    label="Gender"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
             class="text-capitalize"
              text
              @click="dialog = false"
            >
              Cancel
            </v-btn>
            <v-btn
            class="text-capitalize"
              text
              @click="submitForm()"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
   </div>
  </template>

  <script>
  import axios from 'axios';
  export default {
    data () {
      return{
      dialog: false,
      formData: {
        name: '',
        comment: "",
        profession: "",
        gender: "",
      }}
    },
  methods :{
    async submitForm(){
      this.dialog=false;
      try{
        console.log("hello submit form called");
        console.log(axios.post('/api/posts',this.formData));
        const response=await axios.post('https://soumya-agrawal-portfolio.adaptable.app/api/posts',this.formData);
        console.log(response);
        setTimeout(() => {
          location.reload();
        }, 2000);
        //data saved successfully
      }
      catch(error){
        console.log(error);
      }
    }
  }
  }
</script>

<style scoped>
.button-text {
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 18px !important;
  letter-spacing: 0;
  color: #333333;
}
</style>