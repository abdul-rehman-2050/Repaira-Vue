<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              
                <v-img
                  src="@/assets/logo1.png"
                  alt="Fedorae Education Log"
                  contain
                  height="100"
                ></v-img>
             
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Enter your email"
                    name="email"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    class="rounded-0"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    label="Enter your password"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    suffix="| Forgot?"
                    class="rounded-0"
                    outlined
                  ></v-text-field>
                  <v-btn @click="login"  color="primary" x-large block 
                    >
                     <v-icon left > mdi-login</v-icon>
                    
                    Login
                    
                    </v-btn
                  >
                  <v-card-actions class="text--secondary">
                    <v-checkbox
                      color="#000000"
                      label="Remember me"
                    ></v-checkbox>
                    <v-spacer></v-spacer>
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                    No account?
                    <a href="#" class="pl-2" style="color: #000000">Sign Up</a>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center">
                <p>
                  By continuing, you agree to Fedorae Education's
                  <a href="#" class="pl-2" style="color: #000000">Policy</a> and
                  <a href="#" class="pl-2" style="color: #000000"
                    >Terms of Use</a
                  >
                </p>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
    name: 'Login',
    components: {  },

    directives: {  },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        login(){
            this.$router.push('/');
        }
    },
};
</script>






<style lang="css" scoped>
</style>