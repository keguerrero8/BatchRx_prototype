import React, { useState, useEffect } from 'react'

import BasicModal from './BasicModal'
import PharmacistRow from './PharmacistRow'

import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function PharmacistTable() {
    const params = useParams()
    const [pharmacists, setPharmacists] = useState([])
    const [pharmacistsUpdate, setPharmacistsUpdate] = useState(false)

    useEffect(() => {
      fetch(`/pharmacies/${params.id}`)
      .then(r => {
        if (r.ok) {
          r.json().then(res => setPharmacists(res))
        }       
      })
    }, [params, pharmacistsUpdate])

  return (
    <Box sx={{width: "90%", margin: "50px auto"}}>
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
