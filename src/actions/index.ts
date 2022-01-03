export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// セクション4: Reduxアプリケーション基礎編
// 21. Reducer

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export interface CountActionType {
  type: 'INCREMENT' | 'DECREMENT';
}
