import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ setUser, user }) {
  function handleLogOut () {
    fetch("/logout", {
      method: "DELETE",
    })
    .then(r => {
      if (r.ok) {
        setUser(null)
      }
    })
  }

  return (
    <nav style={{backgroundColor: "wheat", height: "80px", zIndex: 10}}>
        <div style={{height: "100%", display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
          <div style={{paddingLeft: "20px", fontSize: "2rem", fontWeight: 700}}>
            <Link style={{textDecoration: "none", cursor: "pointer", color: "darkgreen"}} to="/">BatchRx</ Link>
          </div>
          {user ? (
            <div style={{width: "20%", paddingRight: "20px", fontSize: "1.2rem", display: "flex", justifyContent: "center", gap: "2rem"}}>
              <Link style={{textDecoration: "none", cursor: "pointer", color: "darkgreen", fontWeight: 700}} to="/dashboard" >Dashboard</ Link>
              <Link style={{textDecoration: "none", cursor: "pointer", color: "darkgreen"}} to="/login" onClick={handleLogOut}>Log out</ Link>
            </div>
          ) : (
            <div style={{paddingRight: "20px", fontSize: "1.2rem"}}>
              <Link style={{textDecoration: "none", cursor: "pointer", color: "darkgreen"}} to="/login">ADMIN</ Link>
            </div>
          ) }
        </div>
    </nav>
  )
}
