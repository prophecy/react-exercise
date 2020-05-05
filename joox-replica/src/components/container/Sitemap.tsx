import * as React from "react";
import * as VM from "../../stores/data/viewModel";
import SitemapItem from "./SitemapItem";

export interface SitemapProps {
  viewModel: VM.Sitemap;
}

export interface SitemapProps {}

export interface SitemapState {}

class Sitemap extends React.Component<SitemapProps, SitemapState> {
  state = {};

  chunkArray = (myArray: Array<VM.SitemapItem>, chunk_size: number) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  };

  getItems = (itemList: Array<VM.SitemapItem>) => {
    const ca = this.chunkArray(itemList, 3);
    const items = ca.map((chunk) => (
      <tr>
        {chunk.map((item) => (
          <td>
            <SitemapItem viewModel={item} />
          </td>
        ))}
      </tr>
    ));
    return items;
  };

  render() {
    return (
      <div className="sitemap">
        <table>
          <tbody>{this.getItems(this.props.viewModel.itemList)}</tbody>
        </table>
      </div>
    );
  }
}

export default Sitemap;
