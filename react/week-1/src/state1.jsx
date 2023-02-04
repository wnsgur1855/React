import React, { useState } from 'react';
import "./App.css";


function App() {
  //const [count, setCount] = useState(0);
  //count [todoList, setCount] = useState([]);
	//const [name, setName] = useState("김할아버지")
	const [fruit, setFruit] = useState("")

      return (
				<div>
				 과일 : {""}
				 <input value ={fruit} onChange={function(event) {
						console.log("event", event.target.value);
						setFruit(event.target.value);
				 }}
				 />
				 <br /> <br />
				 {fruit}

				</div>)
			}
 

export default App;