import React, { useState } from 'react'

function App() {
	const[id, setId] = useState("")
	const[pw, setPw] = useState("*")

	const handleChangeId = (event) => {
		setId(event.target.value)
  }
	const handleChangePw = (event) => {
		setPw(event.target.value)
	}
	//console.log("id", id)
	//console.log("pw", pw)
	

	return (
		<>
			아이디 : {""}
			<input type = "text" value = {id}	onChange={handleChangeId} />
			<br />
			비밀번호 : {""}
			<input type= "password" value = {pw} onChange={handleChangePw} />
			<br />
			<button 
			onClick={() =>{alert (`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는${pw}입니다..`
			)
			setId("")
			setPw("")
			}}

			>
			로그인	
			</button>			
		</>
)};

export default App

