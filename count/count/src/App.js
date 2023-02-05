import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const pulsbutton = () => { 
    alert("하나 더해드림")
    setCount(count +1)}
  // const plusbutton = () =>{
  //   const newpluscount = count +1
  //   setCount(newpluscount)
  // }    변수를 굳이 넣고 setCount시키고 싶으시다면 이렇게
  //      그리고 button에 plusbutton넣으면 된다.
  
  return (
  <div>
      <div>{count}</div>
      <div>
        <button onClick={() => {
          alert("하나 빼줄게")
          const newCount = count -1
          setCount(newCount);
        }}>-</button>
        <button onClick={()=>{pulsbutton()}}>+</button>
      </div>
  </div>
  ) 
}

export default App;
