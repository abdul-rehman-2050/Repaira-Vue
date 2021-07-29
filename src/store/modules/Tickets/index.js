import getters from './getters';
import mutations from './mutations';

const state = {
  tickets: [],
  manufacturer:[{id:0,name:"Asus",selected:false},{id:1,name:"Blackberry",selected:false},{id:2,name:"Motorola",selected:false},{id:3,name:"Samsung",selected:false},{id:4,name:"Google",selected:false},{id:5,name:"Huawei",selected:false},{id:6,name:"Apple",selected:false},{id:7,name:"Kyocera",selected:false},{id:8,name:"Nokia",selected:false},{id:9,name:"Oneplus",selected:false},{id:10,name:"Essential",selected:false},{id:11,name:"Xiaomi",selected:false},{id:12,name:"Sony",selected:false},{id:13,name:"Vivo",selected:false}],
  
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};