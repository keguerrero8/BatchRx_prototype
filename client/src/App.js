import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [formData, setFormData] = useState({
    text: "",
    phoneNumber: ""
  })

  const handleChange = (e) => {
    if (e.target.name === "phoneNumber") {
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
    fetch("/messages")
    .then(r => r.json())
    .then(res => console.log(res))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData)
    fetch("/messages", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r => r.json()).then(res => console.log(res, "eh"))
  }

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "1000px"}}>
        <div style={{backgroundColor: "white", width: "400px", height: "400px"}}>
          <form type="submit" onSubmit={handleSubmit}>
            <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
              <input name="text" onChange={handleChange} placeholder="message" style={{height: "30px", width: "80%", padding: "10px"}}/>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
              <input name="phoneNumber" onChange={handleChange} placeholder="number" style={{height: "30px", width: "80%", padding: "10px"}}/>
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

export default App;
