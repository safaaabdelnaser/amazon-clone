import { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./appReducer";

const globleContext = createContext();
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <globleContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {children}
    </globleContext.Provider>
  );
};

export default ContextProvider;
export const useAuth = () => {
  return useContext(globleContext);
};
