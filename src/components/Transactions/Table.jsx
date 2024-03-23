import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip , Typography} from '@mui/material';




function createData(id, dateAndTime, type, Amount, status) {
  return { id, dateAndTime, type, Amount, status };
}



export default function BasicTable() {

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

  const rows = [
    createData('HD82NA2H', new Date(), 6.0, 24, "pending"),
    createData('HD82NA2H', new Date(), 9.0, 37, "processing"),
    createData('HD82NA2H', new Date(), 16.0, 24, "cancelled"),
    createData('HD82NA2H', new Date(), 3.7, 67, "completed"),
    createData('HD82NA2H', new Date(), 16.0, 49, "completed"),
    createData('HD82NA2H', new Date(), 16.0, 49, "completed")
  ];
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Date & Time</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">
                <Typography variant='h6'>
                   {formatDate(row.dateAndTime)}
                </Typography>
                <Typography sx={{color:"grey"}}>
                   {row.dateAndTime.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })}
                </Typography>
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.Amount}</TableCell>
              <TableCell align="right">
                {
                  row.status == 'completed' ?
                    <Chip label={row.status} color='success' /> :
                    row.status == 'processing' ?
                      <Chip label={row.status} color='warning' /> :
                      row.status == 'cancelled' ?
                        <Chip label={row.status} color='error' /> :
                        <Chip label={row.status} sx={{ background: "grey" }} />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}