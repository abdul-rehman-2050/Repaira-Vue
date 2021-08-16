import getters from './getters';
import mutations from './mutations';
const state = {
  authUser: {
      isAuthenticated: false,
  },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
  };