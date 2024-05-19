import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

const Product = ({ Image, Title, Discription, Price }) => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "white", gap: '30px' }}>
      <Box sx={{ height: '90%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '5%', marginTop: '3%', marginLeft: '7%' }}>
        <img src={Image} alt="Product" style={{ height: '60%', width: '95%', borderRadius: '4%' }} />
        <Typography sx={{ fontWeight: 'bold', fontSize: '27px', color: 'rgb(93,76,65)',marginTop:'5%' }}>{Title}</Typography>
       
        <Typography sx={{ fontWeight: 'bold', fontSize: '25px', color: 'rgb(232,98,54)', marginTop: '10%' }}>{Price}</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </Box>
  );
};

export default Product;
