import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  getBadge() {
    let BadgeClass = "badge m-2 badge-";
    return (BadgeClass +=
      this.props.counter.value === 0 ? "warning" : "primary");
  }
  // getState() {
  //   return this.state.count;
  // }
  formatCount(props) {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div>
        <h4>Item # {this.props.counter.id}</h4>
        <img src="https://picsum.photos/100/100" alt="" />
        <span style={this.styles} className={this.getBadge()}>
          {this.formatCount()}
        </span>

        <button
          style={this.styles}
          onClick={() => this.props.onInc(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          style={this.styles}
          onClick={() => this.props.onDec(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

// renderTags() {
//   if (this.state.tags.length === 0) return <p />;
//   return (
//     <ul>
//       {this.state.tags.map(tag => (
//         <li key={tag}>{tag}</li>
//       ))}
//     </ul>
//   );
// }
