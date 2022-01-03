import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

// 23. connectでstateとactionsとの関連付けを行う

interface ICountProps {
  value: number;
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
}

class App extends Component<ICountProps> {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: { count: { value: number } }) => ({
  value: state.count.value,
});

// const mapDispatchToProps = (dispatch: any) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

// 上記をシンプルに記述可能
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);
