export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// セクション4: Reduxアプリケーション基礎編
// 20. Action

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
