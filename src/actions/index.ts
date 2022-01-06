import axios, { AxiosResponse } from 'axios';

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export interface ICountActionType {
  type: 'READ_EVENTS';
}

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
