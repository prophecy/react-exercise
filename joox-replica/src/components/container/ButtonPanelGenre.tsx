import * as React from "react";
import { Genre } from "../../stores/data/viewModel";

export interface ButtonPanelGenreProps {
  viewModel: Genre;
}

const ButtonPanelGenre: React.SFC<ButtonPanelGenreProps> = (props) => {
  return (
    <div className="button-panel button-panel-genre">
      {props.viewModel.genreList.map((item, i) => (
        <div key={i} className="button-genre">
          <div className="bg-content">
            <img src={item.bgImage}></img>
            <div className="overlay"></div>
          </div>
          <div className="link-holder">
            <a href={item.href}>{item.title}</a>
            <a className="fa fa-angle-right" href={item.href}></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonPanelGenre;
