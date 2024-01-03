import React from 'react';
import './App.css'; // Import your CSS file here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login';
import LoginWorker from './components/loginworker'; // Corrected import

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/loginworker' element={<LoginWorker/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>      
  );
}

export default App;