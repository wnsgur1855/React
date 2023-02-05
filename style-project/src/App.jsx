import React, { useState } from 'react'
import "./App.css";
import Button from './components/Button';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([
       { id: 1, age: 30, name: "송중기"},
       { id: 2, age: 24, name: "송강"},
       { id: 3, age: 21, name: "김유정"},
       { id: 4, age: 26, name: "박준혁"},
     ])
const [name, setName] = useState("")
const [age, setAge] = useState("")

const nameChangeHandler = (event) => {
  
  setName(event.target.value)
}
//추가버튼 클릭
const clickAddButtonHandler = () => {
// 1. 새로운 형태의 이놈을 만든다
// 이놈 : { id: 1, age: 30, name: "송중기"}
//2. 이놈을 배열에 더한다.

  const newUser = {
    id : users.length +1,
    age: age,
    name : name,
  };
  setUsers([...users, newUser])
};

//삭제 버튼 클릭
const clickRemoveButtonHandler = (x) => {
const newUser =  users.filter((users)=> users.id!== x)
setUsers(newUser)
}

  return (
    <div>
        <div>
          이름 :&nbsp;
        <input value = {name} onChange={nameChangeHandler}/>
        <br/>
          나이 :&nbsp;
         <input value = {age} onChange = {function(event) {setAge(event.target.value)}}/>
        <br />
            <Button  clickAddButtonHandler = {clickAddButtonHandler}/>추가<Button/>
        </div> 
        <div className = "app-Style"> 
    {users.map((item) => {
      return (
      <User key = {item.id} item = {item} removeFunction = {clickRemoveButtonHandler}/>
      );
    })
    };
    </div>
    </div>  
  )
}

export default App

//배열 안 객체