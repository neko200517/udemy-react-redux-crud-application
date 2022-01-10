import axios, { AxiosResponse } from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENTS = 'CREATE_EVENTS';

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
    const resopnse = await axios.post(
      `${ROOT_URL}/events${QUERYSTRING}`,
      values
    );
    dispatch({ type: CREATE_EVENTS, resopnse });
  };
