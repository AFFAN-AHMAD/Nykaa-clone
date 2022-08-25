import React from "react";
import { Box ,Flex,Text,Heading  } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Cards from "./Cards";
const Products = () => {
    return <Box w="75%" margin={"auto"} mt="30px" >
                <Heading textAlign="center"> All Products</Heading>
        <Flex gap="50px" mt="40px">
            <Sidebar/>
            <Cards/>
        </Flex>
  </Box>;
};

export default Products;
