import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionCreator } from '../actions';
import { App } from './App';

interface ICountStateToProps {
  count: {
    value: number;
    message: string;
  };
}

const mapStateToProps = (state: ICountStateToProps) => ({
  value: state.count.value,
  message: state.count.message,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => {
      dispatch(ActionCreator.increment());
    },
    decrement: () => {
      dispatch(ActionCreator.decrement());
    },
    reset: (value: number = 0) => {
      dispatch(ActionCreator.reset(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
