import * as React from "react";
import { Link } from "react-router-dom";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { MusicPack } from "../../stores/data/viewModel";

export interface CarouselAristProps {
  viewModel: MusicPack;
}

export interface CarouselArtistState {}

class CarouselArtist extends React.Component<
  CarouselAristProps,
  CarouselArtistState
> {
  state = {};

  getItemList = () =>
    this.props.viewModel.itemList.map((item, i) => (
      <div key={i} className="artist-container">
        <img src={item.url} />
        <Link to={"playlist/" + item.href}>{item.desc}</Link>
      </div>
    ));

  render() {
    return (
      <div className="carousel carousel-artist">
        <Carousel slidesPerPage={4}>{this.getItemList()}</Carousel>
      </div>
    );
  }
}

export default CarouselArtist;
