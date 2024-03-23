import React from 'react';
import { AppBar,Button, Toolbar, Typography,IconButton,Container,Stack,Box,Chip} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
import Graph from './Graph';
export default function MainSection() {
  return (
    <div style={{flex:1}}>
      <AppBar position="static" color='inherit' elevation={0}>
        <Toolbar style={{display:'flex',justifyContent:"space-between"}}>
          <Typography variant="h4">
           Dashboard
          </Typography>
          <IconButton size='large' edge="start" aria-label='logo' color='inherit'>
          <AccountCircleOutlinedIcon fontSize='large'/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px',background:"#EEEEF4",height:"85vh"}}>
         <Container sx={{background:"white",borderRadius:'16px',padding:3}}>
            <Stack direction={'row'} columnGap={5}>
                <Box sx={{width:"25%"}}>
                    <Typography sx={{color:"grey",display:"flex",alignItems:"center"}}>Total portfolio value<InfoIcon/> </Typography>
                    <Typography variant='h5' sx={{fontWeight:'bolder',display:"flex",alignItems:"center"}}> <CurrencyRupeeOutlinedIcon/>112,312.24</Typography>
                </Box>
                <Box sx={{width:"25%"}}>
                    <Typography sx={{color:"grey",display:"flex",alignItems:"center"}}>Wallet Balances</Typography>
                    <Typography variant='h5' sx={{fontWeight:'bolder',display:"flex",alignItems:"center"}}>
                      22.39401000 <Chip sx={{mx:1}} label="BTC" />
                    </Typography>
                </Box>
                <Box sx={{width:"10%"}}>
                    <Typography sx={{color:"white",display:"flex",alignItems:"center"}}>.</Typography>
                    <Typography variant='h5' sx={{fontWeight:'bolder',display:"flex",alignItems:"center"}}> 
                    <CurrencyRupeeOutlinedIcon/>1,300.00  <Chip sx={{mx:1}} label="INR" />
                    </Typography>
                </Box>
                <Box sx={{width:"40%"}}>
                    <Button variant='contained' sx={{background:'#5F00D9',mx:1,borderRadius:3,"&:hover":{background:'purple'}}}> <UploadIcon/>  Deposit</Button>  
                    <Button variant='contained' sx={{background:'#5F00D9',mx:1,borderRadius:3,"&:hover":{background:'purple'}}}>  <DownloadIcon/> Withdraw</Button>  
                </Box>
            </Stack>
         </Container>
         <Graph></Graph>
      </div>
    </div>
  );
}


