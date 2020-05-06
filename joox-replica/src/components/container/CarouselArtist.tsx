import * as React from "react";
import { Link } from "react-router-dom";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { MusicPack } from "../../stores/data/viewModel";

export interface CarouselAristProps {
  viewModel: MusicPack;
}

export interface CarouselArtistState {
  value: number;
  count: number;
}

class CarouselArtist extends React.Component<
  CarouselAristProps,
  CarouselArtistState
> {
  state = { value: 0, count: 12 };

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

  handlePrev = () => {
    let prevValue = this.state.value - 1;
    if (prevValue >= 0) this.setState({ value: prevValue });
  };

  handleNext = () => {
    let nextValue = this.state.value + 1;
    if (nextValue < this.props.viewModel.itemList.length)
      this.setState({ value: nextValue });
  };

  onchange = (value: number) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="carousel carousel-artist">
        <Carousel
          value={this.state.value}
          slidesPerPage={this.state.count}
          onChange={this.onchange}
        >
          {this.getItemList()}
        </Carousel>

        {this.state.value > 0 ? (
          <div className="prev">
            <button
              onClick={this.handlePrev}
              className="fa fa-angle-left"
            ></button>
          </div>
        ) : (
          <div></div>
        )}

        {this.state.value < this.props.viewModel.itemList.length - 1 ? (
          <div className="next">
            <button
              onClick={this.handleNext}
              className="fa fa-angle-right"
            ></button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default CarouselArtist;
