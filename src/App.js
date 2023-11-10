import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#0e0e35';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} />
      <div className="container my-5 ">
        <TextForm heading="Enter Text to analyze" mode={mode}/>
        {/* <AboutUs/> */}
      </div>
    </>
  );
}

export default App;
