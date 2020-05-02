import { observable } from "mobx";

//import { startSamples } from "./sampleCode";
// startSamples();

// Main page sections

export class Section {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

export class SectionBanner extends Section {
  constructor() {
    super("");
  }
}

export class HitChart extends Section {}

export class MusicPack extends Section {}

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
