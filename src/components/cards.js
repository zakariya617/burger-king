import React from 'react';
import { Box, Button, Typography } from '@mui/material'; 


const Cards = ({Image,Title,Discription}) => {
  return (
    
      
      <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "rgb(245,235,220)", gap: '30px' }}>
      
        <Box sx={{ height: '90%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '5%', marginTop:'3%',marginLeft:'10%' }}>
          
          <img src={Image} alt="Logo" style={{ height: '30%', width: '100%', borderRadius: '4%' }} />
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'rgb(80,35,20)',fontFamily:'initial',marginTop:'2%' }}>{Title}</Typography>
          <Typography sx={{ height: '20%', width: '95%', marginTop: '3%', color: 'rgb(80,35,20)' }}>{Discription}</Typography>
          <Button variant="outlined" disableElevation sx={{height:'60%',width:'20%',marginTop:'2%',marginleft:'19%',color:'black',backgroundColor:'pink',marginBottom:'2%'}}>
    Order 
    </Button>
        </Box>
        
        
  
      </Box>
    
  );
};

export default Cards;
