import React, { useEffect, useState } from "react";
// import { Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
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
      Lorem 
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </Box>;
};

export default Sort;
