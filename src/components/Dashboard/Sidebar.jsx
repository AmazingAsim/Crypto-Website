import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText,Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}


