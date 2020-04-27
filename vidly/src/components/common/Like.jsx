import React, { Component } from "react";

const Like = (props) => {
  let heartClass = "fa-heart";
  if (!props.liked) heartClass += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={"fa " + heartClass}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
