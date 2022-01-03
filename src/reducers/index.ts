// セクション4: Reduxアプリケーション基礎編
// 21. Reducer

import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({ count });
