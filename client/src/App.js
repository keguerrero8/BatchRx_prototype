import './App.css';
import React, { useEffect, useState } from 'react'
import HomePage from './Pages/Home/HomePage';
import { Route, Routes } from 'react-router';
import Navbar from './Components/Navbar';
import LoginPage from './Pages/Login/LoginPage';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import PharmacistTable from './Components/PharmacistTable';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then(r => {
      if (r.ok) {
        r.json().then(res => setUser(res))
      }
    })
  }, [])

  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setUser={setUser}/>} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/pharmacies/:id" element={<PharmacistTable />} />
      </Routes>
    </>
  )
}

export default App;
