import { observable } from "mobx";
import { url } from "inspector";

//import { startSamples } from "./sampleCode";
//import { MusicList } from './viewModel';
//startSamples();

// Main page sections

export class Section {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

export class SectionBanner extends Section {
  urlList: Array<string>;
  constructor(urlList: Array<string>) {
    super("");
    this.urlList = urlList;
  }
}

export class HitChartItem {
  url: string;
  title: string;
  color: string;
  songList: Array<string>;
  artistList: Array<string>;

  constructor(
    url: string,
    title: string,
    color: string,
    songList: Array<string>,
    artistList: Array<string>
  ) {
    this.url = url;
    this.title = title;
    this.color = color;
    this.songList = songList;
    this.artistList = artistList;
  }
}

export class HitChart extends Section {
  itemList: Array<HitChartItem>;

  constructor(title: string, itemList: Array<HitChartItem>) {
    super(title);
    this.itemList = itemList;
  }
}

export class MusicPackItem {
  url: string;
  desc: string;
  href: string;

  constructor() {
    this.url = this.desc = this.href = "";
  }
}

export class MusicPack extends Section {
  itemList: Array<MusicPackItem>;

  constructor(
    title: string,
    urlList: Array<string>,
    descList: Array<string>,
    hrefList: Array<string>
  ) {
    super(title);
    this.itemList = urlList.map((url, i) => {
      const item = new MusicPackItem();
      item.url = url;
      item.desc = descList[i];
      item.href = hrefList[i];
      return item;
    });
  }
}

export class SongColumnItem {
  url: string;
  desc: string;
  href: string;
  color: string;

  constructor() {
    this.url = this.desc = this.href = "";
    this.color = "#000000";
  }
}

export class SongColumn extends Section {
  itemList: Array<SongColumnItem>;

  constructor(
    title: string,
    urlList: Array<string>,
    descList: Array<string>,
    colorList: Array<string>
  ) {
    super(title);

    this.itemList = urlList.map((url, i) => {
      const item = new SongColumnItem();
      item.url = url;
      item.desc = descList[i];
      item.color = colorList[i];
      return item;
    });
  }
}

export class GenreItem {
  title: string;
  href: string;
  bgImage: string;

  constructor(title: string, href: string, bgImage: string) {
    this.title = title;
    this.href = href;
    this.bgImage = bgImage;
  }
}

export class Genre extends Section {
  genreList: Array<GenreItem>;

  constructor(title: string, genreList: Array<GenreItem>) {
    super(title);
    this.genreList = genreList;
  }
}

export class MusicListItem {
  imgUrl: string;
  title: string;
  href: string;

  constructor(imgUrl: string, title: string, href: string) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.href = href;
  }
}

export class MusicList extends Section {
  musicList: Array<MusicListItem>;

  constructor(title: string, musicList: Array<MusicListItem>) {
    super(title);
    this.musicList = musicList;
  }
}

export class SitemapItem {
  title: string;
  desc: string;

  constructor(title: string, desc: string) {
    this.title = title;
    this.desc = desc;
  }
}

export class Sitemap extends Section {
  itemList: Array<SitemapItem>;

  constructor(itemList: Array<SitemapItem>) {
    super("");
    this.itemList = itemList;
  }
}

export const viewModel = observable({
  mainPage: {
    header: {},
    sideBar: {},
    footder: Section,
    content: {
      sectionList: new Array<any>(),
    },
  },
  playList: {
    highlight: "",
  },
});

export default viewModel;
