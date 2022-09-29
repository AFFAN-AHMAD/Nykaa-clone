import React from 'react';
import PaymentLeftBar from './PaymentLeftBar';
import PaymentMiddleBar from './PaymentMiddleBar';
import RightBar from "../addressPage/Rightbar";
import PaymentNabar from "./PaymentNavbar";

import {
  Grid, Box, Image, Text, Alert,
  AlertIcon,
} from '@chakra-ui/react';

// Follow prev file comments
export default function Payment() {
  return (
    <Box bg="#f3f3f3" h="800px" w="100%" m="auto">
      <PaymentNabar/>
      <Box w="80%" m="auto" mt="20px">
        <Alert borderRadius={"10px"} colorScheme={"#e0edff"} status='info'>
          <AlertIcon color={"blue"} />
          Please use a digital payment method & help us ensure contactless delivery for your safety
        </Alert>
      </Box>
      <Box w="80%" m="auto" p="15px">
        <Text fontWeight={"600"}>
          CHOOSE PAYMENT METHOD
        </Text>
      </Box>
      <Grid templateColumns={'1fr 2.5fr 2fr'} w="80%" m={"auto"} gap={10}>
        <PaymentLeftBar />
        <PaymentMiddleBar />
        <RightBar/>

      </Grid>
      <Box w="80%" m="auto" mt="60px" >
        <Image src={process.env.PUBLIC_URL + `/LandingPageImgs/PaymentPageFooter.png`} alt="image" />

      </Box>

    </Box>
  )
}
