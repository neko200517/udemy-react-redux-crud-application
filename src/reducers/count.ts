import { INCREMENT, DECREMENT, ICountActionType } from '../actions';

export interface ICountState {
  value: number;
}

const initialState: ICountState = { value: 0 };

const switchEvents = (state = initialState, action: ICountActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default switchEvents;
