import * as React from "react";
import Banner from "./Banner";
import ContentSection from "./ContentSection";
import CarouselLarge from "./CarouselLarge";
import CarouselMedium from "./CarouselMedium";
import CarouselArtist from "./CarouselArtist";
import RoutableSection from "./RoutableSection";
import ButtonPanelLarge from "./ButtonPanelLarge";
import ButtonPanelMedium from "./ButtonPanelMedium";

export interface ContainerProps {}

const Container: React.SFC<ContainerProps> = () => {
  return (
    <div className="container">
      <Banner />
      <RoutableSection title="ชาร์ตเพลงฮิต">
        <CarouselMedium />
      </RoutableSection>
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
      <RoutableSection title="คอลัมน์เพลง">
        <CarouselLarge />
      </RoutableSection>

      <RoutableSection title="คอลัมน์เพลง">
        <CarouselLarge />
      </RoutableSection>
      <RoutableSection title="แนวเพลง">
        <ButtonPanelLarge />
      </RoutableSection>
      <RoutableSection title="ลิสต์เพลง">
        <ButtonPanelMedium />
      </RoutableSection>
    </div>
  );
};

export default Container;
