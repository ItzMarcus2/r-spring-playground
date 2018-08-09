import React, { Component } from "react";
import "./App.css";
import { Transition, animated } from "react-spring";

class App extends Component {
  state = {
    items: ["list 1", "list 2", "list 3", "list 4"]
  };

  componentDidMount() {
    // Insert item
    setTimeout(
      () => this.setState({ items: [...this.state.items, "item 5"] }),
      2000
    );
  }

  render() {
    return (
      <ul>
        <Transition
          native
          keys={this.state.items}
          from={{ opacity: 0, marginLeft: 0 }}
          enter={{ opacity: 1, marginLeft: 30 }}
          leave={{ opacity: 0, marginLeft: 0 }}
        >
          {this.state.items.map(item => <animated.li>{item}</animated.li>)}
        </Transition>
      </ul>
    );
  }
}

export default App;
