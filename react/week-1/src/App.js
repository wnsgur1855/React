import React from 'react';
function App() {
 
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
      <button 
      onClick={function() {
        alert('니똥')
      }}
    >
      클릭
      </button>
        
        </div>
      );
    }

export default App;