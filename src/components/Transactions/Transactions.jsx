import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import {Box,Button,Toolbar,AppBar,Typography,IconButton,Tab,Container,Chip} from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BasicTable from './Table'
import {FormControl,InputLabel,OutlinedInput,Input,InputAdornment,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export default function Transactions() {
  const [value, setValue] = React.useState('1');

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{flex:"1"}}>
      <AppBar position="static" color='inherit' elevation={0}>
        <Toolbar style={{display:'flex',justifyContent:"space-between"}}>
          <Typography variant="h4">
           Transactions
          </Typography>
          <IconButton size='large' edge="start" aria-label='logo' color='inherit'>
          <AccountCircleOutlinedIcon fontSize='large'/>
          </IconButton>
        </Toolbar>
      </AppBar>
        <div style={{ padding: '20px',background:"#EEEEF4",minHeight:"85vh"}}>
        <Box sx={{textAlign:"right"}}>
        <Button variant='contained' sx={{background:'#5F00D9',borderRadius:3,"&:hover":{background:'purple'}}}>  <DownloadIcon/> Export CSV</Button>  
        </Box>
        <Container>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab icon={<Chip label="111" />} iconPosition="end" label="All"  value="1"/>
          <Tab icon={<Chip label="111" />} iconPosition="end" label="Deposit"  value="2"/>
          <Tab icon={<Chip label="111" />} iconPosition="end" label="Withdraw"  value="3"/>
          <Tab icon={<Chip label="111" />} iconPosition="end" label="Trade"  value="4"/>


      <FormControl sx={{ marginLeft:"auto", width: '25ch',outline:"none"}}>
          <OutlinedInput 
           inputProps={{ placeholder: 'Enter your text here' }}
          
          
            type='text'
            startAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="start"
                >
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
           
          </TabList>
        </Box>

        <TabPanel value="1">
          <BasicTable></BasicTable>
        </TabPanel>
        <TabPanel value="2">Deposit  </TabPanel>
        <TabPanel value="3">Withdraw </TabPanel>
        <TabPanel value="3">trade </TabPanel>
      </TabContext>
    </Box>
        </Container>
        </div>
    </div>
  )
}
