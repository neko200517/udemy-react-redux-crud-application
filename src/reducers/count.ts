import { INCREMENT, DECREMENT, CountActionType } from '../actions';

const initialState = { value: 0 };

const switchEvents = (state = initialState, action: CountActionType) => {
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
