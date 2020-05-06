import * as React from "react";
import { MusicList } from "../../stores/data/viewModel";

export interface ButtonPanelMusicListProps {
  viewModel: MusicList;
}

const ButtonPanelMusicList: React.SFC<ButtonPanelMusicListProps> = (props) => {
  return (
    <div className="button-panel button-panel-music-list">
      {props.viewModel.musicList.map((item, i) => (
        <div key={i} className="button-music-list">
          <img src={item.imgUrl} alt=""></img>
          <div className="link-holder">
            <a href={item.href}>{item.title}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonPanelMusicList;
