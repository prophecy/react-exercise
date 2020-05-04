import { observable } from "mobx";

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
      const mpi = new MusicPackItem();
      mpi.url = url;
      mpi.desc = descList[i];
      mpi.href = hrefList[i];
      return mpi;
    });
  }
}

export class SongColumn extends Section {}

export class Genre extends Section {}

export class MusicList extends Section {}

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
});

export default viewModel;
