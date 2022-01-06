import _ from 'lodash';
import { READ_EVENTS } from '../actions';

const switchEvents = (events = {}, action: any) => {
  switch (action.type) {
    case READ_EVENTS:
      return action.resopnse.data;
    // return _.mapKeys(action.resopnse.data, 'id');
    default:
      return events;
  }
};

export default switchEvents;
