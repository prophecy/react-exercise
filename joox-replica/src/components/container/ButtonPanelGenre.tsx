import * as React from "react";
import { Genre } from "../../stores/data/viewModel";

export interface ButtonPanelGenreProps {
  viewModel: Genre;
}

const ButtonPanelGenre: React.SFC<ButtonPanelGenreProps> = (props) => {
  return (
    <div className="button-panel button-panel-genre">
      {props.viewModel.genreList.map((item, i) => (
        <div className="button-genre">
          <div className="link-holder">
            <a href={item.href}>{item.title}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonPanelGenre;
