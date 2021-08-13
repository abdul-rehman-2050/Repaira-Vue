<template>
  <v-container fill-height>
    <v-row v-for="(val,i) in items" :key="i" justify="center" align="center">
      <v-col cols="12" sm="4">
          {{val}}
      </v-col>
      <v-col cols="12" sm="4">
          <v-text-field type="text" error-count="" placeholder="val" 
          label="" append-icon=""  outlined color></v-text-field>
          
      </v-col>  

    </v-row>  
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4">
        <v-btn x-large elevation="3" color="primary" @click="addField">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'CustomerTabCustomFields',
    components: {  },

    directives: {  },

    data() {
        return {
          items:[

          ]  
        };
    },

    mounted() {
        
    },

    methods: {
        addField:function(){
            this.items = [...this.items,"new item"];
        }
    },
};
</script>