import React, { Component } from 'react';
import { ICountState } from '../reducers/count';

// 23. connectでstateとactionsとの関連付けを行う

interface ICountStateEx extends ICountState {
  increment: () => void;
  decrement: () => void;
  reset: (value: number) => void;
}

export class App extends Component<ICountStateEx> {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button
          onClick={() => {
            props.increment();
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            props.decrement();
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            props.reset(0);
          }}
        >
          reset
        </button>
      </React.Fragment>
    );
  }
}
