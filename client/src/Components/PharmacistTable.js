import React, { useState, useEffect } from 'react'

import BasicModal from './BasicModal'
import PharmacistRow from './PharmacistRow'

import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function PharmacistTable() {
    const params = useParams()
    const [pharmacists, setPharmacists] = useState([])
    const [pharmacy, setPharmacy] = useState({})
    const [pharmacistsUpdate, setPharmacistsUpdate] = useState(false)

    useEffect(() => {
      fetch(`/pharmacies/${params.id}`)
      .then(r => {
        if (r.ok) {
          r.json().then(res => setPharmacy(res))
        }       
      })
    }, [params, pharmacistsUpdate])

    useEffect(() => {
        fetch(`/pharmacists/${params.id}`)
        .then(r => {
          if (r.ok) {
            r.json().then(res => setPharmacists(res))
          }       
        })
      }, [params])

    return (
        <Box sx={{width: "90%", margin: "50px auto", textAlign: "center"}}>
            <Box sx={{my: "70px"}}>
                <Typography component="div" variant="h4" sx={{fontWeight: 500, mb: "10px"}}>{pharmacy.name}</Typography>
                <Typography component="div" variant="h5" sx={{fontWeight: 400}}>{pharmacy.address}, {pharmacy.zip_code}</Typography>
            </Box>
            <Box sx={{ margin: "30px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Typography variant="h6" gutterBottom component="div">
                    Pharmacists Enrolled
                </Typography>
                <BasicModal pharmacyId={params.id} setPharmacistsUpdate={setPharmacistsUpdate} pharmacistsUpdate={pharmacistsUpdate}/>
            </Box>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                        <TableCell align="center">Enrolled?</TableCell>
                        <TableCell align="center">Delete?</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {pharmacists.map((p) => <PharmacistRow key={p.id} pharmacist={p} setPharmacistsUpdate={setPharmacistsUpdate} pharmacistsUpdate={pharmacistsUpdate}/> )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
