import React from 'react'

import { Box, TextField, Typography, Checkbox, FormControlLabel, Button } from '@mui/material'

export default function RequestForm() {
  return (
    <Box sx={{maxWidth: "1200px", margin: "auto", height: "100vh", display: "flex", justifyContent: "center"}}>
        <Box 
            sx={{
                width: "90%", 
                height: "60%", 
                backgroundColor: "white", 
                borderRadius: "20px", 
                mt: "50px", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
            }}
        >
            <Box sx={{margin: "auto", width: "90%", gap: "2rem", display: "flex", justifyContent: "left"}}>
                <Box sx={{flex: 1}}>
                    <Typography color="black" component="h6" sx={{mb: "5px", fontSize: "1.2rem"}}>Medication Name</Typography>
                    <TextField sx={{width: "100%"}}/>
                </Box>
                <Box sx={{flex: 1}}>
                    <Typography color="black" component="h6" sx={{mb: "5px", fontSize: "1.2rem"}}>Manufacturer</Typography>
                    <TextField sx={{width: "100%"}}/>
                </Box>
                <Box sx={{flex: 0.2, display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <FormControlLabel control={<Checkbox defaultChecked size="medium"/>} label="Brand?" />
                </Box>
            </Box>
            <Box sx={{margin: "auto", width: "90%", gap: "2rem", display: "flex", justifyContent: "left"}}>
                <Box sx={{flex: 0.3}}>
                    <Typography color="black" component="h6" sx={{mb: "5px", fontSize: "1.2rem"}}>NDC</Typography>
                    <TextField sx={{width: "100%"}}/>
                </Box>
                <Box sx={{flex: 0.4}}>
                    <Typography color="black" component="h6" sx={{mb: "5px", fontSize: "1.2rem"}}>Phone Number to Recieve Sms</Typography>
                    <TextField sx={{width: "100%"}}/>
                </Box>
                <Box sx={{flex: 0.1}}>
                    <Typography color="black" component="h6" sx={{mb: "5px", fontSize: "1.2rem"}}>Strength</Typography>
                    <TextField sx={{width: "100%"}}/>
                </Box>
                <Box sx={{flex: 0.1}}>
                    <Typography color="black" component="h6" sx={{mb: "5px", fontSize: "1.2rem"}}>Quantity</Typography>
                    <TextField sx={{width: "100%"}}/>
                </Box>
            </Box>
            <Box sx={{margin: "auto", width: "90%", textAlign: "center"}}>
                <Button variant='contained' sx={{color: "white"}} size="large">Send Request</Button>
            </Box>
        </Box>   
    </Box>
  )
}

//med name     strength     quantity
//manufacturer   ndc     brand checkbox

//phone number    send

//show status of request processed