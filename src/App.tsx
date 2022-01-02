import React from 'react';

// 16. props
// プロパティを渡す

interface UserType {
  name: string;
  age?: number;
}

const App = () => {
  const users: UserType[] = [
    { name: 'taro', age: 11 },
    { name: 'hanako', age: 11 },
    { name: 'kumi' },
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
User.defaultProps = {
  age: 1,
};

export default App;
