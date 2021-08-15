<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="12" v-for="(val, i) in items" :key="i">
        <v-text-field :label="val" required></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="12">
        <v-alert
          v-model="alert"
          border="left"
          close-text="Close Alert"
          color="red"
          dark
          dismissible
        >
          {{ alertMessage }}
        </v-alert>
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-text-field
        v-model="attributeName"
        placeholder="Attribute Name"
        outlined
        filled
        required
        :rules="attributeNameRules"
      ></v-text-field>
      <v-btn class="ml-2" dark x-large color="success" @click="addField">
        <v-icon>mdi-plus</v-icon> Add Custom Field
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CustomerTabCustomFields",
  components: {},

  directives: {},

  data() {
    return {
      alertMessage: "",
      alert: false,
      items: [],
      attributeName: "",
       attributeNameRules: [
      (v) => !!v || "Attribute Name is required",
      (v) => v.length <= 10 || "Attribute Name must be less than 10 characters",
    ],
    };
  },

  mounted() {},

  methods: {
    addField: function () {
      if (this.attributeName.length < 2) {
        this.alertMessage = "Attribute Name is required";
        this.alert = true;
        return;
      }
      this.items = [...this.items, this.attributeName];
    },
  },
};
</script>