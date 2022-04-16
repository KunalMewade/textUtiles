import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import About from './componants/About';
import { useState } from 'react';
import Alert from './componants/Alert';
import React from 'react';
import { 
          BrowserRouter as Router,
          Routes ,
          Route 
        } from 'react-router-dom';  
import Contact from './componants/Contact';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title= 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
     <Router>
      <Navbar title="TextUtile" aboutText="about us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/>   -- for default props property  */}
      <Alert alert={alert} />

      <div className="container my-3">                
          <Routes>
            <Route path="/about" element={<About  mode={mode} />}>  </Route>
            <Route path="/contact" element={<Contact />}>  </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
 