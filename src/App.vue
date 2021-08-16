<template>
  <div id="app">
    <v-app>
      <SideBar v-if="$route.name != 'Login'"/>
      <AppBar v-if="$route.name != 'Login'" />
      <v-main>
        
        <v-container fluid>
          <v-row class="fill-height">
            <v-col>
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppBar,
    SideBar,
  },
};
</script>
