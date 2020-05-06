import * as React from "react";
import * as VM from "../../stores/data/viewModel";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Link } from "react-router-dom";

export interface CarouselHitChartProps {
  viewModel: VM.HitChart;
}

export interface CarouselHitChartState {}

class CarouselHitChart extends React.Component<
  CarouselHitChartProps,
  CarouselHitChartState
> {
  state = {};

  getItemList = () =>
    this.props.viewModel.itemList.map((item, i) => (
      <div key={i} className="hit-chart-container">
        <div className="image-holder">
          <img src={item.url} />
        </div>
        <div className="desc-container" style={{ backgroundColor: item.color }}>
          <h1>{item.title}</h1>
          <div className="song-container">
            {item.songList.map((songName, i) => (
              <p key={i}>
                <b className="bullet">{i + 1}</b>
                <i className="fa fa-play-circle"></i>
                <b>{songName}</b> -{" "}
                <span className="artist">{item.artistList[i]}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="carousel carousel-hit-chart">
        <Carousel slidesPerPage={6}>{this.getItemList()}</Carousel>
      </div>
    );
  }
}

export default CarouselHitChart;
