import React, { useState } from 'react'

import { IconButton, TableCell, TableRow, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PharmacistRow({ pharmacist, pharmUpdate, setPharmUpdate }) {
    const { name, phone_number, id, isEnrolled } = pharmacist
    const [checked, setChecked] = useState(isEnrolled)

    function handleChange (e) {
        fetch(`/pharmacists/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ isEnrolled: e.target.checked })
        })
        .then(r => {
            if (r.ok) {
                r.json().then(res => setChecked(res.isEnrolled))
            }
        })
    }


    function handleDelete (e) {
        fetch(`/pharmacists/${id}`, {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                setPharmUpdate(!pharmUpdate)
            }
            else {
                r.json().then(res => console.log(res))
            }
        })
    }

  return (
    <TableRow >
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">{phone_number}</TableCell>
        <TableCell align="center">
            <Checkbox
                checked={checked}
                onChange={handleChange}
            />
        </TableCell>
        <TableCell align="center">
            <IconButton color="primary" onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>
        </TableCell>
    </TableRow>
  )
}
