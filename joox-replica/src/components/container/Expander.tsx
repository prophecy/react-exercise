import React from "react";

export interface ExpanderProps {
  expandedTitle: string;
  collapsedTitle: string;
  handleExpand: any;
  handleCollapse: any;
}

export interface ExpanderState {
  isExpanded: boolean;
}

class Expander extends React.Component<ExpanderProps, ExpanderState> {
  state = { isExpanded: false };

  handleExpand = () => {
    this.props.handleExpand();
    this.setState({ isExpanded: true });
  };
  handleCollapse = () => {
    this.props.handleCollapse();
    this.setState({ isExpanded: false });
  };

  render() {
    return (
      <div className="expander">
        <button
          onClick={() =>
            this.state.isExpanded ? this.handleCollapse() : this.handleExpand()
          }
        >
          {this.state.isExpanded
            ? this.props.expandedTitle
            : this.props.collapsedTitle}
        </button>
      </div>
    );
  }
}

export default Expander;
