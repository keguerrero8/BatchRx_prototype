import React from 'react'

import { IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PharmacistRow({ pharmacist, setIsUpdate, isUpdate }) {
    const { name, phone_number, id} = pharmacist

    function handleDelete (e) {
        console.log(name, phone_number, id)
        fetch(`/pharmacists/${id}`, {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                setIsUpdate(!isUpdate)
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
        <TableCell align="center">checkbox</TableCell>
        <TableCell align="center"><IconButton color="primary" onClick={handleDelete}><DeleteIcon/></IconButton></TableCell>
    </TableRow>
  )
}
