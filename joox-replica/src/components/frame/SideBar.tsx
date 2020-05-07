import React from "react";

export interface SidebBrProps {
  isExpanded: boolean;
}

export interface SideBarState {}

class SideBar extends React.Component<SidebBrProps, SideBarState> {
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

  getContent = () => {
    return (
      <React.Fragment>
        <div className="sidb-bar-section section-one">
          <div className="choice">
            <i className="fa fa-globe"></i>
            {this.props.isExpanded ? <p>DISCOVER</p> : ""}
          </div>
          <div className="choice">
            <i className="fa fa-user"></i>
            {this.props.isExpanded ? <p>เพลงของฉัน</p> : ""}
          </div>
          <div className="choice">
            <i className="fa fa-diamond"></i>
            {this.props.isExpanded ? <p>VIP</p> : ""}
          </div>
        </div>
        <div className="sidb-bar-section section-two">
          <div className="choice">
            <i className="fa fa-user-circle"></i>
            {this.props.isExpanded ? <p>ศิลปิน</p> : ""}
          </div>
          <div className="choice">
            <i className="fa fa-music"></i>
            {this.props.isExpanded ? <p>อัลบัม</p> : ""}
          </div>
          <div className="choice">
            <i className="fa fa-headphones"></i>
            {this.props.isExpanded ? <p>เพลย์ลิสต์</p> : ""}
          </div>
          <div className="choice">
            <i className="fa fa-random"></i>
            {this.props.isExpanded ? <p>ชาร์ตเพลง</p> : ""}
          </div>
          <div className="choice">
            <i className="fa fa-share"></i>
            {this.props.isExpanded ? <p>เรดิโอ</p> : ""}
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default SideBar;
