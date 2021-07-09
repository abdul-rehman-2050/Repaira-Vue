<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ customer.id + ") " + customer.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ customer.email }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn class="ma-1" outlined color="red" v-on:click="deleteCustomer">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CustomerInfo",
  props: ["customer"],
  methods: {
    deleteCustomer() {
        console.log(this.$props.customer);
        this.$store.commit('customers/deleteCustomer', this.$props.customer.id)
      
    },
  },
};
</script>