import * as React from "react";
import Banner from "./Banner";
import ContentSection from "./ContentSection";
import CarouselLarge from "./CarouselLarge";
import CarouselMedium from "./CarouselMedium";
import CarouselArtist from "./CarouselArtist";

export interface ContainerProps {}

const Container: React.SFC<ContainerProps> = () => {
  return (
    <div className="container">
      <Banner />
      <ContentSection title="ชาร์ตเพลงฮิต">
        <CarouselMedium />
      </ContentSection>
      <ContentSection title="เพลงใหม่">
        <CarouselArtist />
      </ContentSection>
      <ContentSection title="พอดแคสต์">
        <CarouselArtist />
      </ContentSection>
      <ContentSection title="ลูกทุ่งฮิตติดชาร์ต">
        <CarouselArtist />
      </ContentSection>
      <ContentSection title="เพลง | อัลบั้ม ใหม่ล่าสุด">
        <CarouselArtist />
      </ContentSection>
      <ContentSection title="คลาสสิคอัลบั้ม">
        <CarouselArtist />
      </ContentSection>
      <ContentSection title="คอลัมน์เพลง">
        <CarouselLarge />
      </ContentSection>
    </div>
  );
};

export default Container;
