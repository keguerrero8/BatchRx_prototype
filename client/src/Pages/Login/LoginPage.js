import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Box, TextField, Button, Typography } from '@mui/material';

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
    <Box sx={{width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Box component="form" onSubmit={handleSubmit} sx={{border: "solid white", borderRadius: "20px", minWidth: "500px", height: "500px", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem"}}>
            <Typography component="div" variant="h5" color="#4eb59c" fontSize="2.3rem">Admin Sign In</Typography>
            <TextField name="username" required onChange={handleChange} value={formData.username} label="Username" variant="outlined" sx={{width: "60%", color: "whitesmoke"}}/>
            <TextField type="password" name="password" required onChange={handleChange} value={formData.password} label="Password" variant="outlined" sx={{width: "60%"}}/>
            <TextField type="password" name="password_confirmation" required onChange={handleChange} value={formData.password_confirmation} label="Password Confirmation" variant="outlined" sx={{width: "60%"}}/>
            <Button type="submit" variant="contained" sx={{color: "white"}} size="large">Sign In</Button>
        </Box>
    </Box>
  )
}
