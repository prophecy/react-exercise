import React from "react";

export interface HelloProps {}

const Hello: React.SFC<HelloProps> = () => {
  return <h1>Hello, world</h1>;
};

export default Hello;
