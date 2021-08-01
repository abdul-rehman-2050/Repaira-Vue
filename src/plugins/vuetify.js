import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#FF9900',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
          dark: {
            primary: '#FF9900',
            secondary: '#0066FF',
          },
        },
      },

});
