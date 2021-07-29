<template>
  <v-container>
    <center><h1 class="pa-3">Create New Ticket</h1></center>
      
   
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12" md="12">
          <customer-profile-card-vue v-on:selected-customer="selectCustomer"></customer-profile-card-vue>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>Select Manufecturer</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="n in manufacturer"
          :key="n.id"
          cols="12"
          sm="6"
          md="2"
          v-on:click="makeSelection(n.id)"
        >
          <v-card class="pa-6" outlined tile>
            <v-badge
              v-if="n.selected"
              transition="slide-x-transition"
              color="green accent-4"
              icon="mdi-check"
              class="mr-8"
            >
            </v-badge>
            {{ n.name }}
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
      <h3 class="pt-3"> Select Device Model </h3> 
      <p class="pt-5" v-if="!selected"> Please select manufacturer first </p>
      <faults :manufacturer="selectedmanufectuere" @clicked="doDeviceSelection"></faults>
      </v-col>
      </v-row>
      <v-row >
        <v-col cols="12" md="12">
          <h3 class="pt-3"> Select Device Problems </h3> 
        </v-col>
       
      </v-row>
       <problems-vue :devicemodel="selectedDeviceModel"></problems-vue>
      <v-row>
        <v-col>
          <v-btn
          v-show="false"
            :disabled="!selected"
            color="error"
            class="mr-4"
            @click="resetAll"
          >
            Reset
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <pre-repair-condition></pre-repair-condition>
      </v-row>
      <v-row justify="">
          <assign-to-vue> </assign-to-vue>

      </v-row>
     
       <v-row justify="">
         <v-col cols="12" md="6">
         <v-text-field type="text" error-count="" placeholder="Device Password" 
         label="Device Password" append-icon="" color="blue-grey lighten-2" v-model="devicePassword" outlined filled></v-text-field>
         </v-col>
        <v-col md="6">
          <v-select  v-model="ticketStatus" :items="statusOptions" filled color="blue-grey lighten-2"
          label="Ticket Status"></v-select>
          
          </v-col>   
          {{curTicket}}
      </v-row>
      
    </v-container>
  </v-container>
</template>

<script>
import assesories from "../assets/problems.json";
import { mapGetters } from "vuex";
import PreRepairCondition from "./PreRepairCondition.vue";
import CustomerProfileCardVue from "./CustomerProfileCard.vue";


import Faults from './Faults.vue';
import AssignToVue from './AssignTo.vue';
import ProblemsVue from './Problems.vue';



export default {
  name: "HelloWorld",
  components: {
    PreRepairCondition,
    CustomerProfileCardVue,
    
    Faults,
    AssignToVue,
    ProblemsVue,
  },

  data() {
    return {
      assesories: assesories,
      selected: false,
      selectedmanufectuere: "",
      selectedDeviceModel: "",
      selectedPreDeviceCondition:{},
      selectedCustomer:{},
      curSelection: [],
      statusOptions:["Active", "Pending", "in Progress", "Completed"],
      devicePassword:"",
      ticketStatus: "",
    };
  },

  computed: {
    ...mapGetters({
      manufacturer: "tickets/manufacturer",
    }),
    deviceList() {
      return this.assesories.filter(obj=>obj.Manufacturer.length>3).map(obj => obj.Manufacturer).filter((v, i, a) => a.indexOf(v) === i).map((key,_id) => ({id:_id,name: key,selected:false}));
      
    },
    curTicket(){
      return {
        deviceMenufecturer: this.selectedmanufectuere,
        deviceModel: this.selectedDeviceModel,
        devicePassword: this.devicePassword,
        deivceTicketStatus: this.ticketStatus,
        customer: this.selectedCustomer,
      }
    }
  },

  mounted: () => {
    return {
      init: () => {
        this.resetAll();
      },
    };
  },
  methods: {
    selectCustomer: function(customer){
        this.selectedCustomer = customer;
    },
    doDeviceSelection: function(value){
      this.selectedDeviceModel = value;
      console.log(this.selectedDeviceModel);
      console.log("event fired");

    },
    makeSelection: function (id) {
      if (this.selected) {
          this.resetAll()
      }
        console.log("clicked:" + id);
        this.manufacturer.find((x) => x.id == id).selected = true;
        this.selectedmanufectuere = this.manufacturer.find((x) => x.id == id).name;
        this.selected = true;
      
    },
    resetAll: function () {
      this.selected = false;
      this.selectedmanufectuere = "";
      this.manufacturer.forEach((e) => {
        e.selected = false;
      });
      this.curSelection = this.manufacturer;
    },
  },
  
};
</script>
