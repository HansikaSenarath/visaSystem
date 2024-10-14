import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';  
import Application from './Components/Application';  
import Selfi from './Components/Selfi';
import Passport from './Components/Passport';
import Form from './Components/Form';
import Payment from './Components/Payment';
import Pay from './Components/Pay'
import Header from './Components/Header'

function App() {
  return (
    <div>
<Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/selfi" element={<Selfi />} /> 
        <Route path="/Passport" element={<Passport />} /> 
        <Route path="/Form" element={<Form />} /> 
        <Route path="/Payment" element={<Payment />} /> 
        <Route path="/Pay" element={<Pay />} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
