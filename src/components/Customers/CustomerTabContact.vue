<template>
  <v-form v-model="valid">
    <v-container class="pa-8">
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-row>
          <v-col>
            <v-select
              color
              v-model="selectedGroup"
              :items="groupOptions"
              label="Customer Group"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              color
              v-model="selectedTaxOption"
              :items="taxOptions"
              label="Tax Class"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              append-icon="mdi-account"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              append-icon="mdi-account"
              required

            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              append-icon="mdi-email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              color
              v-model="hearaboutus"
              :items="hearingOptions"
              label="How do you hear about us?"
            ></v-select>
          </v-col>

          <v-col>
            <v-text-field
              type="text"
              placeholder="Phone Number"
              label="Phone Number"
              append-icon="mdi-phone"
              v-model="phoneNumber"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Save
            <v-icon right>mdi-cloud-upload</v-icon>
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Reset 
            <v-icon dark right>mdi-cancel</v-icon>
          </v-btn>
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
    selectedGroup: "",
    selectedTaxOption: "",
    phoneNumber: "",
    groupOptions: ["Individual", "Group"],
    taxOptions: ["Sales Tax", "Tax Exempt"],
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