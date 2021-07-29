<template>
  
      
    <v-row>
        
      <v-col cols="12">
        <v-autocomplete
          v-model="friends"
          :items="problemsList"
          filled
          chips
          color="blue-grey lighten-2"
          label="Select Problems"
          item-text="name"
          item-value="name"
          multiple
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="remove(data.item)"
            >
              {{ data.item.name }}
            </v-chip>
          </template>
          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-item-content v-text="data.item"></v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.name"></v-list-item-title>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
  
</template>

<script>
import assesories from "../assets/problems.json";
export default {
  data() {
    return {
       assesories: assesories, 
       friends: ["Sandra Adams", "Britta Holt"],
    };
  },
  computed: {
    problemsList() {
      if (this.devicemodel.length > 2) {
        return this.assesories
          .filter(
            (word) =>
              word.Device == this.devicemodel && word.Problem.length > 3
          )
          .map((obj) => obj.Problem)
          .filter((v, i, a) => a.indexOf(v) === i)
          .map((key, _id) => ({ id: _id, name: key }));
      }
      return { id: 0, name: "No Problem found" };
    },
  },
  props: {
    devicemodel: {
      type: String,
      default: "",
    },
  },
  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
