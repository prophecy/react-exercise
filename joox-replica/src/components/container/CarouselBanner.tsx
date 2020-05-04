import * as React from "react";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export interface CarouselBannerProps {}

export interface CarouselBannerState {}

class CarouselBanner extends React.Component<
  CarouselBannerProps,
  CarouselBannerState
> {
  state = { isSingle: Boolean, urlList: Array<string>() };

  constructor(props: CarouselBannerProps) {
    super(props);
  }

  componentDidMount() {
    this.setState({ isSingle: true });
    this.setState({
      urlList: [
        "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/1/e/49c2b1376addaf403cdc74766153801e.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/1/6/e05fc40c2f8135c64fd11e948d20a016.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/9/1/a82673bd46cef523f8dc793340239f91.jpg",
      ],
    });
  }

  getSingleSlide = () => (
    <Carousel infinite>
      {this.state.urlList.map((item, i) => (
        <img key={i} src={item} />
      ))}
    </Carousel>
  );

  getThreeSides = () => (
    <Carousel centered infinite arrows slidesPerPage={2}>
      {this.state.urlList.map((item, i) => (
        <img key={i} src={item} />
      ))}
    </Carousel>
  );

  render() {
    return (
      <div className="carousel carousal-banner">
        {this.state.isSingle ? this.getSingleSlide() : this.getThreeSides()}
      </div>
    );
  }
}

export default CarouselBanner;
