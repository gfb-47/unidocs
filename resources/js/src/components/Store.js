import React, { createContext, useReducer } from 'react';
import Reducer from '../utils/reducer';
import Loading from '../components/Loading';

const initialState = {
  loading: false
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  React.useEffect(() => {
  }, [state])

  return (
    <Context.Provider value={[state, dispatch]}>
      {state.loading && <Loading />}
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)


export default Store;