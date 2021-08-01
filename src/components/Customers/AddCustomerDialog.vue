<template>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
           
        
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
          <v-icon dark> mdi-plus </v-icon>
          Add New Customer</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Add New Customer</v-toolbar>
            <v-card-text>
            
              <add-customer @cutomer-added="dialog.value=false"/>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
</template>

<script>
import AddCustomer from './AddCustomer.vue';




export default {
    name: 'AddCustomerDialog',
    components: {AddCustomer  },

    directives: {  },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>