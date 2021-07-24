<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" md="12"><h3>Pre Repair Conditions</h3></v-col>
      <hr />
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(n, index) in conditions"
        v-bind:key="index"
      >
      

        <v-switch
          v-model="n.working"
          inset
          color="green darken-3"
          class="custom-red"
          :label="`${n.name} is ${isWorkingText(n.working)}`"
          @change="switchChanged(n)"
        ></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      conditions: [
        {
          name: "Power Button",
          working: true,
        },
        {
          name: "Volume Button",
          working: true,
        },
        {
          name: "Home Button",
          working: true,
        },
        {
          name: "Mute Switch",
          working: true,
        },
        {
          name: "Touch Functionality",
          working: true,
        },
        {
          name: "Proximity Sensor",
          working: true,
        },
        {
          name: "Front Camera",
          working: true,
        },
        {
          name: "bend",
          working: true,
        },
      ],
      
    };
  },
  methods:{
      switchChanged: function(n){
          console.log(n.name, n.working)
      },
      isWorkingText(val){
          return val ? " Working " : " Not Working"
      }
  }
};
</script>

<style>
    .custom-red .theme--light{
        color:red !important;
    }
  
</style>