import React from "react";

export interface ExpanderProps {
  expandedTitle: string;
  collapsedTitle: string;
}

export interface ExpanderState {
  isExpanded: boolean;
}

class Expander extends React.Component<ExpanderProps, ExpanderState> {
  state = { isExpanded: false };

  handleExpand = () => {
    this.setState({ isExpanded: true });
  };
  handleCollapse = () => {
    this.setState({ isExpanded: false });
  };

  showExpandItem = () => {
    return (
      this.props.collapsedTitle + " " + <i className="fa fa-chevron-up"></i>
    );
  };

  render() {
    return (
      <div className="expander">
        <div>
          <button
            onClick={() =>
              this.state.isExpanded
                ? this.handleCollapse()
                : this.handleExpand()
            }
          >
            {this.state.isExpanded
              ? this.props.expandedTitle
              : this.props.collapsedTitle}{" "}
            {this.state.isExpanded ? (
              <i className="fa fa-angle-up"></i>
            ) : (
              <i className="fa fa-angle-down"></i>
            )}
          </button>
        </div>
        {this.state.isExpanded ? this.props.children : ""}
      </div>
    );
  }
}

export default Expander;
