<template>
  <v-navigation-drawer class="pt-4" permanent expand-on-hover app>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Sandra Adams </v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Tickets</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/customer">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Customers</v-list-item-title>
      </v-list-item>

      <v-list-item link to="/about">
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>

      <v-list-item @click="logout" class="mt-auto">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  components: {},

  directives: {},

  data() {
    return {};
  },
  computed: {
     ...mapGetters({
      authUser: "auth/authUser",
    }),
    
  },

  mounted() {},

  methods: {
    logout(){
      this.$store.commit('auth/logoutAuth')
      this.$router.push('/login');
    }

  },
};
</script>

 

<style>
.v-list-item {
  flex: 0;
}
</style>