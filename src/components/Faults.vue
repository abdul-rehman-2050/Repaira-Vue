<template>
  <v-container>
    <v-row v-if="manufacturer.length > 3">
      <v-col
        cols="12"
        md="3"
        v-for="n in deviceList"
        :key="n.id"
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
  </v-container>
</template>


<script>
import assesories from "../assets/assesories.json";
export default {
  data() {
    return {
      assesories: assesories,
      selected: false,
      selectedmanufectuere: "",
      
    };
  },
  mounted: () => {
    return {
      init: () => {},
    };
  },

  computed: {
    deviceList() {
      if (this.manufacturer.length > 2) {
        return this.assesories
          .filter(
            (word) =>
              word.Manufacturer == this.manufacturer && word.Device.length > 3
          )
          .map((obj) => obj.Device)
          .filter((v, i, a) => a.indexOf(v) === i)
          .map((key, _id) => ({ id: _id, name: key }));
      }
      return {id:0,name:"No category found"};
          
      
    },
  },
  props: {
    manufacturer: {
      type: String,
      default: "",
    },
  },
  methods: {
    makeSelection: function (id) {
      console.log(id);
        console.log(this.deviceList.filter(x => x.selected==true ));
      if (!this.selected) {
        console.log("clicked:" + id);
        this.deviceList.find((x) => x.id == id).selected = true;
        console.log(this.deviceList.find(
          (x) => x.id == id
        ));
        this.selectedmanufectuere = this.deviceList.find(
          (x) => x.id == id
        ).name;
        this.selected = true;
        this.$forceUpdate();  
      }
    },
  },
};
</script>


<style scoped>
</style>