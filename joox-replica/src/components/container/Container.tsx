import React from "react";
import CarouselBanner from "./CarouselBanner";
import ContentSection from "./ContentSection";
import CarouselLarge from "./CarouselSongColumn";
import CarouselMedium from "./CarouselMedium";
import CarouselArtist from "./CarouselArtist";
import RoutableSection from "./RoutableSection";
import ButtonPanelGenre from "./ButtonPanelGenre";
import ButtonPanelMusicList from "./ButtonPanelMusicList";

import Charts from "../Charts";
import PlayList from "../Playlist";

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
        return <CarouselBanner key={i} viewModel={item} />;
      } else if (item.constructor.name === HitChart.name) {
        return (
          <RoutableSection key={i} title={item.title}>
            <CarouselMedium />
          </RoutableSection>
        );
      } else if (item.constructor.name === MusicPack.name) {
        return (
          <ContentSection key={i} title={item.title}>
            <CarouselArtist viewModel={item} />
          </ContentSection>
        );
      } else if (item.constructor.name === Genre.name) {
        return (
          <RoutableSection key={i} title={item.title}>
            <ButtonPanelGenre viewModel={item} />
          </RoutableSection>
        );
      } else if (item.constructor.name === SongColumn.name) {
        return (
          <RoutableSection key={i} title={item.title}>
            <CarouselLarge viewModel={item} />
          </RoutableSection>
        );
      } else if (item.constructor.name === MusicList.name) {
        return (
          <RoutableSection key={i} title={item.title}>
            <ButtonPanelMusicList viewModel={item} />
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
        path="/playlist/:id"
        render={(props) => <div className="container">{<PlayList />}</div>}
      />
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
