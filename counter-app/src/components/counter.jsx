import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onDelete, onIncrement, onDecrement } = this.props;

    return (
      <div className="">
        <div className="row">
          <div className="col-1 m-2">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>

          <div className="col">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>

            <button
              onClick={() => onDecrement(counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={counter.value === 0 ? "disable" : ""}
            >
              -
            </button>

            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
