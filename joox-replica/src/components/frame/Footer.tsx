import React from "react";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return (
    <footer>
      <div className="artwork">
        <div className="img-area"></div>
      </div>
      <div className="controller-panel">
        <div className="controller controller-2nd">
          <i className=" fa fa-random"></i>
        </div>
        <div className="controller controller-2nd">
          <i className="fa fa-step-backward"></i>
        </div>
        <div className="controller controller-1st">
          <i className="fa fa-play-circle"></i>
        </div>
        <div className="controller controller-2nd">
          <i className="fa fa-step-forward"></i>
        </div>
        <div className="controller controller-2nd">
          <i className="fa fa-history"></i>
        </div>
      </div>
      <div className="timeline"></div>
      <div className="info">
        <div className="info-inner">
          <div className="info-holder">
            <i className="fa fa-volume-up"></i>
          </div>
          <div className="volume-holder">
            <div className="volume"></div>
          </div>
          <div className="info-holder section-two">
            <i className="fa fa-music"></i>
          </div>
          <div className="info-holder section-three">
            <i className="fa fa-tasks"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
