import getters from './getters';
import mutations from './mutations';

const state = {
  tickets: [],
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};