import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#0000FF'); // Initial background color

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBackgroundColor = () => {
    setBackgroundColor(getRandomColor());
  };

  return (
    <div className='App'>
      <header className='App-header' style={{ backgroundColor }}>
        <div className='Clock'>
          <h1>Digital Clock</h1>
          <p>{new Date().toLocaleTimeString()}</p>
        </div>
        <button className='ColorButton' onClick={changeBackgroundColor}>
          Change Background Color
        </button>
      </header>
    </div>
  );
}

export default App;
