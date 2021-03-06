import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.count.value,
  //   };

  // constructor() {
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this)
  // }

  //   handleIncrement = () => {
  //     this.setState({ value: this.props.count.value + 1 });
  //   };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            this.props.onIncrement(this.props.count);
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.count.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.count.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
