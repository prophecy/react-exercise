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
    new _.MusicPack(
      "JOOX for Artists",
      [
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/9/8/aff2a28324293c8565457364fbd7b798.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/d/c/0d7621c4ff9998270c6e6ab6037cc5dc.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/3/5/e4dbf19e97dc4fc2d41e6490df210a35.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/9/8/aff2a28324293c8565457364fbd7b798.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/d/c/0d7621c4ff9998270c6e6ab6037cc5dc.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/3/5/e4dbf19e97dc4fc2d41e6490df210a35.jpg",
      ],
      ["aaaa", "bbbb", "cccc", "dddd", "eeee"],
      ["new0", "new1", "new2", "new3", "new4"]
    )
  );
  viewModel.mainPage.content.sectionList.push(
    new _.MusicPack(
      "#togetherwecan",
      [
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/b/3/2f915170a43dd6514c3fdbe328c06cb3.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/b/5/916127c6512176a2ff39ec2f58635cb5.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/0/8/bac1a9ef179070bda269b54bb99bac08.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/a/1/59233a563cf87a63ea7cfe8ac87aa2a1.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/5/4/4ae45fc9926911668e0256963b4d6954.jpg",
      ],
      ["aaaa", "bbbb", "cccc", "dddd", "eeee"],
      ["new0", "new1", "new2", "new3", "new4"]
    )
  );
  viewModel.mainPage.content.sectionList.push(
    new _.MusicPack(
      "เพลงใหม่",
      [
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/5/e/d3a273e7dcccd8e066f65df0130e3d5e.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/d/c/894d4e9b995ba12627d9777353ed49dc.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/9/b/0178443bf92c00b798c90b7740592c9b.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/a/c/752179503ac7a9911151c07c3bb3c7ac.jpg",
        "https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/5/0/70abf00c9b0bde422d518b68a8a75650.jpg",
      ],
      ["aaaa", "bbbb", "cccc", "dddd", "eeee"],
      ["new0", "new1", "new2", "new3", "new4"]
    )
  );
  viewModel.mainPage.content.sectionList.push(new _.Genre("เพลงใหม่"));
  viewModel.mainPage.content.sectionList.push(new _.SongColumn("คอลัมน์เพลง"));
  viewModel.mainPage.content.sectionList.push(new _.MusicList("ลิสต์เพลง"));
  viewModel.mainPage.content.sectionList.push(new _.SiteMap());
};
