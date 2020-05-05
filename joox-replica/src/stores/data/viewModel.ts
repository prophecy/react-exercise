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

export class HitChart extends Section {}

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
  color: number;

  constructor() {
    this.url = this.desc = this.href = "";
    this.color = 0;
  }
}

export class SongColumn extends Section {
  itemList: Array<SongColumnItem>;

  constructor(
    title: string,
    urlList: Array<string>,
    descList: Array<string>,
    colorList: Array<number>
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

  constructor(title: string, href: string) {
    this.title = title;
    this.href = href;
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

export class SiteMap extends Section {
  constructor() {
    super("");
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
