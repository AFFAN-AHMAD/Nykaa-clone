import React from "react";
import { Box, Center, Flex ,Heading,Text,Input, Button,Image,Checkbox,} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons"

const PaymentMiddleBar = () => {
  return <Box w="100%" bg="white" p={5}
    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  >
    <label for="ccn">Credit/Debit Card</label>
    

    <Input
    
    // value="____ ____ ____ ____"
    
     inputmode="numeric" type="tel" pattern="[0-9\s]{13,19}" variant="flushed"  placeholder="Card Number" maxlength="19"/>

<Box mt="20px" mb="20px" w="100%">
  <label style={{color:"grey"}}>expiry</label>
<Flex gap={"5px"}>
  <Input variant="flushed" type="number" maxLength={2} placeholder="MM"></Input>
  <Text fontSize="30px" fontWeight={"10"}>/</Text>
  <Input variant="flushed" type="number" maxLength={2} placeholder="YY"></Input>
  <Box ml="5px">
  <Input variant="flushed"  type="number" maxLength={3} placeholder="CVV"></Input>

  </Box>
  <Box w="100%">
        <Image w="100%"  src={process.env.PUBLIC_URL + `/LandingPageImgs/cvv.png`} alt="image"/>

        </Box>

  </Flex >
  <Checkbox size="lg" color="grey" fontWeight={"500"} colorScheme="green" defaultChecked>save this as per rbi guidelines</Checkbox>
</Box>

        <Box w="100%" m="auto">

        <Button
        _focus={{
          bg:"#fc2779"
        }}
        _hover={{
          bg:"#fc2779"
        }}
         borderRadius={"0"} padding="25px" w="100%" color="white"  bg="#fc2779">
          Pay ₹629 Now<ChevronRightIcon w="20px" h="20px"/> </Button>

        </Box>

    
  </Box>;
};

export default PaymentMiddleBar;
