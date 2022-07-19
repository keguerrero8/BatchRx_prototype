import React, { useState } from 'react';

import { Box, Button, Typography, Modal, TextField } from "@mui/material"

const style = {
  position: 'absolute',
  textAlign: "center",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

export default function BasicModal({ pharmacyId, setIsUpdate, isUpdate }) {
  const [open, setOpen] = useState(false);
  const [pharmacistData, setPharmacistData] = useState({name: "", phone_number: "", pharmacy_id: pharmacyId})

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => setPharmacistData({...pharmacistData, [e.target.name]: e.target.value})

  function handleSubmit (e) {
    e.preventDefault()
    fetch("/pharmacists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pharmacistData)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(res => setIsUpdate(!isUpdate))
      }
      else {
        r.json().then(res => console.log(res))
      }
    })
  }

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" size="small">Add Pharmacist</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style} component="form" noValidate onSubmit={handleSubmit}>
          <Typography variant="h5">Add a Pharmacist</Typography>
          <TextField label="Name" variant="outlined" name="name" onChange={handleChange}/>
          <TextField label="Phone Number" variant="outlined" name="phone_number" onChange={handleChange}/>
          <Button variant="outlined" sx={{width: "30%", margin: "auto"}} type="submit">Add</Button>
          <Button onClick={handleClose} sx={{position: "absolute", right: "0px", bottom: "0px"}}>CLOSE</Button>
        </Box>
      </Modal>
    </>
  );
}