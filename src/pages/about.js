import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ height: '40%', width: '100%' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop:'4%' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluqWLMOI7WBULxgFNFcBqrLLWTg8WkelJ1A&s' 
            alt="Logo" 
            style={{ height: '100%', width: '100%' }}   
          />
          <Typography 
            sx={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgb(227,102,39)',
              fontWeight: 'bold',
              fontSize: '84px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
              fontFamily:'cursive'
            }}
          >
            About us
          </Typography>
        </div>
      </Box>
      <img 
      src='https://mrburgerpk.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-17-at-12.29.36-AM.jpeg' 
      alt="Logo" 
      style={{ height: '100%', width: '100%' }}   
    />
    </Box>
  );
};

export default About;
