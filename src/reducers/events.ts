/* eslint-disable eqeqeq */
import _ from 'lodash';
import {
  READ_EVENTS,
  DELETE_EVENTS,
  READ_EVENT,
  CREATE_EVENTS,
  UPDATE_EVENTS,
} from '../actions';

const switchEvents = (events: any = {}, action: any) => {
  switch (action.type) {
    case UPDATE_EVENTS:
    case CREATE_EVENTS:
    case READ_EVENT:
      return { data: action.resopnse.data };
    case READ_EVENTS:
      // return action.resopnse.data;
      return _.mapKeys(action.resopnse.data, 'id');
    case DELETE_EVENTS:
      // events = events.filter((x: any) => x.id != action.id);
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};

export default switchEvents;
