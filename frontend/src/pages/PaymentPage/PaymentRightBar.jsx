import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'
const PaymentRightbar = () => {
  return <Box bg="white">
   <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' color="#f0ac41">
         2 Items in your Bag
            </Box>
            <Box color="#e62e77" fontWeight={400}>Edit</Box>
        <AccordionIcon color="#e62e77 " />
      </AccordionButton>
    </h2>
        <AccordionPanel pb={4}>
          <Box>
            <Flex gap={3}>
             <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/3/539a903NYKAC00000160_1.jpg" h="80px" w="80px"/> 
              <Text>Nykaa All Day Matte Long Wear Liquid Foundation With Pump - ...</Text>
            </Flex>
            <Flex>
              <Box w="80px"></Box>
              <Flex justifyContent={"space-between"} m={"auto"} w="70%">
                <Text> Qty : 2</Text>
                <Text fontWeight={600}> ₹ 800</Text>
              </Flex>
            </Flex>
          </Box>
    </AccordionPanel>
      </AccordionItem>
      

      <AccordionItem>
        <AccordionPanel pb={4}>
          <VStack>
            <Flex justify={"space-between"} w="100%">
              <Text>Sub Total</Text>
              <Text>₹599</Text>
            </Flex>


            <Flex justify={"space-between"} w="100%">
              <Text>Shipping Charge</Text>
              <Text color="#72c9c2">Free</Text>
            </Flex>

            <Flex justify={"space-between"} w="100%">
              <Text color="#72c9c2">Discount</Text>
              <Text color="#72c9c2">- ₹0</Text>
            </Flex>

            <Flex justify={"space-between"} w="100%">
              <Text>Use Reward Points (2000)</Text>
              <Text>APPLY</Text>
            </Flex>
        </VStack>
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' fontWeight={600}>
              Grand Total
            </Box>
            <Box> ₹ 800</Box>
            <AccordionIcon color="#e62e77 " />
          </AccordionButton>
        </h2>
  </AccordionItem>
</Accordion>
  </Box>;
};

export default PaymentRightbar;
