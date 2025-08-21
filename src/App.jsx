import { useState } from 'react'
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import Login from './assets/Pages/Login/Login';
//import SignUp from './assets/Pages/SignUp/Signup';
import HomePage from './assets/Pages/HomePage';
//import LandingPage from './assets/Pages/LandingPage/LandingPage';

function App() {

  return (
    <>
    <HomePage/>
    { /*<BrowserRouter>
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter> */}     
    </>
  )
}

export default App
