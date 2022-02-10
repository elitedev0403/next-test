import { useReducer, createContext } from "react";

const Reducer = (state, action) => {
  switch (action.type) {
    case "putData":
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  data: []
}

export const Context = createContext(null);

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Store;
