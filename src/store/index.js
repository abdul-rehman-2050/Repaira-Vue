import Vue from 'vue'
import Vuex from 'vuex'
import customersModule from './modules/Customers';
import ticketsModule from './modules/Tickets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customers: customersModule,
    tickets: ticketsModule,
  }
})
