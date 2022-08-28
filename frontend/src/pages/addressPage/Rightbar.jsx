import React from "react";
import { useEffect, useRef } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { getItemApi } from "../../store/cart/cart.actions";

const Rightbar = () => {
const cart = useSelector((state)=>state.cart.cartData)
const dispatch = useDispatch()
  const cartQuantity = cart.length;
  const cartTotal = cart.reduce((ac, el) => {
    return ac + +el.price * +el.quantity;
  }, 0);
  const items = cart.reduce((ac,el) => {
    return ac + +el.quantity;
  },0);
  const discount = (cartTotal * 0.08).toFixed(0);
  const grandTotal = cartTotal - discount;
   useEffect(() => {
			dispatch(getItemApi());
		}, []);
  console.log(cart)
  return <Box bg="white">
   <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' color="#f0ac41">
              {items} Items in your Bag
            </Box>
            <Box color="#e62e77" fontWeight={400}>Edit</Box>
        <AccordionIcon color="#e62e77 " />
      </AccordionButton>
    </h2>
        <AccordionPanel pb={4}>
          <Box>
            {
              cart.map((ele) => (
                <Box mb={3}  p={2} shadow={"md"}>
                  {console.log(ele)}
                  <Flex gap={3}>
                    <Image src={`${ele.image}`} h="80px" w="80px" /> 
                    <Box h="50px" overflowX={"hidden"}  overflowY={"hidden"}>
                    <Text>{ ele.name}</Text>
                    </Box>
                  </Flex>
                  <Flex>
                    <Box w="80px"></Box>
                    <Flex justifyContent={"space-between"} m={"auto"} w="70%">
                      <Text> Qty: {ele.quantity }</Text>
                      <Text fontWeight={600}> ₹ { ele.price*Number(ele.quantity)}</Text>
                    </Flex>
                  </Flex>
                  </Box>
              ))
            }
          </Box>
    </AccordionPanel>
      </AccordionItem>
      

      <AccordionItem>
        <AccordionPanel pb={4}>
          <VStack>
            <Flex justify={"space-between"} w="100%">
              <Text>Sub Total</Text>
              <Text>₹{cartTotal}</Text>
            </Flex>


            <Flex justify={"space-between"} w="100%">
              <Text>Shipping Charge</Text>
              <Text color="#72c9c2">Free</Text>
            </Flex>

            <Flex justify={"space-between"} w="100%">
              <Text color="#72c9c2">Discount</Text>
              <Text color="#72c9c2">- ₹{ discount}</Text>
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
            <Box> ₹ { grandTotal}</Box>
            <AccordionIcon color="#e62e77 " />
          </AccordionButton>
        </h2>
  </AccordionItem>
</Accordion>
  </Box>;
};

export default Rightbar;
