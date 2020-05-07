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
      <div className="info"></div>
    </footer>
  );
};

export default Footer;
