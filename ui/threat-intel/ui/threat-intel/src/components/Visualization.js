import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';

const Visualization = ({ data }) => {
  const chartData = {
    labels: data.map(item => new Date(item.detected_at).toLocaleTimeString()),
    datasets: [{
      label: 'Threat Severity (high=3, med=2, low=1)',
      data: data.map(item => item.severity === 'high' ? 3 : item.severity === 'medium' ? 2 : 1),
      fill: false,
      tension: 0.4,
    }]
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Threat Trend</Typography>
        <Line data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Visualization;