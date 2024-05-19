import { Box, Typography } from '@mui/material'
import React from 'react'
import Product from '../components/product'


const Menusetup = () => {
  return (
    <box>
    <Box sx={{ height: '100%', backgroundColor: 'rgb(232,98,54)', width: '100%', marginTop: '4%' }}></Box>
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '60px', color: 'rgb(66,92,128)', marginTop: '4%',fontFamily:'cursive' }}>BURGERS</Typography>
    </Box>
    <Box sx={{ height: '80%', width: '100%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>
    <Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/chickenburger-300x300.jpg' Title='Chicken Burger ' Price='RS 900.00' />
    <Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/mrzee-300x300.jpg' Title=' MR.ZEE with cheese' Price='RS 600.00' />
    <Product  Image='https://mrburgerpk.com/wp-content/uploads/2022/11/chickenbig-300x300.jpg' Title='Chicken BIG MAC' Price='RS 700.00' />
    <Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/chickentriple-300x300.jpg' Title=' Triple LAYER' Price='RS 400.00' />
  </Box>
  <Box sx={{ height: '80%', width: '100%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>
  <Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/thunder-chicken-250x250.jpg' Title='Chicken Deluxe ' Price='RS 1000.00' />
  <Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/mrchicken-with-egg-250x250.jpg' Title=' Egg’n’Chicken' Price='RS 800.00' />
  <Product  Image='https://mrburgerpk.com/wp-content/uploads/2022/11/Chicken-Big-with-Egg-250x250.jpg' Title='BIG CHICKEN' Price='RS 6500.00' />
  <Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/mrbigdeluxe-250x250.jpg' Title='Mr Big Deluxe' Price='RS 400.00' />
</Box>
<Box sx={{ height: '80%', width: '100%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/mrbigwithegg-250x250.jpg' Title='Egg’n’ Mr ' Price='RS 300.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/mrburger-300x300.jpg' Title='ROAST BEEF ' Price='RS 500.00' />
<Product  Image='https://mrburgerpk.com/wp-content/uploads/2022/11/mr-big-beef-with-egg-250x250.jpg' Title='Chicken BIG MAC' Price='RS 700.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/thunder-beef-250x250.jpg' Title='MrDeluxeTriple LAYER' Price='RS 900.00' />
</Box>
<Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
<Typography sx={{ fontWeight: 'bold', fontSize: '60px', color: 'rgb(66,92,128)', marginTop: '4%',fontFamily:'cursive' }}>COMBO DEALS</Typography>
</Box>
<Box sx={{ height: '80%', width: '100%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo1-300x300.jpg' Title='Combo 01 ' Price='RS 2,900.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo2-300x300.jpg' Title=' Combo 02' Price='RS 3,000.00' />
<Product  Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo3-300x300.jpg' Title='Combo 03' Price='RS 2,000.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo4-300x300.jpg' Title=' Combo 04' Price='RS 1,000.00' />
</Box>
<Box sx={{ height: '80%', width: '100%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo5-300x300.jpg' Title='Combo 05 ' Price='RS 1700.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo6-300x300.jpg' Title=' Combo 06' Price='RS 1500.00' />
<Product  Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo7-300x300.jpg' Title='Combo 07' Price='RS 2,000.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo8-300x300.jpg' Title=' Combo 08' Price='RS 1,000.00' />
</Box>
<Box sx={{ height: '40%', width: '30%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%',marginLeft:'35%' }}>
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/combo9-300x300.jpg' Title='Combo 09 ' Price='RS 1900.00' />


</Box>
<Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
<Typography sx={{ fontWeight: 'bold', fontSize: '60px', color: 'rgb(66,92,128)', marginTop: '4%',fontFamily:'cursive' }}>KIDS DEALS</Typography>
</Box>
<Box sx={{ height: '80%', width: '100%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>

<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/kidsmeal01-300x300.jpg' Title='Mr. lil (beef/chicken)With Drink & Toy' Price='RS 500.00' />
<Product  Image='https://mrburgerpk.com/wp-content/uploads/2022/11/kidsmeal2-300x300.jpg' Title='Nuggets (6PCS)With Drink & Toy' Price='RS 700.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/11/kidsmeal3-300x300.jpg' Title='Chicken Drumstick (1PC)With Drink & Toy' Price='RS 800.00' />
</Box>
<Box sx={{ height: '40%', width: '40%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%',marginLeft:'35%' }}>
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/nuggets-12-6-pcs-250x250.jpg' Title='Nuggets 6 pcs ' Price='RS 300.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/nuggets-12-6-pcs-250x250.jpg' Title=' Nuggets 12 pcs' Price='RS 500.00' />

</Box>
<Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
<Typography sx={{ fontWeight: 'bold', fontSize: '60px', color: 'rgb(66,92,128)', marginTop: '4%',fontFamily:'cursive' }}>ADD ON</Typography>
</Box>
<Box sx={{ height: '80%', width: '100%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/dips-250x250.jpg' Title='Dips ' Price='RS 50.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/fries-large-250x250.jpg' Title=' Fries Large' Price='RS 320.00' />
<Product  Image='https://mrburgerpk.com/wp-content/uploads/2022/12/fries-regular-250x250.jpg' Title='Fries Regular' Price='RS 280.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/aquafina-250x250.jpg' Title='Aquafina' Price='RS 100.00' />
</Box>
<Box sx={{ height: '40%', width: '40%', backgroundColor: 'WHITE', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%',marginLeft:'35%' }}>
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/pepsi-can-250x250.jpg' Title='Pepsi can ' Price='RS 70.00' />
<Product Image='https://mrburgerpk.com/wp-content/uploads/2022/12/extra-cheese-slice-250x250.jpg' Title=' Extra Cheese ' Price='RS 120.00' />

</Box>
    
    
    
    
    
    </box>
  )
}

export default Menusetup
