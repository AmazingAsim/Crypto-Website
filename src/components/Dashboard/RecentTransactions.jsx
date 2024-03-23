import React from 'react'
import { Typography,Box,Stack,IconButton,Divider, Button } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';


export default function RecentTransactions() {
    let transactions = [
        {
            type:"INR Deposit",
            date:"2022-06-09 7:06 PM",
            amount:"81,123.10",
            nature:1
        },
        {
            type:"BTC Sell",
            date:"2022-06-09 7:06 PM",
            amount:"12.48513391 BTC",
            nature:0
        },
        {
            type:"INR Deposit",
            date:"2022-06-09 7:06 PM",
            amount:"81,123.10",
            nature:1
        }

    ]
  return (
     <Box sx={{marginTop:{xs:"50px",xl:"0px"},marginLeft:{xs:"-30px",xl:"0px"}}}>
    <div style={{background:"white",padding:"16px",borderRadius:"16px",height:"345px",width:'98%'}}>
        <Typography variant='h5' sx={{color:'grey',textAlign:"left",marginBottom:"10px"}}>Recent Transactions</Typography>
        <Stack direction='column' divider={<Divider/>} rowGap={3}>
        {
            transactions.map((transaction)=>(
                <Stack direction={'row'} rowGap={5}>
                    <Box sx={{width:"15%"}}>
                        {transaction.nature ? 
                        <IconButton size='large' edge="start" aria-label='logo' color='inherit' sx={{padding:'10px',background:"#EEEEF4"}}>
                            <MonetizationOnIcon sx={{fontSize:"25px"}} />
                        </IconButton>
                        : 
                        <IconButton size='large' edge="start" aria-label='logo' color='inherit' sx={{padding:'12px',background:"#EEEEF4",position:"relative",left:"1px"}}>
                            <CurrencyBitcoinRoundedIcon sx={{background:"black",color:"white",borderRadius:"50%",fontSize:"20px"}}/> 
                        </IconButton>
                        }
                    </Box>
                    <Box sx={{width:"45%"}}>
                    <Typography variant='h5' sx={{fontWeight:'bolder',display:"flex",alignItems:"center"}}>{transaction.type}</Typography>
                    <Typography sx={{color:"grey",display:"flex",alignItems:"center"}}>{transaction.date}</Typography>
                    </Box>
                    <Box>
                    <Typography variant='h5' sx={{fontWeight:'bolder',display:"flex",alignItems:"center"}}>{transaction.amount}</Typography>

                    </Box>
                </Stack>


            ))
        }
        </Stack>

        <Box>
            <Button variant='contained' 
            sx={{width:'100%',background:"#EEEEF4",color:"black",border:"none",boxShadow:"none","&:hover":{background:"black",color:"white"}}}>View All</Button>
        </Box>
    </div>
    </Box>
  )
}
