import React from "react";
import { useLocalStore } from "mobx-react";
import { createStore, TStore } from "./createStore";

export const storeContext = React.createContext<TStore | null>(null);

export const StoreContextProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreContextProvider;
