import axios, { AxiosResponse } from 'axios';

export const READ_EVENT = 'READ_EVENT';
export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENTS = 'CREATE_EVENTS';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';
export const DELETE_EVENTS = 'DELETE_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents =
  () =>
  async (
    dispatch: (arg0: {
      type: string;
      resopnse: AxiosResponse<any, any>;
    }) => void
  ) => {
    const resopnse = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
    dispatch({ type: READ_EVENTS, resopnse });
  };

export const postEvent =
  (values: any) =>
  async (
    dispatch: (arg0: {
      type: string;
      resopnse: AxiosResponse<any, any>;
    }) => void
  ) => {
    const data: {
      title: string;
      body: string;
    } = {
      title: values.target[0].value,
      body: values.target[1].value,
    };
    const resopnse = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, data);
    dispatch({ type: CREATE_EVENTS, resopnse });
  };

export const deleteEvent =
  (id: any) => async (dispatch: (arg0: { type: string; id: any }) => void) => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
    dispatch({ type: DELETE_EVENTS, id });
  };

export const readEvent =
  (id: any) =>
  async (
    dispatch: (arg0: {
      type: string;
      resopnse: AxiosResponse<any, any>;
    }) => void
  ) => {
    const resopnse = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
    dispatch({ type: READ_EVENT, resopnse });
  };

export const putEvent =
  (id: any, values: any) =>
  async (
    dispatch: (arg0: {
      type: string;
      resopnse: AxiosResponse<any, any>;
    }) => void
  ) => {
    const data: {
      title: string;
      body: string;
    } = {
      title: values.target[0].value,
      body: values.target[1].value,
    };
    const resopnse = await axios.put(
      `${ROOT_URL}/events/${id}${QUERYSTRING}`,
      data
    );
    dispatch({ type: UPDATE_EVENTS, resopnse });
  };
