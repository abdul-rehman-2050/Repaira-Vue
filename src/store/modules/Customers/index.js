import getters from './getters';
import mutations from './mutations';

const state = {
  customers: [{
    id:1,
    name:"Walkin Customer",
    email:"default@repaira.com",
    phone:"03333333333"
  }],
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};