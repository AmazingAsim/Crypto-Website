import * as React from 'react';
import {Stack,Typography} from '@mui/material';
import Box from '@mui/material/Box';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function graph() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Sparklines style={{marginTop:"200px"}} data={[30,25,15,5,25,30,30,15,50,30,5,30,30,15,30,30,15,0,25,15,5,5,30,30,15,30,40,15,30,30,15,20,3,15]}>
  <SparklinesLine color="#5F00D9" />
</Sparklines>
      </Box>
      
      <Stack direction={'row'}>
        <Box sx={{width:"20%"}}>
            <Typography>7:15 PM</Typography>
        </Box>
        <Box sx={{width:"20%"}}>
            <Typography>7:15 PM</Typography>
        </Box>
        <Box sx={{width:"20%"}}>
            <Typography>7:15 PM</Typography>
        </Box>
        <Box sx={{width:"20%"}}>
            <Typography>7:15 PM</Typography>
        </Box>
        <Box sx={{width:"20%"}}>
            <Typography>7:15 PM</Typography>
        </Box>
      </Stack>
    
    </div>
    
  );
}