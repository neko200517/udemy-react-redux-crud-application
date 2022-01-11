// セクション4: Reduxアプリケーション基礎編
// 22. Store

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/events/new' element={<EventsNew />} />
        <Route path='/events/:id' element={<EventsShow />} />
        <Route path='/' element={<EventsIndex />} />
        <Route path='/events' element={<EventsIndex />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
