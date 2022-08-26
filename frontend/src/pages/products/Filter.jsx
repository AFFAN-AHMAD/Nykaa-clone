import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Stack,
  Checkbox,
  Flex
} from '@chakra-ui/react'
import axios from "axios"

const FIlter = () => {
  const [noOfBRands, SetNoOfBrands] = useState([]);
     const [noOfCategory,SetnoOfCategory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/products/brand").then(({ data }) => {
      SetNoOfBrands(data)
    })
    axios.get("http://localhost:8080/products/category").then(({ data }) => {
      SetnoOfCategory(data)
    })
  },[])
  return <Stack bg="white"><Accordion defaultIndex={[0]} allowMultiple>
    {/* category */}
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight={"bolder"}>
            Category
          </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} spacing={4}>
        {noOfCategory.map((ele) => (<Flex justifyContent="space-between"> <label>{ele}</label><Checkbox colorScheme="pink" /></Flex>))}
       
    </AccordionPanel>
  </AccordionItem>

    {/* brand */}
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight={"bolder"}>
            Brand
          </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
      <AccordionPanel pb={4}>
        {noOfBRands.map((ele) =>(<Flex justifyContent="space-between"> <label>{ele}</label><Checkbox colorScheme="pink" /></Flex>))
        
        
        }
      
    </AccordionPanel>
    </AccordionItem>
    
    {/* price */}
       <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight={"bolder"}>
            Price
          </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem
    </AccordionPanel>
  </AccordionItem>
    {/* gender */}
     <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight={"bolder"}>
            Gender
          </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem
    </AccordionPanel>
  </AccordionItem>
</Accordion></Stack>;
};

export default FIlter;
