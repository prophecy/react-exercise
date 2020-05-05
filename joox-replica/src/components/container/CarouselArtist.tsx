import * as React from "react";
import { Link } from "react-router-dom";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { MusicPack } from "../../stores/data/viewModel";

export interface CarouselAristProps {
  viewModel: MusicPack;
}

export interface CarouselArtistState {}

const tmp =
  "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/4/1/6faf93a38aaf0c11ca55dcc48cd4c841.jpg";

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
