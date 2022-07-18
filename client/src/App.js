import './App.css';
import React from 'react'
import HomePage from './Pages/Home/HomePage';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar';
import LoginPage from './Pages/Login/LoginPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App;
