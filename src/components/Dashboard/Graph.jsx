import {useState} from 'react';
import {Stack,Typography,Button} from '@mui/material';
import Box from '@mui/material/Box';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function Graph() {

    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    function generateRandomNumbers(length) {
      const numbers = [];
      for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * 60) + 1; // Generates random number between 1 and 60
        numbers.push(randomNumber);
      }
      return numbers;
    }

    let data = generateRandomNumbers(100);
  return (
    <div style={{background:"white",padding:'16px',marginLeft:"-25px",borderRadius:"16px",height:"345px"}}>

<Stack direction={'row'} columnGap={5} >
                <Box sx={{width:"40%"}}>
                    <Typography sx={{color:"grey",display:"flex",alignItems:"center"}}>Current Price </Typography>
                    <Typography variant='h5' sx={{fontWeight:'bolder',display:"flex",alignItems:"center"}}> <CurrencyRupeeOutlinedIcon/>112,312.24</Typography>
                </Box>
                <Box sx={{width:"60%",display:'flex',justifyContent:"flex-end"}}>
                    <Button variant='contained' sx={{background:'#5F00D9',mx:1,borderRadius:3,"&:hover":{background:'purple'}}}>  <AddCircleIcon sx={{marginRight:1}}/>  Buy</Button>  
                    <Button variant='contained' sx={{background:'#5F00D9',mx:1,borderRadius:3,"&:hover":{background:'purple'}}}>  <RemoveCircleIcon  sx={{marginRight:1}}/> Sell</Button>  
                </Box>
            </Stack>

            <Box sx={{display:"flex",justifyContent:"flex-end"}}>
            <ToggleButtonGroup
      
      sx={{marginRight:'16px',marginTop:"16px",background:"#EEEEF4"}}
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="1H" sx={{background:"#EEEEF4",margin:"5px",boxSizing:"border-box",border:'none','&.Mui-selected':{background:"white"}}}>1H</ToggleButton>
      <ToggleButton value="1D" sx={{background:"#EEEEF4",margin:"5px",boxSizing:"border-box",border:'none','&.Mui-selected':{background:"white"}}}>1D</ToggleButton>
      <ToggleButton value="1W" sx={{background:"#EEEEF4",margin:"5px",boxSizing:"border-box",border:'none','&.Mui-selected':{background:"white"}}}>1W</ToggleButton>
      <ToggleButton value="1M" sx={{background:"#EEEEF4",margin:"5px",boxSizing:"border-box",border:'none','&.Mui-selected':{background:"white"}}}>1M</ToggleButton>     
    </ToggleButtonGroup>
            </Box>

      <Box sx={{ flexGrow: 1 }}>
      <Sparklines style={{marginTop:"20px"}} data={data}>
  <SparklinesLine color="#5F00D9" />
</Sparklines>
      </Box>
      
      <Stack direction={'row'} sx={{color:"grey"}}>
        <Box sx={{width:"20%"}}>
            <Typography>7:15 PM</Typography>
        </Box>
        <Box sx={{width:"20%"}}>
            <Typography>12:55 AM</Typography>
        </Box>
        <Box sx={{width:"20%"}}>
            <Typography>6:34 AM</Typography>
        </Box>
        <Box sx={{width:"20%"}}>
            <Typography>12:15 PM</Typography>
        </Box>
        <Box sx={{width:"20%"}}>
            <Typography>5:55 PM</Typography>
        </Box>
      </Stack>
    
    </div>
    
  );
}