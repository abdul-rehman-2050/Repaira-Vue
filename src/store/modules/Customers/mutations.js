
export default {
    deleteCustomer: (state, id) => {
        const i = state.customers.map(item => item.id).indexOf(id);
        state.customers.splice(i, 1);
    },
    addCustomer:(state,cur_customer)=>{
        const len = state.customers.length;
        
     let id = 0;
     if(len>0){
         id = state.customers[len-1].id+1;
     }else{
         id=1;
     }
      cur_customer.id = id;
      state.customers.push(cur_customer);
    }

};