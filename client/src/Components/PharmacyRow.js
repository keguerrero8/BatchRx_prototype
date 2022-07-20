import React from 'react'

import { Link } from 'react-router-dom'
import { TableCell, TableRow } from '@mui/material';

export default function PharmacyRow({ row }) {
    const { id, name, address, zip_code, phone_number } = row

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell align="center">
            <Link to={`pharmacies/${id}`}>
              {name}
            </Link>
          </TableCell>
          <TableCell align="center">{address}</TableCell>
          <TableCell align="center">{zip_code}</TableCell>
          <TableCell align="center">{phone_number}</TableCell>
        </TableRow>
      </>
    );
  }