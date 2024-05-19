import React from 'react';
import { Box } from '@mui/material'; 

const Picture = ({Image}) => {
  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "rgb(245,235,220)", gap: '30px',marginTop:'9%' }}>
      <Box sx={{ height: '90%', width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(245,235,220)', borderRadius: '5%', marginTop:'3%',marginLeft:'10%' }}>
        <a href="https://mrburgerpk.com/menu/">
          <img src={Image} alt="Logo" style={{ height: '60%', width: '100%', borderRadius: '4%' }} />
        </a>
      </Box>
    </Box>
  );
};

export default Picture;
