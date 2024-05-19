import { Box } from '@mui/material'
import React from 'react'
import Cards from '../components/cards'

const Cardssetup = () => {
  return (
  
  <Box>
    <Box sx={{ height: '80%', width: '100%', backgroundColor:'rgb(245,235,220)', display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>
    <Cards Image='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/2b60390402530831a1e97c98d699337a5eefad6c-2000x1000.png?w=650&q=80&fit=max&auto=format' Title='The tastiest deal of the week' Discription='Today only! Get a great deal on the full-on flame-grilled flavor of a Whopper®. Order it your way in the BK® App.' Price=' price $2.50'/>
     <Cards Image='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/d90761d56efa990981dc7026f3062ec48adfa079-2000x1000.png?w=650&q=80&fit=max&auto=format' Title='Redeem a Hamburger for 175 Crowns' Discription='It’s National Hamburger Month! Celebrate by redeeming a Hamburger for 175 Crowns instead of 250—all month long in the BK® App. ' Price='Price: $2.00' />
     </Box>
     <Box sx={{ height: '80%', width: '100%', backgroundColor:'rgb(245,235,220)', display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>
    <Cards Image='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1cf4f2b8a18c9056417e266a975012d3ac3609c0-2000x1000.png?w=650&q=80&fit=max&auto=format' Title='Soar through the sky!' Discription='Sip the sweetness of our new Frozen Cotton Candy topped with a cold foam Cloud. $1.49—only in the app and on bk.com.' Price=' price $2.50'/>
     <Cards Image='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/36fe891a694bc9d607678148a860452a598bf12f-2000x1000.png?w=650&q=80&fit=max&auto=format' Title='ALL-NEW FROZEN COTTONCANDY!' Discription='Play our new game, Cloud Float, and you could win sweet treats and merch inspired by our new beverage, Frozen Cotton Candy topped with a cold foam Cloud. NO PURCH. NEC. Ends 5/5/24. Rules at bk.com/cloudfloat-rules ' Price='Price: $2.00' />
     </Box>

    </Box>
  )
}

export default Cardssetup
