<template>
  <v-card class="mx-auto" max-width="434" tile>
    <v-row>
      <v-col cols="12" xs="4">
        <v-avatar size="100" class="ml-3">
          <!-- v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img -->
          <v-icon color="orange darken-2" size="100">mdi-account</v-icon>
        </v-avatar>
      </v-col>
      <v-col xs="8">
        <v-list-item color="rgba(0, 0, 0, .4)">
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ customer.name }}</v-list-item-title
            >
            <v-list-item-subtitle>
              <v-icon class="mr-3" color="orange darken-2"> mdi-email </v-icon
              >{{ customer.email }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon class="mr-3" color="orange darken-2"> mdi-phone </v-icon
              >{{ customer.phone }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>

    <v-col class="text-right">
      <v-select
        class="ml-2"
        :items="customerslist"
        label="Select Customer"
        item-text="name"
        return-object
        v-on:change="changeCustomer"
        v-model="curCustomer"
      ></v-select>
      <v-btn dark color="orange darken-2" class="mx-2 pull-right">
        <v-icon dark> mdi-plus </v-icon> Add New Customer
      </v-btn>
    </v-col>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      customer: {
        id: 0,
        name: "Walk In Customer",
        email: "default@gmail.com",
        phone: "92123456789",
      },
      curCustomer: {},
    };
  },
  computed: {
    ...mapGetters({
      customerslist: "customers/customers",
    }),
  },
  methods: {
    changeCustomer(a) {
      this.customer = a;
      console.log(a);
      this.$emit("selected-customer", a);
    },
  },
};
</script>

<style scoped>
</style>
