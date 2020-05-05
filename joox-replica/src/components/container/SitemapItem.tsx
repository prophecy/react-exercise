import * as React from "react";
import * as VM from "../../stores/data/viewModel";

export interface SitemapItemProps {
  viewModel: VM.SitemapItem;
}

const SitemapItem: React.SFC<SitemapItemProps> = (props) => {
  return (
    <div className="sitemap-item">
      <h1>{props.viewModel.title}</h1>
      <p>{props.viewModel.desc}</p>
    </div>
  );
};

export default SitemapItem;
