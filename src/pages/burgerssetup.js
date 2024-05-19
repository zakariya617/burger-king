import { Box, Typography } from '@mui/material'
import React from 'react'
import Burgers from '../components/burgers'

const Burgerssetup = () => {
  return (
    <div>
    <Box sx={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(245,235,220)' }}>
    <Typography sx={{ fontWeight: 'bold', fontSize: '60px', color: 'rgb(83,47,23)',marginTop:'5%',fontFamily:'fantasy' }}>MR's Exclusive Burgers</Typography>
  </Box>
    <Box sx={{ height: '80%', width: '100%', backgroundColor:'rgb(245,235,220)', display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center',overflow:'clip' }}>
    <Burgers Image='https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef' Title='THE DOPPLER' Discription='Double crispy fried chicken topped with cheese, mayo, chilli garlic sauce and fresh lettuce with an option of extra cheese add-on. ' />
    <Burgers Image='https://burgerlab.com.pk/wp-content/uploads/2022/01/quadra.png?c062ef&c062ef' Title='QUADRA RELOADED' Discription='4 smashed beef patties with melted cheese topped with crispy onion rings, grilled mushrooms, smoke and BBQ sauces.' />
     <Burgers Image='https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef' Title=' DOUBLE CHEESE' Discription='2 smashed beef patties with shredded pickles, caramelized onions, double cheese & Lab’s secret sauce in soft-n-fresh Potato Buns. ' />
     </Box>
      
    </div>
    
  )
}

export default Burgerssetup
