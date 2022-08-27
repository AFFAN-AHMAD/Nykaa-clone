import React from 'react'
import Nav from '../addressPage/Nav'
import PaymentLeftBar from './PaymentLeftBar'
import PaymentMiddleBar from './PaymentMiddleBar'
import PaymentRightBar from "./PaymentRightBar";

import { Grid ,Box,Image } from '@chakra-ui/react';
export default function Payment() {
  return (
    <Box bg="#f3f3f3" h="800px">
        <Nav/>
        <Grid templateColumns={'1fr 2fr 1.5fr'} w="85%" m={"auto"} mt={10} gap={10}>
            <PaymentLeftBar/>
            <PaymentMiddleBar/>
            <PaymentRightBar/>
        </Grid>
        <Box w="80%" m="auto" mt="60px" >
        <Image  src={process.env.PUBLIC_URL + `/LandingPageImgs/PaymentPageFooter.png`} alt="image"/>

        </Box>
      
    </Box>
  )
}
