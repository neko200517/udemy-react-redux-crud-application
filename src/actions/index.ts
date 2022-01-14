import axios, { AxiosResponse } from 'axios';

export const READ_EVENT = 'READ_EVENT';
export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENTS = 'CREATE_EVENTS';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';
export const DELETE_EVENTS = 'DELETE_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export type DispatchType = (args0: {
  type:
    | 'READ_EVENT'
    | 'READ_EVENTS'
    | 'CREATE_EVENTS'
    | 'UPDATE_EVENTS'
    | 'DELETE_EVENTS';
  resopnse?: AxiosResponse<any, any>;
  id?: number;
}) => void;

// 読み込み
export const readEvent = (id: number) => async (dispatch: DispatchType) => {
  const resopnse = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: READ_EVENT, resopnse });
};

// 読み込み_リスト
export const readEvents = () => async (dispatch: DispatchType) => {
  const resopnse = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, resopnse });
};

// 新規作成
export const postEvent = (values: any) => async (dispatch: DispatchType) => {
  const data: any = {
    title: values.target[0].value,
    body: values.target[1].value,
  };
  const resopnse = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, data);
  dispatch({ type: CREATE_EVENTS, resopnse });
};

// 更新
export const putEvent =
  (id: number, values: any) => async (dispatch: DispatchType) => {
    const data: any = {
      title: values.target[0].value,
      body: values.target[1].value,
    };
    const resopnse = await axios.put(
      `${ROOT_URL}/events/${id}${QUERYSTRING}`,
      data
    );
    dispatch({ type: UPDATE_EVENTS, resopnse });
  };

// 削除
export const deleteEvent = (id: number) => async (dispatch: DispatchType) => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: DELETE_EVENTS, id });
};
