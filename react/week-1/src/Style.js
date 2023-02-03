import React from 'react'       //"rfc" or "rfce" 



export default function App() {
  const number = 1;
  const pTagStyle = {
    color : "red",
  }

  return  <div>
            <p style = {pTagStyle}>안녕하세요 리액트입니다</p>
            {/* 주석을 사용하는 방법입니다 */}
            {/* 삼항 연산자를 사용해볼게요 */}
            <p style = {pTagStyle}>
              {
              number > 10 
              ? number + "은 10보다 크다" 
              : number + "은 10보다 작다"
              }
            </p>
          </div>
}
