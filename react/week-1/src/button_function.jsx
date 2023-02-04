import React from 'react';

function App() {
    //1. 그냥 함수 : const  buttonClick = x => alert("클릭클릭")
    //2. 화상표 함수 : function buttonClick {
      //   alert("클릭클릭")
        //}


  return (
    <div style={
      {
      
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >
        <span>이곳은 내가 만든 컴포넌트입당!</span>
        <button onClick={function () {
          alert("클릭")
        }}>
        클릭
        </button>   
    </div>
  )
}


export default App