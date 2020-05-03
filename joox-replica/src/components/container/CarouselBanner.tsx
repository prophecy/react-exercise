import * as React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export interface CarouselBannerProps {}

const CarouselBanner: React.SFC<CarouselBannerProps> = () => {
  return (
    <div className="carousel carousal-banner">
      {" "}
      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={398}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <img
              className="carousel-image"
              src="https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/1/6/e05fc40c2f8135c64fd11e948d20a016.jpg"
            ></img>
          </Slide>
          <Slide index={1}>
            <img
              className="carousel-image"
              src="https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/c/4/f663e8cc1c6e9aaab8b78079946806c4.jpg"
            ></img>
          </Slide>
          <Slide index={2}>
            <img
              className="carousel-image"
              src="https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/1/3/650b7f4b9125ca0d6342eacc33539913.jpg"
            ></img>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default CarouselBanner;
