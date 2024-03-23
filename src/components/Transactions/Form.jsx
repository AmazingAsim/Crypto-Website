import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel ,InputLabel,Box,Typography} from '@mui/material';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'agree' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} 
    style={{ display: 'flex',
     flexDirection: 'column',
      gap: '1rem',background:"white",padding:"16px",
      borderRadius:"16px",width:"100%"
      }}>
        <Typography variant='h6'>
          You will receive response within 24 hour of submit
        </Typography>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Box sx={{width:"50%"}}>
        <InputLabel sx={{fontWeight:"bolder",fontSize:"18px",color:"black"}}>Name</InputLabel>
        <TextField 
        sx={{width:"100%"}}
          name="name"
          label="Name"
          variant="outlined"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        </Box>

        <Box sx={{width:"50%"}}>
        <InputLabel sx={{fontWeight:"bolder",fontSize:"18px",color:"black"}}>Surname</InputLabel>
        <TextField 
        sx={{width:"100%"}}
          name="surname"
          label="Surname"
          variant="outlined"
          placeholder="Enter your surname"
          value={formData.surname}
          onChange={handleChange}
        />
        </Box>
      </div>
      <Box >
      <InputLabel sx={{fontWeight:"bolder",fontSize:"20px"}}>Email</InputLabel>
      <TextField 
      sx={{width:"100%"}}
        name="email"
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      </Box>
       <Box >
      <InputLabel sx={{fontWeight:"bolder",fontSize:"20px"}}>Message</InputLabel>
      <TextField 
      sx={{width:"100%"}}
        name="message"
        label="Message"
        variant="outlined"
        placeholder="Enter your message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
      />
       </Box>
      <FormControlLabel
        control={<Checkbox name="agree" checked={formData.agree} onChange={handleChange} />}
        label="I agree with terms and conditions"
      />
      <div style={{ display: 'flex', gap: '1rem',flexDirection:"column" }}>
        <Button sx={{background:"#EEEEF4",color:"black",":hover":{background:"grey",color:'black'}}} variant="contained" color="primary" type="submit" fullWidth>
          Send a message
        </Button>
        <Button sx={{background:"#EEEEF4",color:"black",":hover":{background:"grey",color:'black'}}} variant="contained" color="primary" type="submit" fullWidth>
          Book a meeting
        </Button>
      </div>
    </form>
  );
}

