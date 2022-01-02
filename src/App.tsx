import React from 'react';
import PropTypes from 'prop-types';

// 17. prop-types
// プロパティの型情報を渡す
// TypeScriptを使用していれば同様のことは可能だが、
// 他者に再利用されることも想定して定義は推奨

interface UserType {
  name: string;
  age: number;
}

const App = () => {
  const users: UserType[] = [
    { name: 'taro', age: 11 },
    { name: 'hanako', age: 11 },
    { name: 'kumi', age: 2 },
  ];
  const list = users.map((x, i) => {
    // イテレーションする場合、keyをつけないと警告される
    return <User key={i} name={x.name} age={x.age}></User>;
  });
  return <div>{list}</div>;
};

const User = (props: UserType) => {
  return (
    <div>
      Hi! {props.name} and {props.age} years old.
    </div>
  );
};

// 型の定義
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired, // 必須はisRequired
};

export default App;
