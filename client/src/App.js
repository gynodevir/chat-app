import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Reg } from './components/Reg';
import { Olog } from './components/Olog';
import { Logout } from './components/Logout';
import { Home } from './components/Home';
import { Main } from './components/Main';
import CollapsibleExample from './components/CollapsibleExample';



function App() {
  const[login,Setlogin]=useState(false)
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/login" element={< Olog login={login} Setlogin={Setlogin}/>} />
          <Route path="/" element={<Main login={login} Setlogin={Setlogin}/>} />
          
          <Route path="/reg" element={<Reg/>} />
          <Route path="/home" element={<Home login={login} Setlogin={Setlogin}/>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
