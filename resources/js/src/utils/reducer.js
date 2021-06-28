const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload.data
      };
    default: return state;
  };
};


export default Reducer;