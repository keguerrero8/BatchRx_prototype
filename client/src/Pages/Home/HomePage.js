import React, {useState, useEffect} from 'react';

export default function HomePage() {
    const [formData, setFormData] = useState({
        med_name: "",
        phone_number: ""
      })
    
      const handleChange = (e) => {
        if (e.target.name === "phone_number") {
          setFormData({
            ...formData,
            [e.target.name]: "1" + e.target.value
          })
        } else {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
        }
      }
    
      useEffect(() => {
        fetch("/requests")
        .then(r => r.json())
        .then(res => console.log(res))
      }, [])
    
      const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData)
        fetch("/requests", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
        })
        .then(r => r.json()).then(res => console.log(res, "eh"))
      }
    
      return (
        <>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh"}}>
            <h1 style={{color: "wheat"}}>HOME PAGE</h1>
            <div style={{backgroundColor: "wheat", width: "400px", height: "400px"}}>
              <form type="submit" onSubmit={handleSubmit}>
                <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
                  <input name="med_name" onChange={handleChange} placeholder="message to send" style={{height: "30px", width: "80%", padding: "10px"}}/>
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
                  <input name="phone_number" onChange={handleChange} placeholder="number" style={{height: "30px", width: "80%", padding: "10px"}}/>
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
                  <button style={{height: "50px", width: "80px"}}>Send</button>
                </div>
              </form>
            </div>
          </div>
        </>
      );
}
