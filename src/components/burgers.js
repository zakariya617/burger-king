import React from 'react';
import { Box, Typography } from '@mui/material'; 

const Burgers = ({Image, Title, Discription}) => {
  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "rgb(245,235,220)", gap: '30px', marginTop:'9%' }}>
      <Box sx={{ height: '90%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(245,235,220)', borderRadius: '5%', marginTop:'3%', marginLeft:'10%' }}>
        <img src={Image} alt="Logo" style={{ height: '30%', width: '100%', borderRadius: '4%', ':hover': { transform: 'scale(1.3)', zIndex: 2, transition: '1s' } }} />
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'rgb(80,35,20)', fontFamily: 'initial', marginTop:'2%' }}>{Title}</Typography>
        <Typography sx={{ height: '20%', width: '95%', marginTop: '3%', color: 'rgb(80,35,20)' }}>{Discription}</Typography>
      </Box>
    </Box>
  );
};

export default Burgers;
