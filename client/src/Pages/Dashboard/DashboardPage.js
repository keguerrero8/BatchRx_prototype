import React, { useState, useEffect } from 'react'

import Row from '../../Components/Row';

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
  
export default function CollapsibleTable() {
    const [pharmacies, setPharmacies] = useState([])

    useEffect(() => {
        fetch("/pharmacies")
        .then(r => r.json())
        .then(res => setPharmacies(res))
    }, [])

    console.log(pharmacies)

return (
    <Box sx={{width: "90%", margin: "50px auto"}}>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Zip Code</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pharmacies.map((pharmacy) => (
                    <Row key={pharmacy.id} row={pharmacy} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);
}
