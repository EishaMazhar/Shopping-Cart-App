import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>My Shopping Cart!!</h1>
        <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>

        {this.props.counters.map(a => (
          <Counter
            key={a.id}
            onDelete={this.props.onDel}
            counter={a}
            onInc={this.props.onInc}
            onDec={this.props.onDec}
          />
        ))}
        {/* <p>{this.state.totalCount}</p> */}
      </div>
    );
  }
}

export default Counters;

/* <Counter updateCounter={this.updateCounter.bind(this.state.count)} />
        <Counter updateCounter={this.updateCounter.bind(this)}>
          <h1>Counter # {}</h1>
        </Counter>
        />
        <Counter updateCounter={this.updateCounter.bind(this)} />
        <Counter updateCounter={this.updateCounter.bind(this)} />
        <Counter updateCounter={this.updateCounter.bind(this)} />
        <Counter updateCounter={this.updateCounter.bind(this)} /> */
