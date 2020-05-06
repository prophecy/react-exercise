import React from "react";

export interface SideBarProps {}

const SideBar: React.SFC<SideBarProps> = () => {
  return (
    <div className="side-bar">
      <div className="section-one">
        <div className="choice">
          <i className="fa fa-globe"></i>
        </div>
        <i className="fa fa-user"></i>
        <i className="fa fa-diamond"></i>
      </div>
      <div className="section-two">
        <i className="fa fa-user-circle"></i>
        <i className="fa fa-music"></i>
        <i className="fa fa-headphones"></i>
        <i className="fa fa-random"></i>
        <i className="fa fa-share"></i>
      </div>
    </div>
  );
};

export default SideBar;
