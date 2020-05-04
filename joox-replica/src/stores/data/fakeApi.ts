import viewModel from "./viewModel";
import * as _ from "./viewModel";

export const getPlayListData = (pid: string) => {
  if (pid === "new0") {
    viewModel.playList.highlight = "Faith";
  } else if (pid === "new1") {
    viewModel.playList.highlight = "รักได้ป่าว";
  } else if (pid === "new2") {
    viewModel.playList.highlight = "WIP WUP";
  } else if (pid === "new3") {
    viewModel.playList.highlight = "วันสุดท้าย";
  } else {
    viewModel.playList.highlight = "Not found!";
  }
};
