import { Box,  } from '@mui/material'
import React from 'react'
import Picture from '../components/picture'

const Picturessetup = () => {
  return (
    <div>

    <Box sx={{ height: '80%', width: '100%', backgroundColor:'rgb(245,235,220)', display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center',overflow:'clip' }}>
    <Picture Image='https://mrburgerpk.com/wp-content/uploads/2024/04/Homepage-imeage-main-2.jpg'  />
    <Picture Image='https://mrburgerpk.com/wp-content/uploads/2023/05/home-banner-2-2-2-2.png'  />
     <Picture Image='https://mrburgerpk.com/wp-content/uploads/2024/03/home-banner-3-4-1-copy.jpg'/>
     </Box> 
    </div>
  )
}

export default Picturessetup
