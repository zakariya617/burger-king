import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

const NavBar = () => {
  return (
    <Box sx={{ height: '13%', width: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'row', position: 'fixed', top: "0", right: '0', left: '0', zIndex: '9999', ":active": { color: pink } }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', gap: "37px", alignItems: 'center' }}>
        <Box sx={{ height: '73%', width: '60%', backgroundColor: 'black', marginLeft: '2%' }}>
          <img
            src='https://mrburgerpk.com/wp-content/uploads/2022/11/logoMB-02-1-e1671794831625.png'
            alt="Logo"
            style={{ height: '120%', width: '45%' }}
          />
        </Box>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'white', cursor: 'pointer', marginRight: '7%', ':hover': { color: '#FFA500' } }} > MENU</Typography> {/* Change color on hover */}
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'white', cursor: 'pointer', marginRight: '7%', ':hover': { color: '#FFA500' } }}>ABOUT </Typography> {/* Change color on hover */}
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'white', cursor: 'pointer', marginRight: '7%', ':hover': { color: '#FFA500' } }} >REWARDS</Typography> {/* Change color on hover */}
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'white', cursor: 'pointer', marginRight: '7%', ':hover': { color: '#FFA500' } }} >OFFERS</Typography> {/* Change color on hover */}
      </Box>
     
      <Button variant="outlined" disableElevation sx={{ height: '60%', width: '20%', marginTop: '1%', marginRight: '3%', color: 'white', ':hover': { color: '#FFA500' } }}>
        Sign in / Sign Up
      </Button>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <a href="https://www.facebook.com/MrBurgerpk">
          <Facebook sx={{ fontSize: 30, color: '#4267B2', cursor: 'pointer', marginRight: '20px', ':hover': { color: '#FFA500' } }} />
        </a>
        <a href="https://www.instagram.com/mrburgerpk/">
          <Instagram sx={{ fontSize: 30, color: '#E4405F', cursor: 'pointer', marginRight: '15px', ':hover': { color: '#FFA500' } }} />
        </a>
      </Box>
    </Box>
  );
}

export default NavBar;
