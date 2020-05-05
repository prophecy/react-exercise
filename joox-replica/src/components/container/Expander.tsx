import React from "react";

export interface ExpanderProps {
  expandedTitle: string;
  collapsedTitle: string;
}

export interface ExpanderState {
  isExpanded: boolean;
}

class Expander extends React.Component<ExpanderProps, ExpanderState> {
  state = { isExpanded: true };

  handleExpand = () => {
    this.setState({ isExpanded: true });
  };
  handleCollapse = () => {
    this.setState({ isExpanded: false });
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
              : this.props.collapsedTitle}
          </button>
        </div>
        {this.state.isExpanded ? this.props.children : ""}
      </div>
    );
  }
}

export default Expander;
