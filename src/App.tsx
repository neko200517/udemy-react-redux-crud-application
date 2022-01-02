// これすらいらない
import React from 'react';

// 12. もっとJSX
// class -> className
// onClick,
// onChange
// for -> htmlFor

function App() {
  const greeting = 'Hello World!';
  const dom = (
    // htmlにdivを反映させたくない場合、React.Fragmentを用いればdivを構造に入れなくても済む
    // ※最近のreactは<div id = "root">に置き換わった模様
    <React.Fragment>
      <div className='foo'>{greeting}</div>

      {/* onClick */}
      <button
        onClick={() => {
          alert('foo');
        }}
      >
        Click Me
      </button>

      <br />

      {/* htmlFor */}
      <label htmlFor='bar'>bar</label>

      {/* onChange */}
      <input
        type='text'
        id='bar'
        onChange={() => {
          console.log('input change.');
        }}
      />
    </React.Fragment>
  );
  return dom;
}

export default App;
