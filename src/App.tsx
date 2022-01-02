// これすらいらない
import React, { Component } from 'react';

// 15. Component
// クラスコンポーネント、関数コンポーネントの2種類が存在する
// ※最近では関数コンポーネントが推奨されている

// クラスコンポーネント
// class App extends Component {
//   render() {
//     return <div>Hello!</div>;
//   }
// }

// 関数コンポーネント
const App = () => {
  return <div>Hello!</div>;
};

export default App;
