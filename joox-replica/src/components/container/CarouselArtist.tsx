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
        <div className="image-holder">
          <img src={item.url} />
          <div className="overlay">
            <i className="fa fa-play-circle"></i>
          </div>
        </div>
        <div className="desc-holder">
          <Link to={"playlist/" + item.href}>{item.desc}</Link>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="carousel carousel-artist">
        <Carousel slidesPerPage={12}>{this.getItemList()}</Carousel>
      </div>
    );
  }
}

export default CarouselArtist;
