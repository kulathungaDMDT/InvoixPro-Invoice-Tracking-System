import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import HomePage from "./assets/pages/HomePage";
import SignupPage from "./assets/pages/SignupPage";
import LoginPage from "./assets/pages/LoginPage";
import UploadPage from "./assets/pages/UploadPage";
import Statistics from "./assets/Pages/Statistics";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/signup' element={<SignupPage/>}/>
           <Route path="/login" element={<LoginPage />}/> 
           <Route path="/upload" element={<UploadPage />}/>
           <Route path='/statistics' element={<Statistics/>}/>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
