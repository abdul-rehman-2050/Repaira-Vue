<template>
  <v-card class="mx-auto" max-width="600" tile>
    <v-tabs center-active color="primary" :centered="true" :grow="true">
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="(item, index) in tabs"
        :key="index"
        :href="`#tab-${index}`"
        >{{ item.name }}</v-tab
      >

      <v-tab-item
        v-for="(item, index) in tabs"
        :key="index"
        :value="'tab-' + index"
      >
        <Component :is="item.component"></Component>
      </v-tab-item>
    </v-tabs>
   
  </v-card>
</template>

<script>
import CustomerTabContact from "./CustomerTabContact.vue";
import CustomerTabAddress from "./CustomerTabAddress.vue";
import CustomerTabCustomFields from "./CustomerTabCustomFields.vue";

export default {
  name: "CustomerAddForm",
  components: {
    CustomerTabContact,
    CustomerTabAddress,
    CustomerTabCustomFields,
  },

  directives: {},

  data() {
    return {
      tabs: [
        { name: "Contact", component: "CustomerTabContact" },
        { name: "Address", component: "CustomerTabAddress" },
        { name: "Custom Fields", component: "CustomerTabCustomFields" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>