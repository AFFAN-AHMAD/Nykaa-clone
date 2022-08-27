import React, { useEffect, useState } from "react";
import axios from "axios"
import { Box ,Flex,Text,Heading,Grid, GridItem ,Center  } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import ProductAddToCart from "./Cards.tsx";
const Products = () => {

    const [data,setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/products/filter").then(({data}) => {
    //   console.log(data)
      setData(data)
  })
},[])
    return <Box w="80%" margin={"auto"} mt="30px">
                <Heading textAlign="center" fontSize={"xl"}> All Products</Heading>
        <Flex  mt="10px" maxW="" >
            <Sidebar />
            <Grid templateColumns='repeat(3, 1fr)'  margin={"auto"}>

                {data.map((ele,i) => (
                    <ProductAddToCart data={ ele} key={i} />
                    ))}
            </Grid>
        </Flex>
  </Box>;
};

export default Products;
