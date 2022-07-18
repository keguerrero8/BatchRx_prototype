import React, { useState } from 'react'

export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    function handleChange (e) {
        console.log(formData)
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    
  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{backgroundColor: "#4bb366", height: "400px", width: "400px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <form style={{width: "70%"}} type="submit">
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
                  <button style={{height: "35px", width: "70px", borderRadius: "10px", borderColor: "black"}}>Log in</button>
                </div>
            </form>
        </div>
    </div>
  )
}
