import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((count) => (
          <Counter
            key={count.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            count={count}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
