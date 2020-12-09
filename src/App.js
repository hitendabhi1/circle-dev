import React, { Component } from "react";

import Circle from "./circle";

import "./css/app.css";

class App extends Component {
  state = {
    circles: [true, true, true],
  };

  handleRender = async (index) => {
    await this.setState({
      circles: [true, true, true],
    });

    // 1. Make a shallow copy of the items
    let items = [...this.state.circles];
    // 3. Replace the property you're intested in
    let item = false;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    // 5. Set the state to our new copy
    this.setState({ circles: items });
  };

  render() {
    return (
      <div className="app">
        {this.state.circles.map((circle, index) => (
          <Circle
            display={circle}
            index={index}
            renderFunction={() => this.handleRender(index)}
          ></Circle>
        ))}
      </div>
    );
  }
}

export default App;
