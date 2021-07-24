import getters from './getters';
import mutations from './mutations';

const state = {
  tickets: [],
  manufacturer: [
    {
      id: 1,
      name: "Apple",
      selected: false,
    },
    {
      id: 2,
      name: "IPhone",
      selected: false,
    },
    {
      id: 3,
      name: "SAMSUNG",
      selected: false,
    },
    {
      id: 4,
      name: "Asus",
      selected: false,
    },
    {
      id: 5,
      name: "BlackBerry",
      selected: false,
    },
    {
      id: 6,
      name: "Dignostic",
      selected: false,
    },
    {
      id: 7,
      name: "HP",
      selected: false,
    },
    {
      id: 8,
      name: "HTC",
      selected: false,
    },
    {
      id: 9,
      name: "LG",
      selected: false,
    },
    {
      id: 10,
      name: "Microsoft",
      selected: false,
    },
    {
      id: 11,
      name: "Motorola",
      selected: false,
    },
    {
      id: 12,
      name: "NOKIA",
      selected: false,
    },
    {
      id: 13,
      name: "PC",
      selected: false,
    }
   

  ]
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};