import React from 'react';
import Sidebar from './Sidebar';
import MainSection from './MainSection';
import { Hidden, Grid } from '@mui/material';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
          <Sidebar />
          <MainSection/>
    </div>
  );
}


