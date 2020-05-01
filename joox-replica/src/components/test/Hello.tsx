import React from "react";
import { useObserver } from "mobx-react";
import { storeContext } from "../../stores/StoreContextProvider";

export interface HelloProps {}

const Hello: React.SFC<HelloProps> = () => {
  const store = React.useContext(storeContext);

  return useObserver(() => {
    return (
      <div className="test-area">
        <h1>{store?.getHelloText()}</h1>
        <h2>{store?.getUpHelloText()}</h2>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
        <h1>{store?.getHelloText()}</h1>
      </div>
    );
  });
};

export default Hello;
