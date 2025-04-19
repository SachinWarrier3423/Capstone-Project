javascript
import React from 'react';
import { Button, Stack } from '@mui/material';
import { jsPDF } from 'jspdf';
import { Parser } from 'json2csv';

const Report = ({ data }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Threat Intelligence Report', 10, 10);
    data.forEach((t, i) => doc.text(`${i+1}. ${t.ip_address} - ${t.severity}`, 10, 20 + i * 10));
    doc.save('report.pdf');
  };

  const downloadCSV = () => {
    const parser = new Parser();
    const csv = parser.parse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'report.csv');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Stack direction="row" spacing={2} sx={{ my: 2 }}>
      <Button variant="outlined" onClick={downloadCSV}>Export CSV</Button>
      <Button variant="outlined" onClick={downloadPDF}>Export PDF</Button>
    </Stack>
  );
};