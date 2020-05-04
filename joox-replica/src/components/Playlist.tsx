import * as React from "react";
import { useParams } from "react-router-dom";
import { getPlayListData } from "../stores/data/fakeApi";
import { storeContext } from "../stores/StoreContextProvider";

export interface PlayListProps {}

const PlayList: React.SFC<PlayListProps> = () => {
  let { id } = useParams();
  const store = React.useContext(storeContext);

  const complexRender = () => {
    // Update data with the fake api
    getPlayListData(id);
    return (
      <div>
        <div>PlayList ID: {id}</div>
        <div>Highligh song: {store?.viewModel.playList.highlight}</div>
      </div>
    );
  };

  return complexRender();
};

export default PlayList;
