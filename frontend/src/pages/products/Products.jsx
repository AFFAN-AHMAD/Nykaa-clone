import React, { useEffect, useState } from "react";
import axios from "axios"
import { Box ,Flex,Text,Heading,Grid, GridItem   } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import ProductAddToCart from "./Cards.tsx";
const Products = () => {

    const [data,setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({data}) => {
    //   console.log(data)
      setData(data)
  })
},[])
    return <Box w="75%" margin={"auto"} mt="30px" border={"5px solid teal"} bg="#f1f1f1">
                <Heading textAlign="center"> All Products</Heading>
        <Flex gap="50px" mt="40px" maxW="">
            <Sidebar />
            <Grid templateColumns='repeat(3, 1fr)' gap={2} border="2px solid red" p="null">

                {data.map((ele) => (
                    <ProductAddToCart data={ ele} />
                    ))}
            </Grid>
        </Flex>
  </Box>;
};

export default Products;
