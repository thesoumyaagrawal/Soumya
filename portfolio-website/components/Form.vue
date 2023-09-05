<template>
  <div>
    <v-card elevation="0" color="transparent">
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Your Name"
                single-line
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="email"
                :rules="[rules.email]"
                single-line
                outlined
                label="Email address"
                type="email"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Your Phone"
                single-line
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Subject" single-line outlined></v-text-field>
            </v-col>
          </v-row>
          <v-textarea
            v-model="bio"
            auto-grow
            outlined
            single-line
            label="Message"
            rows="6"
          ></v-textarea>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-btn text @click="$refs.form.reset()"> Clear </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!form" :loading="isLoading" @click="sendEmail()"> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    bio: "",
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: (v) =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: (v) => !!v || "This field is required",
    },
  }),
  methods: {
  sendEmail() {
    console.log("sendEmail method called"); // Add this line
    const recipientEmail = "iamsoumyaagrawal@gmail.com";
    const subject = "Subject goes here";
    const body = "Message body goes here";

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  }

  },
};
</script>
