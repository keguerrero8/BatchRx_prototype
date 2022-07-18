import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginPage({setUser}) {
    const history = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    function handleSubmit (e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(res => {
                    setUser(res)
                    history("/dashboard")
                })
            }
            else {
                r.json().then(res => console.log("log errors below"))
            }
        })
    }

    function handleChange (e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    
  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{backgroundColor: "wheat", height: "400px", width: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h1 style={{fontSize: "1.5rem"}}>Welcome, Please Sign In</h1>
            <form style={{width: "70%"}} type="submit" onSubmit={handleSubmit}>
                <div style={{display: "flex", justifyContent: "center", margin: "10px 0"}}>
                    <input name="username" value={formData.username} placeholder="Username" onChange={handleChange} style={{borderRadius: "10px", borderColor: "black", width: "100%", height: "30px", padding: "5px 10px"}}/>
                </div>
                <div style={{display: "flex", justifyContent: "center", margin: "10px 0"}}>
                    <input name="password" value={formData.password} placeholder="Password" onChange={handleChange} style={{borderRadius: "10px", borderColor: "black", width: "100%", height: "30px", padding: "5px 10px"}}/>
                </div>
                <div style={{display: "flex", justifyContent: "center", margin: "10px 0"}}>
                    <input name="password_confirmation" value={formData.password_confirmation} placeholder="Password Confirmation" onChange={handleChange} style={{borderRadius: "10px", borderColor: "black", width: "100%", height: "30px", padding: "5px 10px"}}/>
                </div>
                <div style={{display: "flex", justifyContent: "center", margin: "30px 0px"}}>
                  <button style={{height: "35px", width: "70px", borderRadius: "10px", borderColor: "black", cursor: "pointer"}}>Log in</button>
                </div>
            </form>
        </div>
    </div>
  )
}
