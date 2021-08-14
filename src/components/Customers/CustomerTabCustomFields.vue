<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" v-for="(val, i) in items" :key="i">
        <v-text-field :label="val" required></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
          <v-text-field type="text" error-count="" placeholder="" 
          label="attribute Name" append-icon="mdi-plus"  v-model="attributeName" outlined color></v-text-field>
      </v-col>
      <v-col cols="12" md="4">   
        <v-btn large elevation="" color="primary" @click="addField">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CustomerTabCustomFields",
  components: {},

  directives: {},

  data() {
    return {
    
      items: [],
      attributeName: "",
    };
  },

  mounted() {},

  methods: {
    addField: function () {
       
            this.items = [...this.items, this.attributeName];
       
      
    },
  },
};
</script>