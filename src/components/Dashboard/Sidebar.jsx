import React from 'react';
import { Drawer, List, ListItem, ListItemIcon,ListItemButton, ListItemText,Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useNavigate} from 'react-router-dom'
export default function Sidebar() {
  let navigate = useNavigate()
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: '256px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width:'256px',
          boxSizing: 'border-box',
        },
      }}
    >
             <Typography variant="h5" sx={{ textAlign: 'center', color: 'purple', padding: '16px 0',fontWeight:"bolder",marginTop:"16px"}}>
        @DoSomeCoding
      </Typography>
      <List>
        {['Dashboard', 'Transactions'].map((text, index) => (
          <ListItem role='button' key={text} onClick={()=>{
            if(text=='Dashboard'){
              navigate('/')
            }
            else if(text=='Transactions'){
              navigate("transactions")
            }
          }}>
            <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}


