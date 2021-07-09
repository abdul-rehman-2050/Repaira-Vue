<template>
  <div>
    <add-customer />
    <customer-info-list :customers="customers"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddCustomer from "../components/AddCustomer.vue";
import CustomerInfoList from "../components/CustomerInfoList.vue";

export default {
  name: "Customer",
  data() {
    return {
      
      
    };
  },

  computed: {
    ...mapGetters({
      customers: 'customers/customers',
    }),
  },
  mounted() {
    // this.$store.dispatch('customers/getCustomers'); //this how to call the actions for api call
    
  },

  components: {
    AddCustomer,
    CustomerInfoList,
  },
  methods: {
    
  },
};
</script>
