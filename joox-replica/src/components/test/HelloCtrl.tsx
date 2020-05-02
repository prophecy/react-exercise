import React from "react";
import { storeContext } from "../../stores/StoreContextProvider";

export interface HelloCtrlProps {}

const HelloCtrl: React.SFC<HelloCtrlProps> = () => {
  const store = React.useContext(storeContext);

  return <div></div>;
  /*
  return (
    <div>
      <button onClick={() => store?.setHelloText("Welcome!")}>
        Say welcome
      </button>
      <button onClick={() => store?.setHelloText("Something!")}>
        Say something
      </button>
    </div>
  );
  */
};

export default HelloCtrl;
