import React from 'react'


function Son(props) {
  console.log("props", props.GDF)
  return <div>나는 {props.GDF}손자입니다.</div>
}

function Mother(props) {
  const MotherName = '김옥순'           //중간에서 정보 전달만 하고 하는 일이 없음
  const GDF = props.GrandFatherName     // 이 중간다리가 3개가 되면 prop drilling
  return <Son GDF = {GDF}/>
}



function GrandFather() {
  const name = "김기덕"
  return <Mother GrandFatherName = {name} />
}


function App() {
  return <GrandFather/>
}

export default App