<template>
  <v-container>
    <center><h1 class="pa-3">Create New Ticket</h1></center>
      
   
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12" md="12">
          <customer-profile-card-vue></customer-profile-card-vue>
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
      <h3 class="pa-3"> Select Device Model </h3> 
      <p v-if="!selected"> Please select manufacturer first </p>
      <faults :manufacturer="selectedmanufectuere"></faults>
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
         <repairing-form-vue></repairing-form-vue>

      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import assesories from "../assets/problems.json";
import { mapGetters } from "vuex";
import PreRepairCondition from "./PreRepairCondition.vue";
import CustomerProfileCardVue from "./CustomerProfileCard.vue";
import RepairingFormVue from './RepairingForm.vue';

import Faults from './Faults.vue';
import AssignToVue from './AssignTo.vue';


export default {
  name: "HelloWorld",
  components: {
    PreRepairCondition,
    CustomerProfileCardVue,
    RepairingFormVue,
    Faults,
    AssignToVue,
  },

  data() {
    return {
      assesories: assesories,
      selected: false,
      selectedmanufectuere: "",
      curSelection: [],
    };
  },

  computed: {
    ...mapGetters({
      manufacturer: "tickets/manufacturer",
    }),
    deviceList() {
      return this.assesories.filter(obj=>obj.Manufacturer.length>3).map(obj => obj.Manufacturer).filter((v, i, a) => a.indexOf(v) === i).map((key,_id) => ({id:_id,name: key,selected:false}));
      
    },
  },

  mounted: () => {
    return {
      init: () => {
        this.resetAll();
      },
    };
  },
  methods: {
    makeSelection: function (id) {
      if (!this.selected) {
        console.log("clicked:" + id);
        this.manufacturer.find((x) => x.id == id).selected = true;
        this.selectedmanufectuere = this.manufacturer.find((x) => x.id == id).name;
        this.selected = true;
      }
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
