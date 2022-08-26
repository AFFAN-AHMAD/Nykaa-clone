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

const Sort = () => {
  useEffect(() => {
    
  },[])
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
    <Flex justifyContent="space-between"> <label>Price Low to High</label><Checkbox colorScheme="pink" /></Flex>
    <Flex justifyContent="space-between"> <label>Price High to Low</label><Checkbox colorScheme="pink" /></Flex>
    <Flex justifyContent="space-between"> <label>A-Z</label><Checkbox colorScheme="pink" /></Flex>
    <Flex justifyContent="space-between"> <label>Popularity</label><Checkbox colorScheme="pink" /></Flex>
    <Flex justifyContent="space-between"> <label>New Arrival</label><Checkbox colorScheme="pink" /></Flex>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </Box>;
};

export default Sort;
