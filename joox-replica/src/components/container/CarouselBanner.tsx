import * as React from "react";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export interface CarouselBannerProps {}

export interface CarouselBannerState {}

class CarouselBanner extends React.Component<
  CarouselBannerProps,
  CarouselBannerState
> {
  state = { isSingle: Boolean, urlList: Array<string>(), value: 0 };

  constructor(props: CarouselBannerProps) {
    super(props);
    this.onchange = this.onchange.bind(this);
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

  onchange(value: number) {
    this.setState({ value });
  }

  getItemList = () =>
    this.state.urlList.map((item, i) => <img key={i} src={item} />);

  getSingleSlide = () => (
    <Carousel
      infinite
      value={this.state.value}
      autoPlay={2000}
      animationSpeed={1000}
      //slides={this.getItemList()}
      onChange={this.onchange}
    >
      {this.getItemList()}
    </Carousel>
  );

  render() {
    return (
      <div className="carousel carousal-banner">
        <div className="content">{this.getSingleSlide()}</div>
        <div className="dots">
          <Dots
            value={this.state.value}
            onChange={this.onchange}
            number={this.state.urlList.length}
          />
        </div>
      </div>
    );
  }
}

export default CarouselBanner;
