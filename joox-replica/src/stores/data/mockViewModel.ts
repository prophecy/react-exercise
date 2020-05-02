import viewModel from "./viewModel";
import * as _ from "./viewModel";

export const initMockData = () => {
  console.log("initMockData");
  // Setup section
  viewModel.mainPage.content.sectionList.push(new _.SectionBanner());
  viewModel.mainPage.content.sectionList.push(new _.HitChart("ชาร์ตเพลงฮิต"));
  viewModel.mainPage.content.sectionList.push(
    new _.MusicPack("JOOX for Artists")
  );
  viewModel.mainPage.content.sectionList.push(
    new _.MusicPack("#togetherwecan")
  );
  viewModel.mainPage.content.sectionList.push(new _.MusicPack("เพลงใหม่"));
  viewModel.mainPage.content.sectionList.push(new _.Genre("เพลงใหม่"));
  viewModel.mainPage.content.sectionList.push(new _.SongColumn("คอลัมน์เพลง"));
  viewModel.mainPage.content.sectionList.push(new _.MusicList("ลิสต์เพลง"));
  viewModel.mainPage.content.sectionList.push(new _.SiteMap());
};
