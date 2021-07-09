const TICKET_DELETE = (state, id) => {
    const i = state.tickets.map(item => item.id).indexOf(id);
    state.tickets.splice(i, 1);
  };
  
  export default {
    TICKET_DELETE,
  };