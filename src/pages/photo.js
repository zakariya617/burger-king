import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Photo = () => {
  return (
    <Box sx={{ paddingTop: '3%', display: 'flex', alignItems: 'center', height: '100vh', backgroundColor: 'rgb(245,235,220)' }}>
      <img
        src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1d9cdc6dc8d20fdad7abfa5946f3bb96292fd5e4-800x450.gif?w=900&q=90&fit=max&auto=format'
        alt="Photo"
        style={{ maxHeight: '70%', maxWidth: '100%', objectFit: 'contain' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '20px', marginLeft: '6%' }}>
      <Typography sx={{fontSize:'80px',fontFamily:'fantasy'}}>Start your BK® order.</Typography>
        <Button variant="contained" disableElevation sx={{ height: '60px', width: '60%', color: 'black', backgroundColor: 'red',fontSize:'20px' }}>
         Order pickup
        </Button>
        <Button variant="outlined" disableElevation sx={{ height: '60px', width: '200px', color: 'black', borderColor: 'red',fontSize:'15px'}}>
         Order Delivery
        </Button>
      </Box>
    </Box>
  );
}

export default Photo;
