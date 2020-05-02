import React from "react";
import { useObserver } from "mobx-react";
import { storeContext } from "../../stores/StoreContextProvider";

export interface HelloProps {}

const Hello: React.SFC<HelloProps> = () => {
  const store = React.useContext(storeContext);

  return useObserver(() => {
    console.log(storeContext);

    return <div>{store?.viewModel.mainPage.content.sectionList.length}</div>;
  });
};

export default Hello;
