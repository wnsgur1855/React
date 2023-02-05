import React from "react";
import "./App.css";

const App = () => {
  // const style = {
  //   backgroundColor: "red",
  //   padding : "100px",           //객체니까-가 안 된다.
  //   //padding top : "100px",
  //   display: "flex",  //종류확인
  //   justifyContent: "center",
  //   justifyContent: "space-between",
  //   gap: "12px",
  //   margin : "20px"
   
  // };

  // const squareStyle = {
  //   width: "100px",
  //   height: "100px",
  //   border: "3px solid green",
  //   borderRadius: "10px",
	// 	display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };
  const star = document.querySelector("#test");
console.log(star.style)
  return (
    <div id = "test" className ="appStyle">
      <div className="component-style">감자</div>
      <div className="component-style">고구마</div>
      <div className="component-style">오이</div>
      <div className="component-style">가지</div>
      <div className="component-style">옥수수</div>
    </div>
  );
};

export default App;

//반복되는 컴포넌트들 filter함수를 이용하여 간단하게 처리하기(조건이 들어가고 그 조건대로 걸러줌)
// import React from "react";
// import "./App.css";

// const App = () => {
//   const boxArray = ["감자", "고구마", "가지", "오이", "옥수수"]
//   return (
//     <div className = "appStyle">
//       {boxArray.filter((item) => {
//         return item !=="오이"
//       })
//       .map((item) => {
//         return <div className = "component-style">{item}</div>
//       })
//       }
//     </div>
//   )
// }
// export default App;
//--------------------------------------------------------------------------------
//반복되는 컴포넌트들 map함수를 이용하여 간단하게 처리하기
// import React from "react";
// import "./App.css";

// const App = () => {
//   const boxArray = ["감자", "고구마", "가지", "오이", "옥수수"]
//   return (
//     <div className = "appStyle">
//       { boxArray.map((item) => {
//           return <div className = "component-style">{item}</div>
//       })}
//     </div>
//   )
// }
// export default App;
//--------------------------------------------------------------------------------
