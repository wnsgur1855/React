import React from 'react';

//자식 컴포넌트
function Child() {
  return <div>나는 자식이랑께</div>
}

//나는 부모입니다ㅣ
function App() {
  return <Child />  // = <div>나는 자식이랑께</div> 굳이 따로 분리함
}

export default App;