import React from "react";
import CarouselBanner from "./CarouselBanner";
import ContentSection from "./ContentSection";
import CarouselLarge from "./CarouselLarge";
import CarouselMedium from "./CarouselMedium";
import CarouselArtist from "./CarouselArtist";
import RoutableSection from "./RoutableSection";
import ButtonPanelLarge from "./ButtonPanelLarge";
import ButtonPanelMedium from "./ButtonPanelMedium";
import Charts from "../Charts";

import Expander from "./Expander";
import Sitemap from "./Sitemap";

import { storeContext } from "../../stores/StoreContextProvider";
import {
  SectionBanner,
  HitChart,
  MusicPack,
  Genre,
  SongColumn,
  MusicList,
  SiteMap,
} from "../../stores/data/viewModel";

import { Route, Switch, Redirect } from "react-router-dom";

export interface ContainerProps {}
const Container: React.SFC<ContainerProps> = () => {
  const store = React.useContext(storeContext);

  const itemList = () => {
    return store?.viewModel.mainPage.content.sectionList.map((item, i) => {
      if (item.constructor.name === SectionBanner.name) {
        return <CarouselBanner key={i} />;
      } else if (item.constructor.name === HitChart.name) {
        return (
          <RoutableSection key={i} title={item.title}>
            <CarouselMedium />
          </RoutableSection>
        );
      } else if (item.constructor.name === MusicPack.name) {
        return (
          <ContentSection key={i} title={item.title}>
            <CarouselArtist />
          </ContentSection>
        );
      } else if (item.constructor.name === Genre.name) {
        return (
          <RoutableSection key={i} title={item.title}>
            <ButtonPanelLarge />
          </RoutableSection>
        );
      } else if (item.constructor.name === SongColumn.name) {
        return (
          <RoutableSection key={i} title={item.title}>
            <CarouselLarge />
          </RoutableSection>
        );
      } else if (item.constructor.name === MusicList.name) {
        return (
          <RoutableSection key={i} title={item.title}>
            <ButtonPanelMedium />
          </RoutableSection>
        );
      } else if (item.constructor.name === SiteMap.name) {
        return (
          <Expander
            key={i}
            expandedTitle="ปิด sitemap"
            collapsedTitle="แสดง sitemap"
          >
            <Sitemap />
          </Expander>
        );
      }
    });
  };

  return (
    <Switch>
      <Route
        path="/charts"
        render={(props) => <div className="container">{<Charts />}</div>}
      />
      <Route
        path="/"
        render={(props) => <div className="container">{itemList()}</div>}
      ></Route>
      ;
    </Switch>
  );
};

export default Container;
