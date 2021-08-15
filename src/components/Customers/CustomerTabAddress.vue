<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          type="text"
          placeholder=""
          label="Street Address"
          v-model="streetAddress"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6"
        ><v-text-field
          color
          v-model="houseNumber"
          label="House/Appartment/ Floor Number"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          type="text"
          placeholder=""
          label="PostCode"
          v-model="postCode"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          type="text"
          placeholder=""
          label="City"
          v-model="city"
        ></v-text-field>
      </v-col>


 <v-col cols="12" md="6">
        <v-text-field
          type="text"
          placeholder=""
          label="State"
          v-model="state"
        ></v-text-field>
      </v-col>


      <v-col cols="12" md="6"
        ><v-select
          color
          v-model="Country"
          :items="countryList"
          label="Country"
        ></v-select>
      </v-col>

       <v-col cols="12" md="6">
        <v-text-field
          type="text"
          placeholder=""
          label="Organization"
          v-model="organization"
        ></v-text-field>
      </v-col>

       <v-col cols="12" md="6">
        <v-text-field
          type="text"
          placeholder=""
          label="Contact Person"
          v-model="contactPerson"
        ></v-text-field>
      </v-col>


    </v-row>
    <v-row justify="center" align="center" class="ma-3">
          <v-btn
            
            color="success"
            class="mr-4"
            
          >
            Save
            <v-icon right>mdi-cloud-upload</v-icon>
          </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CustomerTabAddress",
  components: {},

  directives: {},

  data() {
    return {
      streetAddress: "",
      postCode: "",
      state: "",
      organization: "",
      houseNumber: "",
      city: "",
      Country: "",
      contactPerson: "",
    };
  },
  computed: {
    ...mapGetters({
      countryList: "countryList/countryList",
    }),
  },
  mounted() {},

  methods: {},
};
</script>