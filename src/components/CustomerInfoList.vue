<template>
  <v-container>
    <v-row>
      
        <v-col :key="customer.id"  v-for="customer in customers" cols="3">
          <customer-info :customer="customer"/>
        </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
import CustomerInfo from "../components/CustomerInfo.vue";
export default {
  name: "CustomerInfoList",
  props:['customers'],
  data() {
    return {};
  },
  components: {
      CustomerInfo,
  },
  methods: {
      deleteCustomer(){
        //const customerID = this.customerList.indexOf(id);
        //this.customerList.splice(customerID, 1);
      }
  },
  
};
</script>