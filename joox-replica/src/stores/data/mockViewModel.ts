import viewModel from "./viewModel";
import * as _ from "./viewModel";

export const initMockData = () => {
  console.log("initMockData");
  // Setup section
  viewModel.mainPage.content.sectionList.push(
    new _.SectionBanner([
      "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/1/e/49c2b1376addaf403cdc74766153801e.jpg",
      "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/1/6/e05fc40c2f8135c64fd11e948d20a016.jpg",
      "https://imgcache.joox.com/music/joox/photo_th_th/focus_1000/9/1/a82673bd46cef523f8dc793340239f91.jpg",
    ])
  );
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
