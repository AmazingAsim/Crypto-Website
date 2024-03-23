import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Button, Toolbar, AppBar, Typography, IconButton, Tab, Container, Chip,Grid } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BasicTable from './Table'
import { FormControl, InputLabel, OutlinedInput, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import Form from './Form';
import { AddBoxOutlined } from '@mui/icons-material';
export default function Transactions() {
  const [value, setValue] = React.useState('1');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ flex: "1" }}>
      <AppBar position="sticky" color='inherit' elevation={0}>
        <Toolbar style={{ display: 'flex', justifyContent: "space-between" }}>
          <Typography variant="h4">
            Transactions
          </Typography>
          <IconButton size='large' edge="start" aria-label='logo' color='inherit'>
            <AccountCircleOutlinedIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px', background: "#EEEEF4", minHeight: "85vh" }}>
        <Box sx={{ textAlign: "right" }}>
          <Button variant='contained' sx={{ background: '#5F00D9', borderRadius: 3, "&:hover": { background: 'purple' } }}>  <DownloadIcon /> Export CSV</Button>
        </Box>
        <Container sx={{marginTop:"20px",background:"white",padding:"16px",borderRadius:"16px"}}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab icon={<Chip label="111" />} iconPosition="end" label="All" value="1" />
                  <Tab icon={<Chip label="111" />} iconPosition="end" label="Deposit" value="2" />
                  <Tab icon={<Chip label="111" />} iconPosition="end" label="Withdraw" value="3" />
                  <Tab icon={<Chip label="111" />} iconPosition="end" label="Trade" value="4" />


                  <Box sx={{ marginLeft: "auto",alignItems:"center",display:"flex",gap:"5px"}}>
                      <SearchIcon />
                    <input style={{border:"none",padding:"10px"}} type="text" placeholder='Search by id or destinaton'/>
                  </Box>

                </TabList>
              </Box>

              <TabPanel value="1">
                <BasicTable></BasicTable>
              </TabPanel>

              <TabPanel value="2">
                <BasicTable></BasicTable>
              </TabPanel>

              <TabPanel value="3">
                <BasicTable></BasicTable>
              </TabPanel>

              <TabPanel value="4">
                <BasicTable></BasicTable>
              </TabPanel>

            </TabContext>
          </Box>
        </Container>

          <Container sx={{marginTop:"16px"}}>
          <Grid Container sx={{display:"flex"}}>
              <Grid item sx={{width:"40%"}}>
                  <Box>
                    <EmailIcon fontSize='large' sx={{color:"#5F00D9"}}></EmailIcon>
                    <Typography variant='h2'>Contact us</Typography>
                    <Typography color={'gray'} variant='h6'>Have a question or just want to know more? Feel free to reach to us.</Typography>
                  </Box>
              </Grid>
              <Grid item sx={{width:"59%"}}>
                      <Box>
                        <Form></Form>
                      </Box>
              </Grid>
          </Grid>
          </Container>

          <Container sx={{marginY:"16px"}}>
          <Grid Container sx={{display:"flex"}}>
              <Grid item sx={{width:"40%"}}>
                  <Box>
                    <ChatBubbleRoundedIcon fontSize='large' sx={{color:"#5F00D9"}}></ChatBubbleRoundedIcon>
                    <Typography variant='h2'>Live Chat</Typography>
                    <Typography color={'gray'} variant='h6'>Don't have time to wait for the answer? Chat with us now.</Typography>
                  </Box>
              </Grid>
              <Grid item sx={{width:"59%"}}>
                     
                      <Box sx={{textAlign:"left",marginTop:"16px",padding:"16px",borderRadius:"16px",background:"#5F00D9",width:"100%"}}>
                      <Chip  label="Loans" sx={{color:"#5F00D9",background:"white"}} />
                      <Typography variant='h5' color='white'>
                      Learn more about Loans – Keep your Bitcoin, <br/> access it’s value without selling it
                      </Typography>
                    </Box>
                      
              </Grid>
          </Grid>
          </Container>
  
      </div>
    </div>
  )
}
