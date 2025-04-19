import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const AlertList = ({ data }) => (
  <Paper sx={{ p: 2 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>IP Address</TableCell>
          <TableCell>Domain</TableCell>
          <TableCell>Severity</TableCell>
          <TableCell>Detected At</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((t) => (
          <TableRow key={t._id}>
            <TableCell>{t.ip_address}</TableCell>
            <TableCell>{t.domain || '-'}</TableCell>
            <TableCell>{t.severity}</TableCell>
            <TableCell>{new Date(t.detected_at).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);
