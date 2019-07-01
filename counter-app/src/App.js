import React, { Component } from "react";
import Counters from "./components/counters";
import "./App.css";
import Navbar from "./components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(a => {
      a.value = 0;
      return a;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) {
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          totalcounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onDel={this.handleDelete}
          onInc={this.handleIncrement}
          onDec={this.handleDecrement}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
