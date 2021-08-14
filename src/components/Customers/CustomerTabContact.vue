<template>
  <v-form v-model="valid">
    <v-container class="pa-8">
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-select
              color
              v-model="hearaboutus"
              :items="hearingOptions"
              
              label="How do you hear about us?"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Add New
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    hearaboutus: "",
    hearingOptions: [
      "Facebook",
      "Bing",
      "Google Ads",
      "Search Engine",
      "Referals",
    ],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
      this.valid = false;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>