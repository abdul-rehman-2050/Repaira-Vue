<template>
  <v-main class="grey lighten-5 d-flex align-center mx-3">
    <v-container>
    <v-row><h3>Add New Customer</h3></v-row>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit" class="my-3">
          <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:20"
          >
            <v-text-field
              v-model="name"
              :counter="20"
              :error-messages="errors"
              label="Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="phoneNumber"
            :rules="{
              required: true,
              digits: 11,
              regex: '^(92|03|71|72|74|76|81|82|84|85|86|87|88|89)\\d{9}$',
            }"
          >
            <v-text-field
              v-model="phoneNumber"
              :counter="11"
              :error-messages="errors"
              label="Phone Number"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </validation-provider>

          <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </form>
      </validation-observer>
    </v-container>
  </v-main>
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
  }),

  methods: {
    submit() {
      //this.$refs.observer.validate();
      
      let cur_customer = {
          name: this.name,
          phone:this.phoneNumber,
          email: this.email,
      }
       
      this.$store.commit('customers/addCustomer', cur_customer)
      this.name="";this.phoneNumber="",this.email="";
      this.$emit('cutomer-added', true);
      
    
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.$refs.observer.reset();
    },
  },
};
</script>