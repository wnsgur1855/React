import React from 'react';



function Son() {
  return <div>나는 효자가 되고싶습니다</div>
}


function Mother() {
  return <Son/>
}


function Grandfather() {
  return <Mother/>
}


function App() {
  return <Grandfather/>
}

export default App;


