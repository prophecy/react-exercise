import * as React from "react";

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
        <span className="section-title">
          {title} <i className="fa fa-angle-right"></i>
        </span>
      </div>
      {children}
    </div>
  );
};

export default RoutableSection;
