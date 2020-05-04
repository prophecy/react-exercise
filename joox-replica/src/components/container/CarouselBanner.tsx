import * as React from "react";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

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

  handlePrev = () => {
    let prevValue = this.state.value - 1;
    if (prevValue < 0) prevValue = this.props.viewModel.urlList.length - 1;
    this.setState({ value: prevValue });
  };

  handleNext = () => {
    let nextValue = this.state.value + 1;
    if (nextValue >= this.props.viewModel.urlList.length) nextValue = -1;
    this.setState({ value: nextValue });
  };

  render() {
    return (
      <div className="carousel carousal-banner">
        <div>{this.getSingleSlide()}</div>
        <div className="dots">
          <Dots
            value={this.state.value}
            onChange={this.onchange}
            number={this.props.viewModel.urlList.length}
          />
        </div>
        <div className="prev">
          <button
            onClick={this.handlePrev}
            className="fa fa-chevron-left"
          ></button>
        </div>
        <div className="next">
          <button
            onClick={this.handleNext}
            className="fa fa-chevron-right"
          ></button>
        </div>
      </div>
    );
  }
}

export default CarouselBanner;
