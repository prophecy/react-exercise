import React from "react";
import { useObserver } from "mobx-react";
import { storeContext } from "../stores/StoreContextProvider";

export interface HelloProps {}

const Hello: React.SFC<HelloProps> = () => {
  //return <h1>Hello, world</h1>;

  const store = React.useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");

  return useObserver(() => {
    return (
      <div>
        <h1>{store.getHelloText()}</h1>
      </div>
    );
  });
};

export default Hello;