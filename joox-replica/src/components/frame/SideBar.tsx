import React from "react";

export interface SidebBrProps {
  isExpanded: boolean;
}

export interface SideBarState {}

class SideBar extends React.Component<SidebBrProps, SideBarState> {
  getContent = () => {
    return (
      <React.Fragment>
        <div className="section-one">
          <div className="choice">
            <i className="fa fa-globe"></i>
          </div>
          <div className="choice">
            <i className="fa fa-user"></i>
          </div>
          <div className="choice">
            <i className="fa fa-diamond"></i>
          </div>
        </div>
        <div className="section-two">
          <div className="choice">
            <i className="fa fa-user-circle"></i>
          </div>
          <div className="choice">
            <i className="fa fa-music"></i>
          </div>
          <div className="choice">
            <i className="fa fa-headphones"></i>
          </div>
          <div className="choice">
            <i className="fa fa-random"></i>
          </div>
          <div className="choice">
            <i className="fa fa-share"></i>
          </div>
        </div>
      </React.Fragment>
    );
  };

  getSideBar = () => {
    return this.props.isExpanded ? (
      <div className="side-bar side-bar-expanded">{this.getContent()}</div>
    ) : (
      <div className="side-bar side-bar-collapsed">{this.getContent()}</div>
    );
  };

  render() {
    return this.getSideBar();
  }
}

export default SideBar;
