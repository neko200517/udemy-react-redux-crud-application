// セクション4: Reduxアプリケーション基礎編
// 20. Action

import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const increment = actionCreator('INCREMENT');
export const decrement = actionCreator('DECREMENT');
export const reset = actionCreator<number>('RESET');
export const ActionCreator = {
  increment,
  decrement,
  reset,
};
