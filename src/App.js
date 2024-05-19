import { Box, IconButton } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import './App.css';
import NaveBar from './pages/navebar';
import Photo from './pages/photo';
import Cardssetup from './pages/cardssetup';
import Burgerssetup from './pages/burgerssetup';
import About from './pages/about';
import Bottom from './pages/bottom';
import Picturesetup from './pages/picturesetup';
import Menusetup from './pages/menusetup';
import { useState } from 'react';


function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <>
      {isVisible && 
        <IconButton 
          onClick={scrollToTop} 
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: 'rgb(232,98,54)',
            color: 'black'
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      }
    </>
  );
}

function App() {
  return (
    <Box sx={{height:'100%',width:'100%',overflow:'hidden',":active": { color: 'black' } }}>
      <NaveBar/>
      <Photo/>
      <Cardssetup/>
      <Burgerssetup/>
      <Menusetup/>
      <About/>
      <Picturesetup/>
     
      <Bottom/>
      <ScrollToTop />
      
    </Box>
  );
}

export default App;
