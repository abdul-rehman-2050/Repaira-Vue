<template>
  <div class="card pt-3">
    <v-icon x-large>mdi-account</v-icon>
    <h3>{{ customer.name }}</h3>

    <v-icon class="ma-3" color="teal darken-2"> mdi-email </v-icon
    >{{ customer.email }}
    <v-icon class="ma-3" color="teal darken-2"> mdi-phone </v-icon
    >{{ customer.phone }}
    <v-select
        class="mx-2"
      :items="customerslist"
      label="Select Customer"
      item-text="name"
      return-object
      v-on:change="changeCustomer"
      v-model="curCustomer"
      outlined
    ></v-select>
    
  </div>
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
        phone: "92123456789"
      },
      curCustomer:{

      },
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
      this.$emit('selected-customer', a);
    },
  },
  
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black !important;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>