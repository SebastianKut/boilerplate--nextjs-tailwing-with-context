import { useReducer, useContext, createContext } from 'react';

export const initialState = {
  counter: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'INCREASE_BY':
      return {
        ...state,
        counter: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const StateProviderContext = createContext();

export const ContextProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // add methods you want to make available globally in the app here, then pass to value of StateProviderContext.Provider
  return (
    <StateProviderContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StateProviderContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateProviderContext);
