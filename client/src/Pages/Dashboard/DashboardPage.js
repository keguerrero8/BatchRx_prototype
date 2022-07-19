import React, { useState, useEffect } from 'react'

import Row from '../../Components/Row';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
  
export default function CollapsibleTable() {
const [pharmacies, setPharmacies] = useState([])

useEffect(() => {
    fetch("/pharmacies")
    .then(r => r.json())
    .then(res => setPharmacies(res))
}, [])

return (
    <Box sx={{width: "90%", margin: "50px auto"}}>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Name</TableCell>
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
