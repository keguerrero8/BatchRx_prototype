import React, { useEffect, useState } from 'react'

import BasicModal from './BasicModal';
import PharmacistRow from './PharmacistRow';

import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function PharmacyRow({ row }) {
    const [open, setOpen] = useState(false);
    const [pharmUpdate, setPharmUpdate] = useState(false)
    const [pharmacists, setPharmacists] = useState([])

    const { id, name, address, zip_code, phone_number } = row

    useEffect(() => {
      fetch(`/pharmacists/${id}`)
      .then(r => {
        if (r.ok) {
          r.json().then(res => setPharmacists(res))
        }       
      })
    }, [open, pharmUpdate, id])

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="center">{name}</TableCell>
          <TableCell align="center">{address}</TableCell>
          <TableCell align="center">{zip_code}</TableCell>
          <TableCell align="center">{phone_number}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Box sx={{ margin: "10px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="h6" gutterBottom component="div">
                    Pharmacists Enrolled
                    </Typography>
                    <BasicModal pharmacyId={id} setPharmUpdate={setPharmUpdate} pharmUpdate={pharmUpdate}/>
                </Box>
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
                    {pharmacists.map((p) => <PharmacistRow key={p.id} pharmacist={p} setPharmUpdate={setPharmUpdate} pharmUpdate={pharmUpdate}/> )}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }