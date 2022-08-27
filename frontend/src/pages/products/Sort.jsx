import React, { useEffect, useState } from "react";
// import { Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Checkbox,
  Flex
} from '@chakra-ui/react'
import axios from "axios"
import { useDispatch,useSelector } from "react-redux";

const Sort = () => {
  const productData = useSelector((state) => state.products.productsData);
  const newArr = [...productData];
  console.log(productData)


  useEffect(() => {
    
  }, [])
  const handleL2h = (e) => {
    const checked = e.target.checked;
    if (checked) {
      const arr = newArr.sort((a, b) => a.price - b.price);
      console.log(arr)
    } else {
      console.log(productData)
    }
  }
  const handleH2l = (e) => {
       const checked = e.target.checked;
    if (checked) {
      const arr = newArr.sort((a, b) => b.price - a.price);
      console.log(arr)
    } else {
      console.log(productData)
    }
  }
  const handleA2z = (e) => {
    const checked = e.target.checked;
    if (checked) {
      const arr = newArr.sort((a, b) => a.name[0] - b.name[0]);
      console.log(arr)
    } else {
      console.log(productData)
    }
  }
  return <Box bg="white">
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight={"bold"}>
        Sort By:
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Flex justifyContent="space-between" mb={2}> <label>Price Low to High</label><Checkbox colorScheme="pink" name="l2h" onChange={(e)=>{handleL2h(e)}} /></Flex>
    <Flex justifyContent="space-between" mb={2}> <label>Price High to Low</label><Checkbox colorScheme="pink" name="h2l" onChange={(e)=>{handleH2l(e)}}/></Flex>
    <Flex justifyContent="space-between" mb={2}> <label>A-Z</label><Checkbox colorScheme="pink" isDisabled name="a2z" onChange={(e)=>{handleA2z(e)}}/></Flex>
    <Flex justifyContent="space-between" mb={2}> <label>Popularity</label><Checkbox colorScheme="pink" isDisabled /></Flex>
    <Flex justifyContent="space-between" mb={2}> <label>New Arrival</label><Checkbox colorScheme="pink" isDisabled /></Flex>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </Box>;
};

export default Sort;
