import React from 'react'
 //자식 컴포넌트
 function Child() {
  return <div>나는 자식이랑께</div>
  return <div>나는 자식이랑께</div>// = <div>나는 자식이랑께</div> 굳이 따로 분리함
 }
 

 //나는 부모입니다ㅣ
 function App() {
  return <Child />  // = <div>나는 자식이랑께</div> 굳이 따로 분리함
}
  return (                    //<div> < /div>를 저렇게 축소 가능, return문 최상단에는 tag가 하나밖에 없어야한다.
    <>                        
        <Child /> 
        <Child /> 
        <Child /> 
        <Child /> 
        <Child />   
    </>
  ) 

 export default App;
