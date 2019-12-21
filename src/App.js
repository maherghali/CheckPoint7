import React from 'react';
import './App.css';
import ImprovedButton from './ImprovedButton';

function App() {
  return (
    <div className="App">
        <ImprovedButton onClick={()=> window.location="https://fb.com/"}> MyFacebook </ImprovedButton>
    </div>
  );
}

export default App;
