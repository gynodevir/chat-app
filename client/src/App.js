import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Reg } from './components/Reg';
import { Olog } from './components/Olog';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={< Olog/>} />
          
          <Route path="/reg" element={<Reg/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
