<template>
  <div>
    <customer-add-form-vue/>
    <customer-info-list :customers="customers"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
//import AddCustomer from "../components/Customers/AddCustomer.vue";
import CustomerAddFormVue from '../components/Customers/CustomerAddForm.vue';
import CustomerInfoList from "../components/Customers/CustomerInfoList.vue";


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
    
    CustomerInfoList,
    CustomerAddFormVue,
  },
  methods: {
    
  },
};
</script>
