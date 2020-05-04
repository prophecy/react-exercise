import * as React from "react";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { storeContext } from "../../stores/StoreContextProvider";

import { SectionBanner } from "../../stores/data/viewModel";

export interface CarouselBannerProps {
  viewModel: SectionBanner;
}

export interface CarouselBannerState {}

class CarouselBanner extends React.Component<
  CarouselBannerProps,
  CarouselBannerState
> {
  state = { isSingle: Boolean, value: 0 };

  constructor(props: CarouselBannerProps) {
    super(props);
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount() {
    this.setState({ isSingle: true });
    this.setState({
      urlList: [],
    });
  }

  onchange(value: number) {
    this.setState({ value });
  }
  getItemList = () =>
    this.props.viewModel.urlList.map((item, i) => <img key={i} src={item} />);

  getSingleSlide = () => (
    <Carousel
      infinite
      value={this.state.value}
      autoPlay={2000}
      animationSpeed={500}
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
            number={this.props.viewModel.urlList.length}
          />
        </div>
      </div>
    );
  }
}

export default CarouselBanner;
