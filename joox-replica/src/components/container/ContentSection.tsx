import * as React from "react";

export interface ContentSectionProps {
  title: string;
}

const ContentSection: React.SFC<ContentSectionProps> = ({
  children,
  title,
}) => {
  return (
    <div className="section content-section">
      <div>
        <span className="section-title">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default ContentSection;
