import * as React from "react";
import { Link } from "react-router-dom";

export interface RoutableSectionProps {
  title: string;
}

const RoutableSection: React.SFC<RoutableSectionProps> = ({
  children,
  title,
}) => {
  return (
    <div className="section routable-section">
      <div>
        <span className="section-title routable">
          <Link to="/charts">{title}</Link>{" "}
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
      {children}
    </div>
  );
};

export default RoutableSection;
