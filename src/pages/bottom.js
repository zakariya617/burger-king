import React from 'react';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import { Email, Place, Call } from '@mui/icons-material';

const Bottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', marginTop: '5%' }}>
      <Box sx={{ height: '70%', width: '100%', display: 'flex', backgroundColor: 'rgb(31,31,31)', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ height: '100%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '80px' }}>
          <Typography sx={{ fontSize: '40px', fontWeight: 'bold', color: 'rgb(255,255,255)' }}>ABOUT US</Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(145,147,149)', marginTop: '20px' }}>
          Tantalizing your taste buds with exotic twists and fusions, the legends of the food industry, bring to your plates delicacies made from their exclusive recipes that make you swoon with delight.From the delicately cut Roast beef to the egg and chicken duo, the homemade mustard sauce to the secret ketchup, the pioneers of fast food, mr burger speak for themselves.

          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '0px', paddingRight: '0px' }}>
          <Typography sx={{ fontSize: '35px', fontWeight: "bold", color: "white",paddingBottom:'20%' }}>CONTACT US
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <IconButton color="error">
              <Email />
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '5px' }}>info@mrburgerpk.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="error">
              <Place />
            </IconButton>
            <Typography sx={{ fontSize: 'px', color: 'white', marginLeft: '5px' }}>42C, Shop, 4 Khayaban-e-Rahat, karachi</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="error">
              <Call />
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '5px' }}>(021) 35841617</Typography>
          </Box>
        </Box>

        <Box sx={{ height: '100%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '80px' }}>
          <Typography sx={{ fontSize: '40px', fontWeight: 'bold', color: 'rgb(255,255,255)' }}>NEWSLETTER</Typography>
          {/* Added email and name input fields and subscribe button */}
          <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}> {/* Added flexDirection: 'column' */}
            <TextField sx={{ marginRight: '10px', width: '400px',background:'rgb(232,98,54)' }} id="email" label="Email:" type="email" variant="outlined" />
            <TextField sx={{ width: '400px', marginTop: '10px',backgroundColor:'rgb(232,98,54)' }} id="name" label="Name:" variant="outlined" />
          </Box>
          <Button variant="contained" sx={{ marginTop: '10px',background:'rgb(232,98,54)' }}>Subscribe</Button>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'black', width: '100%', padding: '20px', textAlign: 'center', color: 'blueviolet' }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', }}>Coded by: DELTA CODERS</Typography>
        <Typography variant="body2" sx={{ marginTop: '5px', color: 'blueviolet' }}>© {currentYear} DELTA CODERS. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Bottom;
