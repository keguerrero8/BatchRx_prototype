import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{backgroundColor: "white", height: "80px", zIndex: 10}}>
        <div style={{height: "100%", display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
          <div style={{paddingLeft: "20px", fontSize: "1.5rem", fontWeight: 700}}>
            <Link style={{textDecoration: "none", cursor: "pointer", color: "darkgreen"}} to="/">BatchRx</ Link>
          </div>
          <div style={{paddingRight: "20px", fontSize: "1rem"}}>
            <Link style={{textDecoration: "none", cursor: "pointer", color: "darkgreen"}} to="/login">ADMIN</ Link>
          </div>
        </div>
    </nav>
  )
}
