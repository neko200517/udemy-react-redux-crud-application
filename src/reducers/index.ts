// セクション4: Reduxアプリケーション基礎編
// 21. Reducer

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './events';

export default combineReducers({ events, form });
