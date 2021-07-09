import getters from './getters';
import mutations from './mutations';

const state = {
  customers: [{
    id:1,
    name:"test",
    email:"t@t.com"
  }],
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};