import * as React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

export interface PlayListProps {}

const PlayList: React.SFC<PlayListProps> = () => {
  let { id } = useParams();
  return <div>PlayList ID: {id}</div>;
};

export default PlayList;
