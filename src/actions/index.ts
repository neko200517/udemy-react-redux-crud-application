// セクション4: Reduxアプリケーション基礎編
// 20. Action

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export interface CountActionType {
  type: 'INCREMENT' | 'DECREMENT';
}
