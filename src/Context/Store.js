import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
const { initialState } = require("./initialState");

const store = createContext(initialState)
const { Provider } = store;

const ContextProvider = ({ children }) => {
    const [globalState, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
}

export { store, ContextProvider };
