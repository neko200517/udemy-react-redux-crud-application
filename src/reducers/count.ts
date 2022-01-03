import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { increment, decrement, reset } from '../actions';

export interface ICountState {
  value: number;
  message?: string;
}

const initialState: ICountState = { value: 0 };

const switchEvents = reducerWithInitialState(initialState)
  .case(increment, (state: ICountState) => {
    return { value: state.value + 1 };
  })
  .case(decrement, (state: ICountState) => {
    return { value: state.value - 1 };
  })
  .case(reset, (state: ICountState, payload) => {
    return { value: payload, message: 'reset' };
  })
  .default((state) => {
    return state;
  });

export default switchEvents;
