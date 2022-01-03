import React, { Component } from 'react';

// 18. State
// this.state ... 参照、初期化
// setState() ... 再設定、再描画

const App = () => {
  return <Counter></Counter>;
};

interface IState {
  count: number;
}

class Counter extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleResetButton = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
        <button onClick={this.handleResetButton}>Reset</button>
      </div>
    );
  }
}

export default App;
