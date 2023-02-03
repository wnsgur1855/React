import React from 'react';
function App() {
  const onclickButtonHandler = () => {
    alert('니똥');
  }
 
  return (
  /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: '100vh',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
        >
      <span>이것은 내가 만든 App컴포넌트 입니당.</span>
      <button onClick = {onclickButtonHandler}>클릭</button>
        </div>
      );
    }

export default App;