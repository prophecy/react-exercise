import viewModel from "./viewModel";
import * as _ from "./viewModel";

const singerSongMap: { [id: string]: string } = {
  gavin_d: "รักได้ป่าว",
  maiyarap: "Faith",
  fiixd: "เพลีย",
  mindset: "WIP WUP (วิบวับ)",
  southside: "Trust Nobody",

  thai: "ลืมว่าต้องลืม (Forget to forget)",
  kpop: "Ridin'",
  looktung: "เคียวยืน#1",
  inter: "Be Kind",
  indie_inter: "Brooklyn Bridge To Chorus",
  hot_of_month: "Be Kind",
  new_podcast: "MU EP.13 อัพเทดโลกการลงทุน ประจำวันที่ 4 พ.ค. 63",
};

export const getPlayListData = (pid: string) => {
  if (!!singerSongMap[pid]) {
    viewModel.playList.highlight = singerSongMap[pid];
  } else {
    viewModel.playList.highlight = "Not found!";
  }
};
