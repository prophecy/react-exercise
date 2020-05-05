import * as React from "react";
import { Link } from "react-router-dom";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { SongColumn } from "../../stores/data/viewModel";

export interface CarouselSongColumnProps {
  viewModel: SongColumn;
}

export interface CarouselSongColumnState {}

class CarouselSongColumn extends React.Component<
  CarouselSongColumnProps,
  CarouselSongColumnState
> {
  state = {};

  getItemList = () =>
    this.props.viewModel.itemList.map((item, i) => (
      <div key={i} className="song-column-container">
        <div className="image-holder">
          <img src={item.url} />
        </div>
        <div className="desc-container">
          <Link to={"song-column/" + item.href}>{item.desc}</Link>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="carousel carousel-song-column">
        <Carousel slidesPerPage={2}>{this.getItemList()}</Carousel>
      </div>
    );
  }
}

export default CarouselSongColumn;
