import * as React from "react";
import BannerCarousel from "./BannerCarousel";

export interface ContentProps {}

const Content: React.SFC<ContentProps> = () => {
  return (
    <div className="content">
      <BannerCarousel />
    </div>
  );
};

export default Content;
