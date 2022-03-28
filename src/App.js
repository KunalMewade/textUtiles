import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import About from './componants/About';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtile" aboutText="about us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/>   -- for default props property  */}

      <div className="container my-3">
        <TextForm heading="Enter the text to analize below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
